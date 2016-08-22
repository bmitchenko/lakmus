import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class ExactLengthValidator extends PropertyValidator {
	public exactLength: number;

    constructor(exactLength: number, errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "exactLength";
		this.exactLength = exactLength;
    }

    public isValid(context: ValidationContext): boolean {
        var value = context.propertyValue as string;

        if (value === null || value === undefined) {
            return true;
        }

        if (typeof value == "string") {
            return value.length == this.exactLength; 
        }

        return false;
    }
}