import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class PhoneValidator extends PropertyValidator {
    constructor(errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "phone";
    }

    public isValid(context: ValidationContext): boolean {
        if (context.propertyValue == undefined) {
            return true;
        }

        return phoneRegExp.test(context.propertyValue);
    }
}

const phoneRegExp = /^(\+\s?)?(\(\+?\d+([\s\-\.]?\d+)?\)|\d+)([\s\-\.]?(\(\d+([\s\-\.]?\d+)?\)|\d+))*(\s?(x|ext\.?)\s?\d+)?$/;