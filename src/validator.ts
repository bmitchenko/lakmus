import { getMemberNameFromSelector } from "./utils";
import { ValidationRule } from "./validation-rule";
import { ValidationRuleConfigurator } from "./validation-rule-configurator";
import { ValidationResult } from "./results/validation-result";
import { LanguageManager } from "./localization/language-manager";
import { ValidatorOptions } from "./validator-options";
import "./localization/en";
import "./localization/ru";

/** 
 * Defines a validator for a particular type.
 */
export abstract class Validator<T> {
    private _rules: ValidationRule<T, any>[] = [];
    private _when: { (instance: T): boolean };


    /**
     * Validates the specified instance.
     * @param instance The instance to validate.
     */
    public validate(instance: T): ValidationResult {
        if (instance == null) {
            throw LanguageManager.getLocalizedMessage("argumentNull", ValidatorOptions.language, { parameterName: "instance" });
        }

        var result = new ValidationResult();

        this._rules.forEach((rule) => {
            var validationErrors = rule.validate(instance);

            if (validationErrors != null) {
                validationErrors.forEach((error) => {
                    result.errors.push(error);
                });
            }
        });

        return result;
    }

    /**
     * Performs validation and then throws an exception if validation fails.
     * @param instance Instance to validate.
     * @param validatorType Type of the validator.
     */
    public validateAndThrow(instance: any): void {
        var result = this.validate(instance);

        if (!result.isValid) {
            throw result.errors.map(x => x.errorMessage).join("\r\n");
        }
    }

    /**
     * Defines a validation rule for a specify property.
     * @param propertySelector The expression representing the property to validate.
     */
    protected ruleFor<TProperty>(propertySelector: (instance: T) => TProperty): ValidationRuleConfigurator<T, TProperty> {
        var propertyName = getMemberNameFromSelector(propertySelector);

        var rule = new ValidationRule<T, TProperty>(propertyName);
        this._rules.push(rule);

        var configurator = new ValidationRuleConfigurator(rule);

        if (this._when != null) {
            configurator.when(this._when);
        }

        return configurator;
    }

    /**
     * Specifies a condition limiting when validation rules should run.
     * @param predicate A function or lambda expression that specifies a condition for when validation rules should run.
     * @param ruleDefinitions A function with validation rule definitions.
     */
    protected when(predicate: (instance: T) => boolean, ruleDefinitions: () => any): void {
        this._when = predicate;

        ruleDefinitions();

        this._when = null;
    }
}