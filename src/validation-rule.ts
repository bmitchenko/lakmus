import { Validator } from "./validator";
import { ValidationContext } from "./validation-context";
import { ValidationError } from "./results/validation-error";
import { PropertyValidator } from "./validators/property-validator";
import { LanguageManager } from "./localization/language-manager";
import { ValidatorOptions } from "./validator-options";

/** Defines a rule associated with a property which can have multiple validators. */
export class ValidationRule<TInstance, TProperty> {

    /** Collection validators to apply. */
    public collectionValidators: Validator<any>[] = [];

    /** Property name. */
    public propertyName: string;

    /** Property name to display in error message. */
    public propertyDisplayName: string;

    /** Property validators to apply. */
    public propertyValidators: PropertyValidator[] = [];

    /** Custom validators to apply. */
    public validators: Validator<TProperty>[] = [];

    /** Conditions that control when the rule should execute. */
    public when: { (instance: TInstance): boolean }[] = [];

    /**
     * Initializes a new instance of the ValidationRule class.
     * @param name Property name.
     */
    constructor(name: string) {
        this.propertyDisplayName = ValidatorOptions.propertyNameResolver(name);
        this.propertyName = name;
    }

    /**
     * Performs validation using an object instance and returns a collection of validation errors.
     * @param instance The object to validate.
     */
    public validate(instance: TInstance): ValidationError[] {
        if (instance == null) {
            throw LanguageManager.getLocalizedMessage("argumentNull", ValidatorOptions.language, {
                parameterName: "instance"
            });
        }

        var errors: ValidationError[] = [];

        if (this.when != null) {
            if (this.when.some(x => !x(instance))) {
                return errors;
            }
        }

        var value = this.getValue(instance);

        var context = new ValidationContext();

        context.instance = instance;
        context.propertyDisplayName = this.propertyDisplayName;
        context.propertyName = this.propertyName;
        context.propertyValue = value;

        if (this.collectionValidators != null) {
            this.collectionValidators.forEach((collectionValidator) => {
                this.validateWithCollectionValidator(context, collectionValidator, errors);
            });
        }

        if (this.validators != null) {
            this.validators.forEach((validator) => {
                this.validateWithValidator(context.propertyValue, validator, errors);
            });
        }

        if (this.propertyValidators != null) {
            this.propertyValidators.forEach((propertyValidator) => {
                this.validateWithPropertyValidator(context, propertyValidator, errors);
            });
        }

        return errors;
    }

    private validateWithCollectionValidator(context: ValidationContext, validator: Validator<TProperty>, errors: ValidationError[]): void {
        if (context.propertyValue == null) {
            return;
        }

        if (context.propertyValue instanceof Array) {
            context.propertyValue.forEach((item) => {
                if (item != null) {
                    this.validateWithValidator(item, validator, errors);
                }
            });
        }
        else {
            throw LanguageManager.getLocalizedMessage("invalidPropertyType", ValidatorOptions.language, {
                propertyName: context.propertyName,
                type: typeof context.propertyValue,
                expectedType: "Array"
            });
        }
    }

    private validateWithValidator(value: TProperty, validator: Validator<TProperty>, errors: ValidationError[]): void {
        if (value == null) {
            return;
        }

        var result = validator.validate(value);

        result.errors.forEach((error) => {
            errors.push(error);
        });
    }

    private validateWithPropertyValidator(context: ValidationContext, validator: PropertyValidator, errors: ValidationError[]): void {
        if (!validator.isValid(context)) {
            errors.push(new ValidationError(validator.getErrorMessage(context), context.propertyName));
        }
    }

    private getValue(instance: TInstance): TProperty {
        var value = instance[this.propertyName];

        // if (window) {
        //     if (window["ko"]) {
        //         value = window["ko"].unwrap(value);
        //     }
        // }

        return value;
    }
}