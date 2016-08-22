/**
 * Validation context.
 */
export class ValidationContext {

    /** The object to validate. */
    public instance: any;

    /** Property name. */
    public propertyName: string;

    /** Property name to display in error message. */
    public propertyDisplayName: string;

    /** Property value. */
    public propertyValue: any;
}