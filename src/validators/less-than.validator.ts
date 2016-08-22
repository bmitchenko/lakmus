import { RangeValidator } from "./range.validator";

export class LessThanValidator extends RangeValidator {
    constructor(max: number, errorMessage?: string) {
        super(null, max, false, errorMessage);

        this.errorMessageResourceName = "lessThan";
    }
}