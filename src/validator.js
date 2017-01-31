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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFDTCxnQkFBQztBQUFELENBekVBLEFBeUVDLElBQUE7QUF6RXFCLGlCQUFTLFlBeUU5QixDQUFBIiwiZmlsZSI6InNyYy92YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNZW1iZXJOYW1lRnJvbVNlbGVjdG9yIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGUgfSBmcm9tIFwiLi92YWxpZGF0aW9uLXJ1bGVcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVDb25maWd1cmF0b3IgfSBmcm9tIFwiLi92YWxpZGF0aW9uLXJ1bGUtY29uZmlndXJhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tIFwiLi9yZXN1bHRzL3ZhbGlkYXRpb24tcmVzdWx0XCI7XHJcbmltcG9ydCB7IExhbmd1YWdlTWFuYWdlciB9IGZyb20gXCIuL2xvY2FsaXphdGlvbi9sYW5ndWFnZS1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRvck9wdGlvbnMgfSBmcm9tIFwiLi92YWxpZGF0b3Itb3B0aW9uc1wiO1xyXG5pbXBvcnQgXCIuL2xvY2FsaXphdGlvbi9lblwiO1xyXG5pbXBvcnQgXCIuL2xvY2FsaXphdGlvbi9ydVwiO1xyXG5cclxuLyoqIFxyXG4gKiBEZWZpbmVzIGEgdmFsaWRhdG9yIGZvciBhIHBhcnRpY3VsYXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWxpZGF0b3I8VD4ge1xyXG4gICAgcHJpdmF0ZSBfcnVsZXM6IFZhbGlkYXRpb25SdWxlPFQsIGFueT5bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfd2hlbjogeyAoaW5zdGFuY2U6IFQpOiBib29sZWFuIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIHRoZSBzcGVjaWZpZWQgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIHRvIHZhbGlkYXRlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsaWRhdGUoaW5zdGFuY2U6IFQpOiBWYWxpZGF0aW9uUmVzdWx0IHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBMYW5ndWFnZU1hbmFnZXIuZ2V0TG9jYWxpemVkTWVzc2FnZShcImFyZ3VtZW50TnVsbFwiLCBWYWxpZGF0b3JPcHRpb25zLmxhbmd1YWdlLCB7IHBhcmFtZXRlck5hbWU6IFwiaW5zdGFuY2VcIiB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdGlvblJlc3VsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLl9ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3JzID0gcnVsZS52YWxpZGF0ZShpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVycm9ycy5wdXNoKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyB2YWxpZGF0aW9uIGFuZCB0aGVuIHRocm93cyBhbiBleGNlcHRpb24gaWYgdmFsaWRhdGlvbiBmYWlscy5cclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZSBJbnN0YW5jZSB0byB2YWxpZGF0ZS5cclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JUeXBlIFR5cGUgb2YgdGhlIHZhbGlkYXRvci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbGlkYXRlQW5kVGhyb3coaW5zdGFuY2U6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnZhbGlkYXRlKGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3JzLm1hcCh4ID0+IHguZXJyb3JNZXNzYWdlKS5qb2luKFwiXFxyXFxuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYSB2YWxpZGF0aW9uIHJ1bGUgZm9yIGEgc3BlY2lmeSBwcm9wZXJ0eS5cclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVNlbGVjdG9yIFRoZSBleHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgcHJvcGVydHkgdG8gdmFsaWRhdGUuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBydWxlRm9yPFRQcm9wZXJ0eT4ocHJvcGVydHlTZWxlY3RvcjogKGluc3RhbmNlOiBUKSA9PiBUUHJvcGVydHkpOiBWYWxpZGF0aW9uUnVsZUNvbmZpZ3VyYXRvcjxULCBUUHJvcGVydHk+IHtcclxuICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gZ2V0TWVtYmVyTmFtZUZyb21TZWxlY3Rvcihwcm9wZXJ0eVNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgdmFyIHJ1bGUgPSBuZXcgVmFsaWRhdGlvblJ1bGU8VCwgVFByb3BlcnR5Pihwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgIHRoaXMuX3J1bGVzLnB1c2gocnVsZSk7XHJcblxyXG4gICAgICAgIHZhciBjb25maWd1cmF0b3IgPSBuZXcgVmFsaWRhdGlvblJ1bGVDb25maWd1cmF0b3IocnVsZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl93aGVuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uZmlndXJhdG9yLndoZW4odGhpcy5fd2hlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlndXJhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIGEgY29uZGl0aW9uIGxpbWl0aW5nIHdoZW4gdmFsaWRhdGlvbiBydWxlcyBzaG91bGQgcnVuLlxyXG4gICAgICogQHBhcmFtIHByZWRpY2F0ZSBBIGZ1bmN0aW9uIG9yIGxhbWJkYSBleHByZXNzaW9uIHRoYXQgc3BlY2lmaWVzIGEgY29uZGl0aW9uIGZvciB3aGVuIHZhbGlkYXRpb24gcnVsZXMgc2hvdWxkIHJ1bi5cclxuICAgICAqIEBwYXJhbSBydWxlRGVmaW5pdGlvbnMgQSBmdW5jdGlvbiB3aXRoIHZhbGlkYXRpb24gcnVsZSBkZWZpbml0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHdoZW4ocHJlZGljYXRlOiAoaW5zdGFuY2U6IFQpID0+IGJvb2xlYW4sIHJ1bGVEZWZpbml0aW9uczogKCkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fd2hlbiA9IHByZWRpY2F0ZTtcclxuXHJcbiAgICAgICAgcnVsZURlZmluaXRpb25zKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3doZW4gPSBudWxsO1xyXG4gICAgfVxyXG59Il19
