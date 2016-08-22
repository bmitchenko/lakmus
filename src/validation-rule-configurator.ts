import { ValidationRule } from "./validation-rule";
import { Validator } from "./validator";
import { PropertyValidator } from "./validators/property-validator";
import { CreditCardValidator } from "./validators/credit-card.validator";
import { EmailValidator } from "./validators/email.validator";
import { EmptyValidator } from "./validators/empty.validator";
import { EqualValidator } from "./validators/equal.validator";
import { ExactLengthValidator } from "./validators/exact-length.validator";
import { ExclusiveBetweenValidator } from "./validators/exclusive-between.validator";
import { GreaterThanOrEqualValidator } from "./validators/greater-than-or-equal.validator";
import { GreaterThanValidator } from "./validators/greater-than.validator";
import { InclusiveBetweenValidator } from "./validators/inclusive-between.validator";
import { LessThanOrEqualValidator } from "./validators/less-than-or-equal.validator";
import { LessThanValidator } from "./validators/less-than.validator";
import { MaxLengthValidator } from "./validators/max-length.validator";
import { MinLengthValidator } from "./validators/min-length.validator";
import { NotEmptyValidator } from "./validators/not-empty.validator";
import { NotEqualValidator } from "./validators/not-equal.validator";
import { NotNullValidator } from "./validators/not-null.validator";
import { NullValidator } from "./validators/null.validator";
import { PhoneValidator } from "./validators/phone.validator";
import { PredicateValidator } from "./validators/predicate.validator";
import { RangeValidator } from "./validators/range.validator";
import { RegularExpressionValidator } from "./validators/regular-expression.validator";
import { UriValidator } from "./validators/uri.validator";

/** Helper class that can be used to configure a validation rule. */
export class ValidationRuleConfigurator<TInstance, TProperty> {
    private _rule: ValidationRule<TInstance, any>;

    /**
     * Initializes a new instance of the ValidationRuleConfigurator class.
     * @param rule Rule to be configured.
     */
    constructor(rule: ValidationRule<TInstance, any>) {
        this._rule = rule;
    }

    /**
     * Сan be used to specify condition that control when the rule should execute.
     * @param predicate Condition.
     */
    public when(predicate: (instance: TInstance) => boolean): ValidationRuleConfigurator<TInstance, TProperty> {
        this._rule.when.push(predicate);
        return this;
    }

    /**
     * Specifies a custom error message to use if validation fails.
     * @param errorMessage The error message to use.
     */
    public withMessage(errorMessage: string): ValidationRuleConfigurator<TInstance, TProperty> {
        if (this._rule.propertyValidators.length > 0) {
            this._rule.propertyValidators[this._rule.propertyValidators.length - 1].errorMessage = errorMessage;
            return this;
        }

        throw "Can't set error message: validator list is empty.";
    }

    /**
     * Specifies a custom error message resource to use when validation fails.
     * @param resourceName The resource to use.
     */
    public withLocalizedMessage(resourceName: string): ValidationRuleConfigurator<TInstance, TProperty> {
        if (this._rule.propertyValidators.length > 0) {
            this._rule.propertyValidators[this._rule.propertyValidators.length - 1].errorMessageResourceName = resourceName;
            return this;
        }

        throw "Can't set error message: validator list is empty.";
    }

    /**
     * Specifies a custom property name to use within the error message.
     * @param name Custom property name to use.
     */
    public withName(name: string): ValidationRuleConfigurator<TInstance, TProperty> {
        this._rule.propertyDisplayName = name;
        return this;
    }

    /**
     * Defines a custom validator on the current rule builder.
     * @param validator Property or object validator instance.
     */
    public setValidator(validator: Validator<TProperty> | PropertyValidator): ValidationRuleConfigurator<TInstance, TProperty> {
        if (validator instanceof PropertyValidator) {
            this._rule.propertyValidators.push(validator);
        }
        else {
            this._rule.validators.push(validator);
        }
        
        return this;
    }

    /**
     * Defines a custom collection validator on the current rule builder.
     * @param validator Object validator to apply.
     */
    public setCollectionValidator(validator: Validator<any>): ValidationRuleConfigurator<TInstance, TProperty> {
        this._rule.collectionValidators.push(validator);
        return this;
    }

