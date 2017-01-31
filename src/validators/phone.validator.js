"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var PhoneValidator = (function (_super) {
    __extends(PhoneValidator, _super);
    function PhoneValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "phone";
    }
    PhoneValidator.prototype.isValid = function (context) {
        if (context.propertyValue == undefined) {
            return true;
        }
        return phoneRegExp.test(context.propertyValue);
    };
    return PhoneValidator;
}(property_validator_1.PropertyValidator));
exports.PhoneValidator = PhoneValidator;
var phoneRegExp = /^(\+\s?)?(\(\+?\d+([\s\-\.]?\d+)?\)|\d+)([\s\-\.]?(\(\d+([\s\-\.]?\d+)?\)|\d+))*(\s?(x|ext\.?)\s?\d+)?$/;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL3Bob25lLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUd6RDtJQUFvQyxrQ0FBaUI7SUFDakQsd0JBQVksWUFBcUI7UUFDN0Isa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQztJQUM1QyxDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FkQSxBQWNDLENBZG1DLHNDQUFpQixHQWNwRDtBQWRZLHNCQUFjLGlCQWMxQixDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcseUdBQXlHLENBQUMiLCJmaWxlIjoic3JjL3ZhbGlkYXRvcnMvcGhvbmUudmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tIFwiLi9wcm9wZXJ0eS12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vdmFsaWRhdGlvbi1jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhvbmVWYWxpZGF0b3IgZXh0ZW5kcyBQcm9wZXJ0eVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlTmFtZSA9IFwicGhvbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZChjb250ZXh0OiBWYWxpZGF0aW9uQ29udGV4dCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5VmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBob25lUmVnRXhwLnRlc3QoY29udGV4dC5wcm9wZXJ0eVZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcGhvbmVSZWdFeHAgPSAvXihcXCtcXHM/KT8oXFwoXFwrP1xcZCsoW1xcc1xcLVxcLl0/XFxkKyk/XFwpfFxcZCspKFtcXHNcXC1cXC5dPyhcXChcXGQrKFtcXHNcXC1cXC5dP1xcZCspP1xcKXxcXGQrKSkqKFxccz8oeHxleHRcXC4/KVxccz9cXGQrKT8kLzsiXX0=
