import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class NotEqualValidator extends PropertyValidator {
	public comparisonValue: any;

    constructor(valueToCompare: any, errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "notEqual";
		this.comparisonValue = valueToCompare;
    }

    public isValid(context: ValidationContext): boolean {
        if (this.comparisonValue instanceof Date && context.propertyValue instanceof Date) {
            return this.comparisonValue.getTime() != context.propertyValue.getTime(); 
        }

		return this.comparisonValue !== context.propertyValue;
    }
}