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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vY3VzdG9tLXByb3BlcnR5LXZhbGlkYXRvci5kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlCQWtEQztBQWxERCxtQ0FBa0Msc0NBQXNDLENBQUMsQ0FBQTtBQUN6RSwwQkFBMEIsa0JBQWtCLENBQUMsQ0FBQTtBQUc3Qyw2Q0FBMkMscUNBQXFDLENBQUMsQ0FBQTtBQUVqRixvQ0FBb0M7QUFDcEM7SUFBMkIsZ0NBQWlCO0lBQTVDO1FBQTJCLDhCQUFpQjtJQUk1QyxDQUFDO0lBSFUsOEJBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKMEIsc0NBQWlCLEdBSTNDO0FBRUQsZ0JBQWdCO0FBQ2hCO0lBQUE7SUFFQSxDQUFDO0lBQUQsYUFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRUQsb0JBQW9CO0FBQ3BCO0lBQThCLG1DQUFpQjtJQUMzQztRQUNJLGlCQUFPLENBQUM7UUFFUixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLENBQUM7YUFFbkIsWUFBWSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQVJBLEFBUUMsQ0FSNkIscUJBQVMsR0FRdEM7QUFFRCx3REFBd0Q7QUFDeEQseURBQTBCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHO0lBQzFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUM7QUFVRjtJQUF1Qyw0Q0FBaUI7SUFDcEQ7UUFDSSxpQkFBTyxDQUFDO1FBRVIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBSyxDQUFDO2FBRW5CLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FSQSxBQVFDLENBUnNDLHFCQUFTLEdBUS9DIiwiZmlsZSI6ImRlbW8vY3VzdG9tLXByb3BlcnR5LXZhbGlkYXRvci5kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tIFwiLi4vc3JjL3ZhbGlkYXRvcnMvcHJvcGVydHktdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuLi9zcmMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL3NyYy92YWxpZGF0aW9uLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgVmFsaWRhdG9yT3B0aW9ucyB9IGZyb20gXCIuLi9zcmMvdmFsaWRhdG9yLW9wdGlvbnNcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVDb25maWd1cmF0b3IgfSBmcm9tIFwiLi4vc3JjL3ZhbGlkYXRpb24tcnVsZS1jb25maWd1cmF0b3JcIjtcclxuXHJcbi8vIGRlZmluZSBjdXN0b20gcHJvcGVydHkgdmFsaWRhdG9yO1xyXG5jbGFzcyBQaW5WYWxpZGF0b3IgZXh0ZW5kcyBQcm9wZXJ0eVZhbGlkYXRvciB7XHJcbiAgICBwdWJsaWMgaXNWYWxpZChjb250ZXh0OiBWYWxpZGF0aW9uQ29udGV4dCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgY29udGV4dC5wcm9wZXJ0eVZhbHVlID09IFwic3RyaW5nXCIgJiYgY29udGV4dC5wcm9wZXJ0eVZhbHVlLmxlbmd0aCA9PSA0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBkZWZpbmUgY2xhc3M7XHJcbmNsYXNzIFBlcnNvbiB7XHJcbiAgICBwdWJsaWMgcGluOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIGRlZmluZSB2YWxpZGF0b3I7XHJcbmNsYXNzIFBlcnNvblZhbGlkYXRvciBleHRlbmRzIFZhbGlkYXRvcjxQZXJzb24+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZUZvcih4ID0+IHgucGluKVxyXG4gICAgICAgICAgICAvLyBhcHBseSBuZXcgdmFsaWRhdG9yO1xyXG4gICAgICAgICAgICAuc2V0VmFsaWRhdG9yKG5ldyBQaW5WYWxpZGF0b3IoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIG9wdGlvbmFsbHkgeW91IGNhbiBleHRlbmQgVmFsaWRhdGlvblJ1bGVDb25maWd1cmF0b3I6XHJcblZhbGlkYXRpb25SdWxlQ29uZmlndXJhdG9yLnByb3RvdHlwZVtcInBpblwiXSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLnNldFZhbGlkYXRvcihuZXcgUGluVmFsaWRhdG9yKCkpO1xyXG59O1xyXG5cclxuLy8gdXNlIG1vZHVsZSBhdWdtZW50YXRpb24gaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svZGVjbGFyYXRpb24tbWVyZ2luZy5odG1sIHRvIHRlbGwgdGhlXHJcbi8vIGNvbXBpbGVyIGFib3V0IG5ldyB2YWxpZGF0aW9uIG1ldGhvZDtcclxuZGVjbGFyZSBtb2R1bGUgXCIuLi9zcmMvdmFsaWRhdGlvbi1ydWxlLWNvbmZpZ3VyYXRvclwiIHtcclxuICAgIGludGVyZmFjZSBWYWxpZGF0aW9uUnVsZUNvbmZpZ3VyYXRvcjxUSW5zdGFuY2UsIFRQcm9wZXJ0eT4ge1xyXG4gICAgICAgIHBpbigpOiBWYWxpZGF0aW9uUnVsZUNvbmZpZ3VyYXRvcjxUSW5zdGFuY2UsIFRQcm9wZXJ0eT47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEF1Z21lbnRlZFBlcnNvblZhbGlkYXRvciBleHRlbmRzIFZhbGlkYXRvcjxQZXJzb24+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZUZvcih4ID0+IHgucGluKVxyXG4gICAgICAgICAgICAvLyBhcHBseSBuZXcgdmFsaWRhdG9yO1xyXG4gICAgICAgICAgICAucGluKCk7XHJcbiAgICB9XHJcbn0iXX0=
