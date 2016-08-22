import { ValidationError } from "./validation-error";

/** The result of running a validator. */
export class ValidationResult {
    
    /** A collection of errors. */
    public errors: ValidationError[] = [];

    /** Whether validation succeeded. */
    public get isValid(): boolean {
        return this.errors.length == 0;
    }
}