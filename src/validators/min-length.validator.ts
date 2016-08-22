import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class MinLengthValidator extends PropertyValidator {
    public minLength: number;

    constructor(minLength: number, errorMessage?: string) {
        super(errorMessage);

        this.minLength = minLength;
        this.errorMessageResourceName = "minLength";
    }

    public isValid(context: ValidationContext): boolean {
        var value = context.propertyValue;

        if (value == undefined) {
            return true;
        }

        if (typeof value == "string") {
            return value.length >= this.minLength;
        }

        return false;
    }
}