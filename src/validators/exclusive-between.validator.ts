import { RangeValidator } from "./range.validator";

export class ExclusiveBetweenValidator extends RangeValidator {
    constructor(min: number, max: number, errorMessage?: string) {
        super(min, max, false, errorMessage);

        this.errorMessageResourceName = "exclusiveBetween";
    }
}