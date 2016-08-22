"use strict";
var utils_1 = require("./utils");
var validation_rule_1 = require("./validation-rule");
var validation_rule_configurator_1 = require("./validation-rule-configurator");
var validation_result_1 = require("./results/validation-result");
var language_manager_1 = require("./localization/language-manager");
var validator_options_1 = require("./validator-options");
require("./localization/en");
require("./localization/ru");
/**
 * Defines a validator for a particular type.
 */
var Validator = (function () {
    function Validator() {
        this._rules = [];
    }
    /**
     * Validates the specified instance.
     * @param instance The instance to validate.
     */
    Validator.prototype.validate = function (instance) {
        if (instance == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, { parameterName: "instance" });
        }
        var result = new validation_result_1.ValidationResult();
        this._rules.forEach(function (rule) {
            var validationErrors = rule.validate(instance);
            if (validationErrors != null) {
                validationErrors.forEach(function (error) {
                    result.errors.push(error);
                });
            }
        });
        return result;
    };
    /**
     * Performs validation and then throws an exception if validation fails.
     * @param instance Instance to validate.
     * @param validatorType Type of the validator.
     */
    Validator.prototype.validateAndThrow = function (instance) {
        var result = this.validate(instance);
        if (!result.isValid) {
            throw result.errors.map(function (x) { return x.errorMessage; }).join("\r\n");
        }
    };
    /**
     * Defines a validation rule for a specify property.
     * @param propertySelector The expression representing the property to validate.
     */
    Validator.prototype.ruleFor = function (propertySelector) {
        var propertyName = utils_1.getMemberNameFromSelector(propertySelector);
        var rule = new validation_rule_1.ValidationRule(propertyName);
        this._rules.push(rule);
        var configurator = new validation_rule_configurator_1.ValidationRuleConfigurator(rule);
        if (this._when != null) {
            configurator.when(this._when);
        }
        return configurator;
    };
    /**
     * Specifies a condition limiting when validation rules should run.
     * @param predicate A function or lambda expression that specifies a condition for when validation rules should run.
     * @param ruleDefinitions A function with validation rule definitions.
     */
    Validator.prototype.when = function (predicate, ruleDefinitions) {
        this._when = predicate;
        ruleDefinitions();
        this._when = null;
    };
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQkFBMEMsU0FBUyxDQUFDLENBQUE7QUFDcEQsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsNkNBQTJDLGdDQUFnQyxDQUFDLENBQUE7QUFDNUUsa0NBQWlDLDZCQUE2QixDQUFDLENBQUE7QUFDL0QsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsUUFBTyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNCLFFBQU8sbUJBQW1CLENBQUMsQ0FBQTtBQUUzQjs7R0FFRztBQUNIO0lBQUE7UUFDWSxXQUFNLEdBQTZCLEVBQUUsQ0FBQztJQXdFbEQsQ0FBQztJQXBFRzs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLFFBQVc7UUFDdkIsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxrQ0FBZSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxvQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN4SCxDQUFDO1FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxvQ0FBZ0IsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNyQixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFL0MsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztvQkFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG9DQUFnQixHQUF2QixVQUF3QixRQUFhO1FBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFlBQVksRUFBZCxDQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDTywyQkFBTyxHQUFqQixVQUE2QixnQkFBNEM7UUFDckUsSUFBSSxZQUFZLEdBQUcsaUNBQXlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUUvRCxJQUFJLElBQUksR0FBRyxJQUFJLGdDQUFjLENBQWUsWUFBWSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkIsSUFBSSxZQUFZLEdBQUcsSUFBSSx5REFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckIsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyx3QkFBSSxHQUFkLFVBQWUsU0FBbUMsRUFBRSxlQUEwQjtRQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUV2QixlQUFlLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBekVELElBeUVDO0FBekVxQixpQkFBUyxZQXlFOUIsQ0FBQSJ9