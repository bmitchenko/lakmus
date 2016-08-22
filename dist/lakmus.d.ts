declare module "utils" {
    export function getMemberNameFromSelector<TResult>(name: (x?: TResult) => any): string;
    export function getTypeName(instance: any): string;
    export function stringEndsWith(subjectString: string, searchString: string): boolean;
    export function isNullOrWhitespace(text: string): boolean;
    export function countDigits(text: string): number;
}
declare module "validation-context" {
    /**
     * Validation context.
     */
    export class ValidationContext {
        /** The object to validate. */
        instance: any;
        /** Property name. */
        propertyName: string;
        /** Property name to display in error message. */
        propertyDisplayName: string;
        /** Property value. */
        propertyValue: any;
    }
}
declare module "results/validation-error" {
    /** Represents an error that occurs during validation. */
    export class ValidationError {
        /** Error message. */
        errorMessage: string;
        /** Property name. */
        propertyName: string;
        /**
         * Initializes a new instance of the ValidationError class.
         * @param errorMessage Error message.
         * @param propertyName Property name.
         */
        constructor(errorMessage: string, propertyName?: string);
    }
}
declare module "results/validation-result" {
    import { ValidationError } from "results/validation-error";
    /** The result of running a validator. */
    export class ValidationResult {
        /** A collection of errors. */
        errors: ValidationError[];
        /** Whether validation succeeded. */
        isValid: boolean;
    }
}
declare module "resolvers/error-message-resolver" {
    /**
     * Error message resolving function.
     * @param params Validator properties.
    */
    type ErrorMessageResolver = {
        (validatorProperties?: {
            [name: string]: string;
        }): string;
    };
    export default ErrorMessageResolver;
}
declare module "localization/language-resources" {
    import ErrorMessageResolver from "resolvers/error-message-resolver";
    export interface LanguageResources {
        argumentNull?: string | ErrorMessageResolver;
        creditCard?: string | ErrorMessageResolver;
        email?: string | ErrorMessageResolver;
        empty?: string | ErrorMessageResolver;
        equal?: string | ErrorMessageResolver;
        exactLength?: string | ErrorMessageResolver;
        exclusiveBetween?: string | ErrorMessageResolver;
        greaterThan?: string | ErrorMessageResolver;
        greaterThanOrEqual?: string | ErrorMessageResolver;
        inclusiveBetween?: string | ErrorMessageResolver;
        invalidField?: string | ErrorMessageResolver;
        invalidFieldType?: string | ErrorMessageResolver;
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
}
declare module "localization/language-manager" {
    import { LanguageResources } from "localization/language-resources";
    /**
     * Represents a language manager.
     */
    export class LanguageManager {
        /** List of registered languages. */
        static registeredLanguages: {
            [language: string]: LanguageResources;
        };
        /**
         * Registers a list of localized messages for the specified language.
         * @parem language Language.
         * @param languageResources List of localized messages.
         */
        static registerLanguage(language: string, languageResources: LanguageResources): void;
        /**
         * Gets a localized message based on the specified language.
         * @parem resourceName Message name.
         * @param language Language.
         * @params Message format parameters.
         */
        static getLocalizedMessage(resourceName: string, language: string, params?: {
            [name: string]: any;
        }): string;
    }
}
declare module "resolvers/property-name-resolver" {
    /** Property name resolving function. */
    type PropertyNameResolver = (name: string) => string;
    export default PropertyNameResolver;
}
declare module "resolvers/pascal-case-property-name-resolver" {
    import PropertyNameResolver from "resolvers/property-name-resolver";
    /**
     * PascalCase property name resolver (default).
     * @param name Property name.
     */
    var PascalCasePropertyNameResolver: PropertyNameResolver;
    export default PascalCasePropertyNameResolver;
}
declare module "validator-options" {
    import PropertyNameResolver from "resolvers/property-name-resolver";
    /**
     * Validation settings.
     */
    export class ValidatorOptions {
        /** Validation langugage. Default 'en'. */
        static language: string;
        /** Function to format display name. */
        static propertyNameResolver: PropertyNameResolver;
    }
}
declare module "localization/en" {
}
declare module "localization/ru" {
}
declare module "validator" {
    import { ValidationRuleConfigurator } from "validation-rule-configurator";
    import { ValidationResult } from "results/validation-result";
    import "localization/en";
    import "localization/ru";
    /**
     * Defines a validator for a particular type.
     */
    export abstract class Validator<T> {
        private _rules;
        private _when;
        /**
         * Validates the specified instance.
         * @param instance The instance to validate.
         */
        validate(instance: T): ValidationResult;
        /**
         * Performs validation and then throws an exception if validation fails.
         * @param instance Instance to validate.
         * @param validatorType Type of the validator.
         */
        validateAndThrow(instance: any): void;
        /**
         * Defines a validation rule for a specify property.
         * @param propertySelector The expression representing the property to validate.
         */
        protected ruleFor<TProperty>(propertySelector: (instance: T) => TProperty): ValidationRuleConfigurator<T, TProperty>;
        /**
         * Specifies a condition limiting when validation rules should run.
         * @param predicate A function or lambda expression that specifies a condition for when validation rules should run.
         * @param ruleDefinitions A function with validation rule definitions.
         */
        protected when(predicate: (instance: T) => boolean, ruleDefinitions: () => any): void;
    }
}
declare module "validators/property-validator" {
    import { ValidationContext } from "validation-context";
    export abstract class PropertyValidator {
        errorMessage: string;
        errorMessageResourceName: string;
        constructor(errorMessage?: string);
        getErrorMessage(context: ValidationContext): string;
        private getFormatParameters(propertyName);
        abstract isValid(context: ValidationContext): boolean;
    }
}
declare module "validation-rule" {
    import { Validator } from "validator";
    import { ValidationError } from "results/validation-error";
    import { PropertyValidator } from "validators/property-validator";
    /** Defines a rule associated with a property which can have multiple validators. */
    export class ValidationRule<TInstance, TProperty> {
        /** Collection validators to apply. */
        collectionValidators: Validator<any>[];
        /** Property name. */
        propertyName: string;
        /** Property name to display in error message. */
        propertyDisplayName: string;
        /** Property validators to apply. */
        propertyValidators: PropertyValidator[];
        /** Custom validators to apply. */
        validators: Validator<TProperty>[];
        /** Conditions that control when the rule should execute. */
        when: {
            (instance: TInstance): boolean;
        }[];
        /**
         * Initializes a new instance of the ValidationRule class.
         * @param name Property name.
         */
        constructor(name: string);
        /**
         * Performs validation using an object instance and returns a collection of validation errors.
         * @param instance The object to validate.
         */
        validate(instance: TInstance): ValidationError[];
        private validateWithCollectionValidator(context, validator, errors);
        private validateWithValidator(value, validator, errors);
        private validateWithPropertyValidator(context, validator, errors);
        private getValue(instance);
    }
}
declare module "validators/credit-card.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class CreditCardValidator extends PropertyValidator {
        constructor(errorMessage?: string);
        private luhnCheck(cardNumber);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/email.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class EmailValidator extends PropertyValidator {
        constructor(errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/empty.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class EmptyValidator extends PropertyValidator {
        constructor(errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/equal.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class EqualValidator extends PropertyValidator {
        comparisonValue: any;
        constructor(comparisonValue: any, errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/exact-length.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class ExactLengthValidator extends PropertyValidator {
        exactLength: number;
        constructor(exactLength: number, errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/range.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export abstract class RangeValidator extends PropertyValidator {
        private inclusive;
        private min;
        private max;
        constructor(min?: number, max?: number, inclusive?: boolean, errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/exclusive-between.validator" {
    import { RangeValidator } from "validators/range.validator";
    export class ExclusiveBetweenValidator extends RangeValidator {
        constructor(min: number, max: number, errorMessage?: string);
    }
}
declare module "validators/greater-than-or-equal.validator" {
    import { RangeValidator } from "validators/range.validator";
    export class GreaterThanOrEqualValidator extends RangeValidator {
        constructor(min: number, errorMessage?: string);
    }
}
declare module "validators/greater-than.validator" {
    import { RangeValidator } from "validators/range.validator";
    export class GreaterThanValidator extends RangeValidator {
        constructor(min: number, errorMessage?: string);
    }
}
declare module "validators/inclusive-between.validator" {
    import { RangeValidator } from "validators/range.validator";
    export class InclusiveBetweenValidator extends RangeValidator {
        constructor(min: number, max: number, errorMessage?: string);
    }
}
declare module "validators/less-than-or-equal.validator" {
    import { RangeValidator } from "validators/range.validator";
    export class LessThanOrEqualValidator extends RangeValidator {
        constructor(max: number, errorMessage?: string);
    }
}
declare module "validators/less-than.validator" {
    import { RangeValidator } from "validators/range.validator";
    export class LessThanValidator extends RangeValidator {
        constructor(max: number, errorMessage?: string);
    }
}
declare module "validators/max-length.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class MaxLengthValidator extends PropertyValidator {
        maxLength: number;
        constructor(maxLength: number, errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/min-length.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class MinLengthValidator extends PropertyValidator {
        minLength: number;
        constructor(minLength: number, errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/not-empty.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class NotEmptyValidator extends PropertyValidator {
        constructor(errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/not-equal.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class NotEqualValidator extends PropertyValidator {
        comparisonValue: any;
        constructor(valueToCompare: any, errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/not-null.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class NotNullValidator extends PropertyValidator {
        constructor(errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/null.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class NullValidator extends PropertyValidator {
        constructor(errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/phone.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class PhoneValidator extends PropertyValidator {
        constructor(errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/predicate.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class PredicateValidator extends PropertyValidator {
        predicate: (value: any, instance?: any) => boolean;
        constructor(predicate: (value: any, instance?: any) => boolean, errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/regular-expression.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class RegularExpressionValidator extends PropertyValidator {
        expression: RegExp;
        constructor(expression: RegExp, errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validators/uri.validator" {
    import { PropertyValidator } from "validators/property-validator";
    import { ValidationContext } from "validation-context";
    export class UriValidator extends PropertyValidator {
        constructor(errorMessage?: string);
        isValid(context: ValidationContext): boolean;
    }
}
declare module "validation-rule-configurator" {
    import { ValidationRule } from "validation-rule";
    import { Validator } from "validator";
    import { PropertyValidator } from "validators/property-validator";
    /** Helper class that can be used to configure a validation rule. */
    export class ValidationRuleConfigurator<TInstance, TProperty> {
        private _rule;
        /**
         * Initializes a new instance of the ValidationRuleConfigurator class.
         * @param rule Rule to be configured.
         */
        constructor(rule: ValidationRule<TInstance, any>);
        /**
         * Сan be used to specify condition that control when the rule should execute.
         * @param predicate Condition.
         */
        when(predicate: (instance: TInstance) => boolean): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Specifies a custom error message to use if validation fails.
         * @param errorMessage The error message to use.
         */
        withMessage(errorMessage: string): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Specifies a custom error message resource to use when validation fails.
         * @param resourceName The resource to use.
         */
        withLocalizedMessage(resourceName: string): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Specifies a custom property name to use within the error message.
         * @param name Custom property name to use.
         */
        withName(name: string): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a custom validator on the current rule builder.
         * @param validator Property or object validator instance.
         */
        setValidator(validator: Validator<TProperty> | PropertyValidator): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a custom collection validator on the current rule builder.
         * @param validator Object validator to apply.
         */
        setCollectionValidator(validator: Validator<any>): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'credit card' validator on the current rule.
         * Validation will fail if the property is not a credit card number.
         */
        creditCard(): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines an 'email' validator on the current rule.
         * Validation will fail if the property is not an email address.
         */
        email(): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines an 'empty' validator on the current rule.
         * Validation will fail if the property is not null, not undefined, not whitespace, not zero and not an empty array.
         */
        empty(): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines an 'equal' validator on the current rule.
         * Validation will fail if the specified value is not equal to the value of the property.
         */
        equal(valueToCompare: any): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines an 'exact length' validator on the current rule.
         * Validation will fail if the length of the string is not equal to the length specified.
         * @param length Exact length.
         */
        exactLength(length: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'exclusive between' validator on the current rule.
         * Validation will fail if the value of the property is outside of the specifed range. The range is exclusive.
         * @param min Minimum value.
         * @param max Maximum value.
         */
        exclusiveBetween(min: number, max: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'greater than' validator on the current rule.
         * The validation will fail if the property value is less than or equal to the specified value.
         * @param min Minimum value.
         */
        greaterThan(min: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'greater than or equal' validator on the current rule.
         * The validation will fail if the property value is less than the specified value.
         * @param min Minimum value.
         */
        greaterThanOrEqual(min: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'inclusive between' validator on the current rule.
         * Validation will fail if the value of the property is outside of the specifed range. The range is inclusive.
         * @param min Minimum value.
         * @param max Maximum value.
         */
        inclusiveBetween(min: number, max: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'less than' validator on the current rule.
         * The validation will fail if the property value is more than or equal to the specified value.
         * @param max Maximum value.
         */
        lessThan(max: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'less than or equal' validator on the current rule.
         * The validation will fail if the property value is more than the specified value.
         * @param max Maximum value.
         */
        lessThanOrEqual(max: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'maximum length' validator on the current rule.
         * Validation will fail if the length of the string is more than the specified value.
         * @param maxLength Maximum length.
         */
        maxLenght(maxLength: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'minimum length' validator on the current rule.
         * Validation will fail if the length of the string is less than the specified value.
         * @param maxLength Maximum length.
         */
        minLenght(minLength: number): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines an 'not empty' validator on the current rule.
         * Validation will fail if the property is null, undefined, whitespace, zero or an empty array.
         */
        notEmpty(): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'not equal' validator on the current rule.
         * Validation will fail if the specified value is equal to the value of the property.
         */
        notEqual(valueToCompare: any): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'not null' validator on the current rule.
         * Validation will fail if the property is null or undefined.
         */
        notNull(): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'null' validator on the current rule.
         * Validation will fail if the property is not null and not undefined.
         */
        null(): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'phone' validator on the current rule.
         * Validation will fail if the property is not a well-formed phone number.
         */
        phone(): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'predicate' validator on the current rule.
         * Validation will fail if the specified function or lambda returns false.
         * @param predicate A function or lambda expression specifying the predicate.
         */
        must(predicate: (property: TProperty, instance?: TInstance) => boolean): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines a 'regular expression' validator on the current rule.
         * The validation will fail if the property does not match the regular expression.
         * @param regularExpression The regular expression to check the value against.
         */
        regularExpression(regularExpression: RegExp): ValidationRuleConfigurator<TInstance, TProperty>;
        /**
         * Defines an 'uri' validator on the current rule.
         * Validation will fail if the property is not a well-formed URI.
         */
        uri(): ValidationRuleConfigurator<TInstance, TProperty>;
    }
}
declare module "validator-factory" {
    import { ValidationResult } from "results/validation-result";
    import { Validator } from "validator";
    /**
     * Factory for creating validators.
     * */
    export class ValidatorFactory {
        private static validators;
        /**
         * Gets a validator (singleton) of the specified type.
         * @param validatorType Type of the validator.
         */
        static getValidator(validatorType: any): Validator<any>;
        /**
         * Performs validation.
         * @param instance Instance to validate.
         * @param validatorType Type of the validator.
         */
        static validate(instance: any, validatorType: Function): ValidationResult;
        /**
         * Performs validation and then throws an exception if validation fails.
         * @param instance Instance to validate.
         * @param validatorType Type of the validator.
         */
        static validateAndThrow(instance: any, validatorType: Function): void;
    }
}
