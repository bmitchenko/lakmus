import { LanguageManager } from "./language-manager";

LanguageManager.registerLanguage("en", {
    argumentNull: "Value cannot be null. Parameter name: {parameterName}.",
    creditCard: "The {name} field is not a valid credit card number.",
    email: "The {name} field is not a valid e-mail address.",
    empty: "The {name} field must be empty.",
    equal: "The {name} field should be equal to '{comparisonValue}'.",
    exactLength: "Then {name} field must be {exactLength} characters in length.",
    exclusiveBetween: "The {name} field must be between {min} and {max} (exclusive).",
    greaterThan: "The {name} field must be greater than or equal to {min}.",
    greaterThanOrEqual: "The {name} field must be greater than {min}.",
    inclusiveBetween: "The field {name} must be between {min} and {max} (inclusive).",
    invalidField: "The {name} field is invalid.",
    invalidFieldType: "Type of the {name} field must be '{expectedType}'. Current type is '{type}'.", 
    lessThan: "The {name} field must be less than {max}.",
    lessThanOrEquals: "The {name} field must be less than or equal to {max}.",
    maxLength: "The {name} field must be a string with a maximum length of {maxLength}.",
    minLength: "The {name} field must be a string with a minimum length of {minLength}.",
    notEmpty: "The {name} field should not be empty.",
    notEqual: "The {name} field should not be equal to '{comparisonValue}'.",
    notNull: "The {name} field is required.",
    null: "The {name} field must be empty.",
    phone: "The {name} field is not a valid phone number.",
    predicate: "The specified condition was not met for the {name} field.",
    regularExpression: "The field {name} must match the regular expression '{regularExpression}'.",
    uri: "The {name} field is not a valid fully-qualified http, https, or ftp URL."
});