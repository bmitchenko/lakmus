"use strict";
var validation_context_1 = require("./validation-context");
var validation_error_1 = require("./results/validation-error");
var language_manager_1 = require("./localization/language-manager");
var validator_options_1 = require("./validator-options");
/** Defines a rule associated with a property which can have multiple validators. */
var ValidationRule = (function () {
    /**
     * Initializes a new instance of the ValidationRule class.
     * @param name Property name.
     */
    function ValidationRule(name) {
        /** Collection validators to apply. */
        this.collectionValidators = [];
        /** Property validators to apply. */
        this.propertyValidators = [];
        /** Custom validators to apply. */
        this.validators = [];
        /** Conditions that control when the rule should execute. */
        this.when = [];
        this.propertyDisplayName = validator_options_1.ValidatorOptions.propertyNameResolver(name);
        this.propertyName = name;
    }
    /**
     * Performs validation using an object instance and returns a collection of validation errors.
     * @param instance The object to validate.
     */
    ValidationRule.prototype.validate = function (instance) {
        var _this = this;
        if (instance == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, {
                parameterName: "instance"
            });
        }
        var errors = [];
        if (this.when != null) {
            if (this.when.some(function (x) { return !x(instance); })) {
                return errors;
            }
        }
        var value = this.getValue(instance);
        var context = new validation_context_1.ValidationContext();
        context.instance = instance;
        context.propertyDisplayName = this.propertyDisplayName;
        context.propertyName = this.propertyName;
        context.propertyValue = value;
        if (this.collectionValidators != null) {
            this.collectionValidators.forEach(function (collectionValidator) {
                _this.validateWithCollectionValidator(context, collectionValidator, errors);
            });
        }
        if (this.validators != null) {
            this.validators.forEach(function (validator) {
                _this.validateWithValidator(context.propertyValue, validator, errors);
            });
        }
        if (this.propertyValidators != null) {
            this.propertyValidators.forEach(function (propertyValidator) {
                _this.validateWithPropertyValidator(context, propertyValidator, errors);
            });
        }
        return errors;
    };
    ValidationRule.prototype.validateWithCollectionValidator = function (context, validator, errors) {
        var _this = this;
        if (context.propertyValue == null) {
            return;
        }
        if (context.propertyValue instanceof Array) {
            context.propertyValue.forEach(function (item) {
                if (item != null) {
                    _this.validateWithValidator(item, validator, errors);
                }
            });
        }
        else {
            throw language_manager_1.LanguageManager.getLocalizedMessage("invalidPropertyType", validator_options_1.ValidatorOptions.language, {
                propertyName: context.propertyName,
                type: typeof context.propertyValue,
                expectedType: "Array"
            });
        }
    };
    ValidationRule.prototype.validateWithValidator = function (value, validator, errors) {
        if (value == null) {
            return;
        }
        var result = validator.validate(value);
        result.errors.forEach(function (error) {
            errors.push(error);
        });
    };
    ValidationRule.prototype.validateWithPropertyValidator = function (context, validator, errors) {
        if (!validator.isValid(context)) {
            errors.push(new validation_error_1.ValidationError(validator.getErrorMessage(context), context.propertyName));
        }
    };
    ValidationRule.prototype.getValue = function (instance) {
        var value = instance[this.propertyName];
        // if (window) {
        //     if (window["ko"]) {
        //         value = window["ko"].unwrap(value);
        //     }
        // }
        return value;
    };
    return ValidationRule;
}());
exports.ValidationRule = ValidationRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1ydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi1ydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCxpQ0FBZ0MsNEJBQTRCLENBQUMsQ0FBQTtBQUU3RCxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUV2RCxvRkFBb0Y7QUFDcEY7SUFvQkk7OztPQUdHO0lBQ0gsd0JBQVksSUFBWTtRQXRCeEIsc0NBQXNDO1FBQy9CLHlCQUFvQixHQUFxQixFQUFFLENBQUM7UUFRbkQsb0NBQW9DO1FBQzdCLHVCQUFrQixHQUF3QixFQUFFLENBQUM7UUFFcEQsa0NBQWtDO1FBQzNCLGVBQVUsR0FBMkIsRUFBRSxDQUFDO1FBRS9DLDREQUE0RDtRQUNyRCxTQUFJLEdBQXlDLEVBQUUsQ0FBQztRQU9uRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0NBQWdCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlDQUFRLEdBQWYsVUFBZ0IsUUFBbUI7UUFBbkMsaUJBMkNDO1FBMUNHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sa0NBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsb0NBQWdCLENBQUMsUUFBUSxFQUFFO2dCQUNqRixhQUFhLEVBQUUsVUFBVTthQUM1QixDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsSUFBSSxNQUFNLEdBQXNCLEVBQUUsQ0FBQztRQUVuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFD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