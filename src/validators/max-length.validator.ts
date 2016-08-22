import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class MaxLengthValidator extends PropertyValidator {
    public maxLength: number;

    constructor(maxLength: number, errorMessage?: string) {
        super(errorMessage);

        this.maxLength = maxLength;
        this.errorMessageResourceName = "maxLength";
    }

    public isValid(context: ValidationContext): boolean {
        var value = context.propertyValue;

        if (value == undefined) {
            return true;
        }

        if (typeof value == "string") {
            return value.length <= this.maxLength;
        }

        return false;
    }
}