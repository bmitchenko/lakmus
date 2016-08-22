"use strict";
var property_validator_1 = require("./validators/property-validator");
var credit_card_validator_1 = require("./validators/credit-card.validator");
var email_validator_1 = require("./validators/email.validator");
var equal_validator_1 = require("./validators/equal.validator");
var exact_length_validator_1 = require("./validators/exact-length.validator");
var exclusive_between_validator_1 = require("./validators/exclusive-between.validator");
var greater_than_or_equal_validator_1 = require("./validators/greater-than-or-equal.validator");
var greater_than_validator_1 = require("./validators/greater-than.validator");
var inclusive_between_validator_1 = require("./validators/inclusive-between.validator");
var less_than_or_equal_validator_1 = require("./validators/less-than-or-equal.validator");
var less_than_validator_1 = require("./validators/less-than.validator");
var max_length_validator_1 = require("./validators/max-length.validator");
var min_length_validator_1 = require("./validators/min-length.validator");
var not_empty_validator_1 = require("./validators/not-empty.validator");
var not_equal_validator_1 = require("./validators/not-equal.validator");
var not_null_validator_1 = require("./validators/not-null.validator");
var null_validator_1 = require("./validators/null.validator");
var phone_validator_1 = require("./validators/phone.validator");
var predicate_validator_1 = require("./validators/predicate.validator");
var regular_expression_validator_1 = require("./validators/regular-expression.validator");
var uri_validator_1 = require("./validators/uri.validator");
/** Helper class that can be used to configure a validation rule. */
var ValidationRuleConfigurator = (function () {
    /**
     * Initializes a new instance of the ValidationRuleConfigurator class.
     * @param rule Rule to be configured.
     */
    function ValidationRuleConfigurator(rule) {
        this._rule = rule;
    }
    /**
     * Сan be used to specify condition that control when the rule should execute.
     * @param predicate Condition.
     */
    ValidationRuleConfigurator.prototype.when = function (predicate) {
        this._rule.when.push(predicate);
        return this;
    };
    /**
     * Specifies a custom error message to use if validation fails.
     * @param errorMessage The error message to use.
     */
    ValidationRuleConfigurator.prototype.withMessage = function (errorMessage) {
        if (this._rule.propertyValidators.length > 0) {
            this._rule.propertyValidators[this._rule.propertyValidators.length - 1].errorMessage = errorMessage;
            return this;
        }
        throw "Can't set error message: validator list is empty.";
    };
    /**
     * Specifies a custom error message resource to use when validation fails.
     * @param resourceName The resource to use.
     */
    ValidationRuleConfigurator.prototype.withLocalizedMessage = function (resourceName) {
        if (this._rule.propertyValidators.length > 0) {
            this._rule.propertyValidators[this._rule.propertyValidators.length - 1].errorMessageResourceName = resourceName;
            return this;
        }
        throw "Can't set error message: validator list is empty.";
    };
    /**
     * Specifies a custom property name to use within the error message.
     * @param name Custom property name to use.
     */
    ValidationRuleConfigurator.prototype.withName = function (name) {
        this._rule.propertyDisplayName = name;
        return this;
    };
    /**
     * Defines a custom validator on the current rule builder.
     * @param validator Property or object validator instance.
     */
    ValidationRuleConfigurator.prototype.setValidator = function (validator) {
        if (validator instanceof property_validator_1.PropertyValidator) {
            this._rule.propertyValidators.push(validator);
        }
        else {
            this._rule.validators.push(validator);
        }
        return this;
    };
    /**
     * Defines a custom collection validator on the current rule builder.
     * @param validator Object validator to apply.
     */
    ValidationRuleConfigurator.prototype.setCollectionValidator = function (validator) {
        this._rule.collectionValidators.push(validator);
        return this;
    };
    /**
     * Defines a 'credit card' validator on the current rule.
     * Validation will fail if the property is not a credit card number.
     */
    ValidationRuleConfigurator.prototype.creditCard = function () {
        return this.setValidator(new credit_card_validator_1.CreditCardValidator());
    };
    /**
     * Defines an 'email' validator on the current rule.
     * Validation will fail if the property is not an email address.
     */
    ValidationRuleConfigurator.prototype.email = function () {
        return this.setValidator(new email_validator_1.EmailValidator());
    };
    /**
     * Defines an 'empty' validator on the current rule.
     * Validation will fail if the property is not null, not undefined, not whitespace, not zero and not an empty array.
     */
    ValidationRuleConfigurator.prototype.empty = function () {
        return this.setValidator(new not_null_validator_1.NotNullValidator());
    };
    /**
     * Defines an 'equal' validator on the current rule.
     * Validation will fail if the specified value is not equal to the value of the property.
     */
    ValidationRuleConfigurator.prototype.equal = function (valueToCompare) {
        return this.setValidator(new equal_validator_1.EqualValidator(valueToCompare));
    };
    /**
     * Defines an 'exact length' validator on the current rule.
     * Validation will fail if the length of the string is not equal to the length specified.
     * @param length Exact length.
     */
    ValidationRuleConfigurator.prototype.exactLength = function (length) {
        return this.setValidator(new exact_length_validator_1.ExactLengthValidator(length));
    };
    /**
     * Defines a 'exclusive between' validator on the current rule.
     * Validation will fail if the value of the property is outside of the specifed range. The range is exclusive.
     * @param min Minimum value.
     * @param max Maximum value.
     */
    ValidationRuleConfigurator.prototype.exclusiveBetween = function (min, max) {
        return this.setValidator(new exclusive_between_validator_1.ExclusiveBetweenValidator(min, max));
    };
    /**
     * Defines a 'greater than' validator on the current rule.
     * The validation will fail if the property value is less than or equal to the specified value.
     * @param min Minimum value.
     */
    ValidationRuleConfigurator.prototype.greaterThan = function (min) {
        return this.setValidator(new greater_than_validator_1.GreaterThanValidator(min));
    };
    /**
     * Defines a 'greater than or equal' validator on the current rule.
     * The validation will fail if the property value is less than the specified value.
     * @param min Minimum value.
     */
    ValidationRuleConfigurator.prototype.greaterThanOrEqual = function (min) {
        return this.setValidator(new greater_than_or_equal_validator_1.GreaterThanOrEqualValidator(min));
    };
    /**
     * Defines a 'inclusive between' validator on the current rule.
     * Validation will fail if the value of the property is outside of the specifed range. The range is inclusive.
     * @param min Minimum value.
     * @param max Maximum value.
     */
    ValidationRuleConfigurator.prototype.inclusiveBetween = function (min, max) {
        return this.setValidator(new inclusive_between_validator_1.InclusiveBetweenValidator(min, max));
    };
    /**
     * Defines a 'less than' validator on the current rule.
     * The validation will fail if the property value is more than or equal to the specified value.
     * @param max Maximum value.
     */
    ValidationRuleConfigurator.prototype.lessThan = function (max) {
        return this.setValidator(new less_than_validator_1.LessThanValidator(max));
    };
    /**
     * Defines a 'less than or equal' validator on the current rule.
     * The validation will fail if the property value is more than the specified value.
     * @param max Maximum value.
     */
    ValidationRuleConfigurator.prototype.lessThanOrEqual = function (max) {
        return this.setValidator(new less_than_or_equal_validator_1.LessThanOrEqualValidator(max));
    };
    /**
     * Defines a 'maximum length' validator on the current rule.
     * Validation will fail if the length of the string is more than the specified value.
     * @param maxLength Maximum length.
     */
    ValidationRuleConfigurator.prototype.maxLenght = function (maxLength) {
        this.setValidator(new max_length_validator_1.MaxLengthValidator(maxLength));
        return this;
    };
    /**
     * Defines a 'minimum length' validator on the current rule.
     * Validation will fail if the length of the string is less than the specified value.
     * @param maxLength Maximum length.
     */
    ValidationRuleConfigurator.prototype.minLenght = function (minLength) {
        this.setValidator(new min_length_validator_1.MinLengthValidator(minLength));
        return this;
    };
    /**
     * Defines an 'not empty' validator on the current rule.
     * Validation will fail if the property is null, undefined, whitespace, zero or an empty array.
     */
    ValidationRuleConfigurator.prototype.notEmpty = function () {
        return this.setValidator(new not_empty_validator_1.NotEmptyValidator());
    };
    /**
     * Defines a 'not equal' validator on the current rule.
     * Validation will fail if the specified value is equal to the value of the property.
     */
    ValidationRuleConfigurator.prototype.notEqual = function (valueToCompare) {
        return this.setValidator(new not_equal_validator_1.NotEqualValidator(valueToCompare));
    };
    /**
     * Defines a 'not null' validator on the current rule.
     * Validation will fail if the property is null or undefined.
     */
    ValidationRuleConfigurator.prototype.notNull = function () {
        return this.setValidator(new not_null_validator_1.NotNullValidator());
    };
    /**
     * Defines a 'null' validator on the current rule.
     * Validation will fail if the property is not null and not undefined.
     */
    ValidationRuleConfigurator.prototype.null = function () {
        return this.setValidator(new null_validator_1.NullValidator());
    };
    /**
     * Defines a 'phone' validator on the current rule.
     * Validation will fail if the property is not a well-formed phone number.
     */
    ValidationRuleConfigurator.prototype.phone = function () {
        return this.setValidator(new phone_validator_1.PhoneValidator());
    };
    /**
     * Defines a 'predicate' validator on the current rule.
     * Validation will fail if the specified function or lambda returns false.
     * @param predicate A function or lambda expression specifying the predicate.
     */
    ValidationRuleConfigurator.prototype.must = function (predicate) {
        return this.setValidator(new predicate_validator_1.PredicateValidator(predicate));
    };
    /**
     * Defines a 'regular expression' validator on the current rule.
     * The validation will fail if the property does not match the regular expression.
     * @param regularExpression The regular expression to check the value against.
     */
    ValidationRuleConfigurator.prototype.regularExpression = function (regularExpression) {
        return this.setValidator(new regular_expression_validator_1.RegularExpressionValidator(regularExpression));
    };
    /**
     * Defines an 'uri' validator on the current rule.
     * Validation will fail if the property is not a well-formed URI.
     */
    ValidationRuleConfigurator.prototype.uri = function () {
        return this.setValidator(new uri_validator_1.UriValidator());
    };
    return ValidationRuleConfigurator;
}());
exports.ValidationRuleConfigurator = ValidationRuleConfigurator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1ydWxlLWNvbmZpZ3VyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZhbGlkYXRpb24tcnVsZS1jb25maWd1cmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLG1DQUFrQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3BFLHNDQUFvQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ3pFLGdDQUErQiw4QkFBOEIsQ0FBQyxDQUFBO0FBRTlELGdDQUErQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzlELHVDQUFxQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzNFLDRDQUEwQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3JGLGdEQUE0Qyw4Q0FBOEMsQ0FBQyxDQUFBO0FBQzNGLHVDQUFxQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzNFLDRDQUEwQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3JGLDZDQUF5QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3JGLG9DQUFrQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3JFLHFDQUFtQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3ZFLHFDQUFtQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3ZFLG9DQUFrQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3JFLG9DQUFrQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3JFLG1DQUFpQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ25FLCtCQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVELGdDQUErQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzlELG9DQUFtQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBRXRFLDZDQUEyQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ3ZGLDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBRTFELG9FQUFvRTtBQUNwRTtJQUdJOzs7T0FHRztJQUNILG9DQUFZLElBQW9DO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSx5Q0FBSSxHQUFYLFVBQVksU0FBMkM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGdEQUFXLEdBQWxCLFVBQW1CLFlBQW9CO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ3BHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE1BQU0sbURBQW1ELENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHlEQUFvQixHQUEzQixVQUE0QixZQUFvQjtRQUM1QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLEdBQUcsWUFBWSxDQUFDO1lBQ2hILE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE1BQU0sbURBQW1ELENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZDQUFRLEdBQWYsVUFBZ0IsSUFBWTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpREFBWSxHQUFuQixVQUFvQixTQUFtRDtRQUNuRSxFQUFFLENBQUMsQ0FBQyxTQUFTLFlBQVksc0NBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMkRBQXNCLEdBQTdCLFVBQThCLFNBQXlCO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtDQUFVLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSwyQ0FBbUIsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDBDQUFLLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGdDQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7O09BR0c7SUFDSSwwQ0FBSyxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxxQ0FBZ0IsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDBDQUFLLEdBQVosVUFBYSxjQUFtQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGdDQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdEQUFXLEdBQWxCLFVBQW1CLE1BQWM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSw2Q0FBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHFEQUFnQixHQUF2QixVQUF3QixHQUFXLEVBQUUsR0FBVztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLHVEQUF5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0RBQVcsR0FBbEIsVUFBbUIsR0FBVztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLDZDQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1REFBa0IsR0FBekIsVUFBMEIsR0FBVztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLDZEQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0kscURBQWdCLEdBQXZCLFVBQXdCLEdBQVcsRUFBRSxHQUFXO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksdURBQXlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw2Q0FBUSxHQUFmLFVBQWdCLEdBQVc7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSx1Q0FBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksb0RBQWUsR0FBdEIsVUFBdUIsR0FBVztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLHVEQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw4Q0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUkseUNBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksOENBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLHlDQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkNBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksdUNBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSSw2Q0FBUSxHQUFmLFVBQWdCLGNBQW1CO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksdUNBQWlCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNENBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUkscUNBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSSx5Q0FBSSxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSw4QkFBYSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksMENBQUssR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZ0NBQWMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx5Q0FBSSxHQUFYLFVBQVksU0FBaUU7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSx3Q0FBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0RBQWlCLEdBQXhCLFVBQXlCLGlCQUF5QjtRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLHlEQUEwQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksd0NBQUcsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksNEJBQVksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQXJRRCxJQXFRQztBQXJRWSxrQ0FBMEIsNkJBcVF0QyxDQUFBIn0=