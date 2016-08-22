import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class RegularExpressionValidator extends PropertyValidator {
    public expression: RegExp;

    constructor(expression: RegExp, errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "regularExpression";
        this.expression = expression;
    }

    public isValid(context: ValidationContext): boolean {
        if (context.propertyValue == undefined) {
            return true;
        }

        if (typeof context.propertyValue == "string") {
            return this.expression.test(context.propertyValue);
        }

        return false;
    }
}