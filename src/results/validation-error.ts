/** Represents an error that occurs during validation. */
export class ValidationError {

    /** Error message. */
    public errorMessage: string;

    /** Property name. */
    public propertyName: string;

    /**
     * Initializes a new instance of the ValidationError class.
     * @param errorMessage Error message.
     * @param propertyName Property name.
     */
    constructor(errorMessage: string, propertyName?: string) {
        this.errorMessage = errorMessage;
        this.propertyName = propertyName;
    }
}