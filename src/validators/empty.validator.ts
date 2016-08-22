import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";
import { isNullOrWhitespace } from "../utils";

export class EmptyValidator extends PropertyValidator {
    constructor(errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "empty";
    }

    public isValid(context: ValidationContext): boolean {
        var value = context.propertyValue;

        if (value === undefined || value === null || value === 0 || value === false) {
            return true;
        }

        if (value instanceof Array) {
            return value.length == 0;
        }

        if (typeof value == "string" && isNullOrWhitespace(value)) {
            return true;
        }

        return false;
    }
}