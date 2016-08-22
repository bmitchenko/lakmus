import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class EqualValidator extends PropertyValidator {
	public comparisonValue: any;

    constructor(comparisonValue: any, errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "equal";
		this.comparisonValue = comparisonValue;
    }

    public isValid(context: ValidationContext): boolean {
        if (this.comparisonValue instanceof Date && context.propertyValue instanceof Date) {
            return this.comparisonValue.getTime() == context.propertyValue.getTime(); 
        }

		return this.comparisonValue === context.propertyValue;
    }
}