import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class NullValidator extends PropertyValidator {
    constructor(errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "null";
    }

    public isValid(context: ValidationContext): boolean {
        return context.propertyValue === null || context.propertyValue === undefined;
    }
}