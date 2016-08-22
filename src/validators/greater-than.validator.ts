import { RangeValidator } from "./range.validator";

export class GreaterThanValidator extends RangeValidator {
    constructor(min: number, errorMessage?: string) {
        super(min, null, false, errorMessage);

        this.errorMessageResourceName = "greaterThan";
    }
}