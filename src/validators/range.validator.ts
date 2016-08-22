import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export abstract class RangeValidator extends PropertyValidator {
    private inclusive: boolean;
	private min: number;
	private max: number;

    constructor(min?: number, max?: number, inclusive = true, errorMessage?: string) {
        super(errorMessage);

		this.min = min;
        this.max = max;
        this.inclusive = inclusive;
    }

    public isValid(context: ValidationContext): boolean {
        var value = context.propertyValue as number;

        if (value == null) {
            return true;
        }

        if (typeof value == "number") {
            if (this.min != null) {
                if (this.inclusive) {
                    if (value < this.min) {
                        return false;
                    }
                }
                else {
                    if (value <= this.min) {
                        return false;
                    }
                }
            }

            if (this.max != null) {
                if (this.inclusive) {
                    if (value > this.max) {
                        return false;
                    }
                }
                else {
                    if (value >= this.max) {
                        return false;
                    }
                }
            }

            return true;
        }

        return false;
    }
}