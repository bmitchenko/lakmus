import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";
import { Validator } from "../validator";
import { isNullOrWhitespace } from "../utils";

export class NotEmptyValidator extends PropertyValidator {
    constructor(errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "notEmpty";
    }

    public isValid(context: ValidationContext): boolean {
        var value = context.propertyValue;

        if (value === undefined || value === null || value === 0 || value === false) {
            return false;
        }

        if (typeof value == "string" && isNullOrWhitespace(value)) {
            return false;
        }
        if (value instanceof Array) {
            return value.length > 0;
        }

        return true;
    }
}