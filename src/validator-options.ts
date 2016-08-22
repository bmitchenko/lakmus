import PascalCasePropertyNameResolver from "./resolvers/pascal-case-property-name-resolver";
import PropertyNameResolver from "./resolvers/property-name-resolver";

/**
 * Validation settings.
 */
export class ValidatorOptions {
    /** Validation langugage. Default 'en'. */
    public static language: string = "en";

    /** Function to format display name. */
    public static propertyNameResolver: PropertyNameResolver = PascalCasePropertyNameResolver;
}