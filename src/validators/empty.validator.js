"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var utils_1 = require("../utils");
var EmptyValidator = (function (_super) {
    __extends(EmptyValidator, _super);
    function EmptyValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "empty";
    }
    EmptyValidator.prototype.isValid = function (context) {
        var value = context.propertyValue;
        if (value === undefined || value === null || value === 0 || value === false) {
            return true;
        }
        if (value instanceof Array) {
            return value.length == 0;
        }
        if (typeof value == "string" && utils_1.isNullOrWhitespace(value)) {
            return true;
        }
        return false;
    };
    return EmptyValidator;
}(property_validator_1.PropertyValidator));
exports.EmptyValidator = EmptyValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW1wdHkudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRXpELHNCQUFtQyxVQUFVLENBQUMsQ0FBQTtBQUU5QztJQUFvQyxrQ0FBaUI7SUFDakQsd0JBQVksWUFBcUI7UUFDN0Isa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQztJQUM1QyxDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxRQUFRLElBQUksMEJBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUFvQyxzQ0FBaUIsR0F3QnBEO0FBeEJZLHNCQUFjLGlCQXdCMUIsQ0FBQSJ9