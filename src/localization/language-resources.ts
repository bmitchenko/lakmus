import ErrorMessageResolver from "../resolvers/error-message-resolver";

export interface LanguageResources {
    argumentNull?: string | ErrorMessageResolver; // parameterName
    creditCard?: string | ErrorMessageResolver;
    email?: string | ErrorMessageResolver;
    empty?: string | ErrorMessageResolver;
    equal?: string | ErrorMessageResolver;
    exactLength?: string | ErrorMessageResolver;
    exclusiveBetween?: string | ErrorMessageResolver;
    greaterThan?: string | ErrorMessageResolver;
    greaterThanOrEqual?: string | ErrorMessageResolver;
    inclusiveBetween?: string | ErrorMessageResolver;
    invalidField?: string | ErrorMessageResolver; // name
    invalidFieldType?: string | ErrorMessageResolver; // name, type, expectedType 
    lessThan?: string | ErrorMessageResolver;
    lessThanOrEquals?: string | ErrorMessageResolver;
    maxLength?: string | ErrorMessageResolver;
    minLength?: string | ErrorMessageResolver;
    notEmpty?: string | ErrorMessageResolver;
    notEqual?: string | ErrorMessageResolver;
    notNull?: string | ErrorMessageResolver;
    null?: string | ErrorMessageResolver;
    phone?: string | ErrorMessageResolver;
    predicate?: string | ErrorMessageResolver;
    regularExpression?: string | ErrorMessageResolver;
    uri?: string | ErrorMessageResolver;
}