"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _this = this;
var property_validator_1 = require("../src/validators/property-validator");
var validator_1 = require("../src/validator");
var validation_rule_configurator_1 = require("../src/validation-rule-configurator");
// define custom property validator;
var PinValidator = (function (_super) {
    __extends(PinValidator, _super);
    function PinValidator() {
        _super.apply(this, arguments);
    }
    PinValidator.prototype.isValid = function (context) {
        return typeof context.propertyValue == "string" && context.propertyValue.length == 4;
    };
    return PinValidator;
}(property_validator_1.PropertyValidator));
// define class;
var Person = (function () {
    function Person() {
    }
    return Person;
}());
// define validator;
var PersonValidator = (function (_super) {
    __extends(PersonValidator, _super);
    function PersonValidator() {
        _super.call(this);
        this.ruleFor(function (x) { return x.pin; })
            .setValidator(new PinValidator());
    }
    return PersonValidator;
}(validator_1.Validator));
// optionally you can extend ValidationRuleConfigurator:
validation_rule_configurator_1.ValidationRuleConfigurator.prototype["pin"] = function () {
    return _this.setValidator(new PinValidator());
};
var AugmentedPersonValidator = (function (_super) {
    __extends(AugmentedPersonValidator, _super);
    function AugmentedPersonValidator() {
        _super.call(this);
        this.ruleFor(function (x) { return x.pin; })
            .pin();
    }
    return AugmentedPersonValidator;
}(validator_1.Validator));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLXByb3BlcnR5LXZhbGlkYXRvci5kZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tLXByb3BlcnR5LXZhbGlkYXRvci5kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlCQWtEQztBQWxERCxtQ0FBa0Msc0NBQXNDLENBQUMsQ0FBQTtBQUN6RSwwQkFBMEIsa0JBQWtCLENBQUMsQ0FBQTtBQUc3Qyw2Q0FBMkMscUNBQXFDLENBQUMsQ0FBQTtBQUVqRixvQ0FBb0M7QUFDcEM7SUFBMkIsZ0NBQWlCO0lBQTVDO1FBQTJCLDhCQUFpQjtJQUk1QyxDQUFDO0lBSFUsOEJBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBMkIsc0NBQWlCLEdBSTNDO0FBRUQsZ0JBQWdCO0FBQ2hCO0lBQUE7SUFFQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQsb0JBQW9CO0FBQ3BCO0lBQThCLG1DQUFpQjtJQUMzQztRQUNJLGlCQUFPLENBQUM7UUFFUixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLENBQUM7YUFFbkIsWUFBWSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBOEIscUJBQVMsR0FRdEM7QUFFRCx3REFBd0Q7QUFDeEQseURBQTBCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHO0lBQzFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUM7QUFVRjtJQUF1Qyw0Q0FBaUI7SUFDcEQ7UUFDSSxpQkFBTyxDQUFDO1FBRVIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBSyxDQUFDO2FBRW5CLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQVJELENBQXVDLHFCQUFTLEdBUS9DIn0=