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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGhvbmUudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBR3pEO0lBQW9DLGtDQUFpQjtJQUNqRCx3QkFBWSxZQUFxQjtRQUM3QixrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBb0Msc0NBQWlCLEdBY3BEO0FBZFksc0JBQWMsaUJBYzFCLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyx5R0FBeUcsQ0FBQyJ9