    /**
     * Defines a 'credit card' validator on the current rule. 
     * Validation will fail if the property is not a credit card number.
     */
    public creditCard(): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new CreditCardValidator());
    }

    /**
     * Defines an 'email' validator on the current rule. 
     * Validation will fail if the property is not an email address.
     */
    public email(): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new EmailValidator());
    }

    /**
     * Defines an 'empty' validator on the current rule. 
     * Validation will fail if the property is not null, not undefined, not whitespace, not zero and not an empty array.
     */
    public empty(): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new NotNullValidator());
    }

    /**
     * Defines an 'equal' validator on the current rule. 
     * Validation will fail if the specified value is not equal to the value of the property.
     */
    public equal(valueToCompare: any): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new EqualValidator(valueToCompare));
    }

    /**
     * Defines an 'exact length' validator on the current rule. 
     * Validation will fail if the length of the string is not equal to the length specified.
     * @param length Exact length. 
     */
    public exactLength(length: number): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new ExactLengthValidator(length));
    }

    /**
     * Defines a 'exclusive between' validator on the current rule. 
     * Validation will fail if the value of the property is outside of the specifed range. The range is exclusive.
     * @param min Minimum value. 
     * @param max Maximum value.
     */
    public exclusiveBetween(min: number, max: number): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new ExclusiveBetweenValidator(min, max));
    }

    /**
     * Defines a 'greater than' validator on the current rule. 
     * The validation will fail if the property value is less than or equal to the specified value.
     * @param min Minimum value. 
     */
    public greaterThan(min: number): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new GreaterThanValidator(min));
    }

    /**
     * Defines a 'greater than or equal' validator on the current rule. 
     * The validation will fail if the property value is less than the specified value.
     * @param min Minimum value. 
     */
    public greaterThanOrEqual(min: number): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new GreaterThanOrEqualValidator(min));
    }

    /**
     * Defines a 'inclusive between' validator on the current rule. 
     * Validation will fail if the value of the property is outside of the specifed range. The range is inclusive.
     * @param min Minimum value. 
     * @param max Maximum value.
     */
    public inclusiveBetween(min: number, max: number): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new InclusiveBetweenValidator(min, max));
    }

    /**
     * Defines a 'less than' validator on the current rule. 
     * The validation will fail if the property value is more than or equal to the specified value.
     * @param max Maximum value.
     */
    public lessThan(max: number): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new LessThanValidator(max));
    }

    /**
     * Defines a 'less than or equal' validator on the current rule. 
     * The validation will fail if the property value is more than the specified value.
     * @param max Maximum value.
     */
    public lessThanOrEqual(max: number): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new LessThanOrEqualValidator(max));
    }

    /**
     * Defines a 'maximum length' validator on the current rule.
     * Validation will fail if the length of the string is more than the specified value.
     * @param maxLength Maximum length.
     */
    public maxLenght(maxLength: number): ValidationRuleConfigurator<TInstance, TProperty> {
        this.setValidator(new MaxLengthValidator(maxLength));
        return this;
    }

    /**
     * Defines a 'minimum length' validator on the current rule.
     * Validation will fail if the length of the string is less than the specified value.
     * @param maxLength Maximum length.
     */
    public minLenght(minLength: number): ValidationRuleConfigurator<TInstance, TProperty> {
        this.setValidator(new MinLengthValidator(minLength));
        return this;
    }

    /**
     * Defines an 'not empty' validator on the current rule. 
     * Validation will fail if the property is null, undefined, whitespace, zero or an empty array.
     */
    public notEmpty(): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new NotEmptyValidator());
    }

    /**
     * Defines a 'not equal' validator on the current rule. 
     * Validation will fail if the specified value is equal to the value of the property.
     */
    public notEqual(valueToCompare: any): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new NotEqualValidator(valueToCompare));
    }

    /**
     * Defines a 'not null' validator on the current rule. 
     * Validation will fail if the property is null or undefined.
     */
    public notNull(): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new NotNullValidator());
    }

    /**
     * Defines a 'null' validator on the current rule. 
     * Validation will fail if the property is not null and not undefined.
     */
    public null(): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new NullValidator());
    }

    /**
     * Defines a 'phone' validator on the current rule. 
     * Validation will fail if the property is not a well-formed phone number. 
     */
    public phone(): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new PhoneValidator());
    }

    /**
     * Defines a 'predicate' validator on the current rule.
     * Validation will fail if the specified function or lambda returns false.
     * @param predicate A function or lambda expression specifying the predicate.
     */
    public must(predicate: (property: TProperty, instance?: TInstance) => boolean): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new PredicateValidator(predicate));
    }

    /**
     * Defines a 'regular expression' validator on the current rule. 
     * The validation will fail if the property does not match the regular expression.
     * @param regularExpression The regular expression to check the value against.
     */
    public regularExpression(regularExpression: RegExp): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new RegularExpressionValidator(regularExpression));
    }

    /**
     * Defines an 'uri' validator on the current rule. 
     * Validation will fail if the property is not a well-formed URI. 
     */
    public uri(): ValidationRuleConfigurator<TInstance, TProperty> {
        return this.setValidator(new UriValidator());
    }
}