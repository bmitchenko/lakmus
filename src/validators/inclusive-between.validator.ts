import { RangeValidator } from "./range.validator";

export class InclusiveBetweenValidator extends RangeValidator {
    constructor(min: number, max: number, errorMessage?: string) {
        super(min, max, true, errorMessage);

        this.errorMessageResourceName = "inclusiveBetween";
    }
}