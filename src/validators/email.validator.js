"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var EmailValidator = (function (_super) {
    __extends(EmailValidator, _super);
    function EmailValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "email";
    }
    EmailValidator.prototype.isValid = function (context) {
        var email = context.propertyValue;
        if (email == undefined) {
            return true;
        }
        if (typeof email != "string") {
            return false;
        }
        return emailRegExp.test(email);
    };
    return EmailValidator;
}(property_validator_1.PropertyValidator));
exports.EmailValidator = EmailValidator;
var emailRegExp = /^((([a-zа-я]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\.([a-zа-я]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\.)+(([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\.?$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW1haWwudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBS3pEO0lBQW9DLGtDQUFpQjtJQUNqRCx3QkFBWSxZQUFxQjtRQUM3QixrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQXVCLENBQUM7UUFFNUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBcEJELENBQW9DLHNDQUFpQixHQW9CcEQ7QUFwQlksc0JBQWMsaUJBb0IxQixDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsaS9CQUFpL0IsQ0FBQyJ9