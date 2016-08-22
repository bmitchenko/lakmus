"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var utils_1 = require("../utils");
var NotEmptyValidator = (function (_super) {
    __extends(NotEmptyValidator, _super);
    function NotEmptyValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "notEmpty";
    }
    NotEmptyValidator.prototype.isValid = function (context) {
        var value = context.propertyValue;
        if (value === undefined || value === null || value === 0 || value === false) {
            return false;
        }
        if (typeof value == "string" && utils_1.isNullOrWhitespace(value)) {
            return false;
        }
        if (value instanceof Array) {
            return value.length > 0;
        }
        return true;
    };
    return NotEmptyValidator;
}(property_validator_1.PropertyValidator));
exports.NotEmptyValidator = NotEmptyValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVtcHR5LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdC1lbXB0eS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQsc0JBQW1DLFVBQVUsQ0FBQyxDQUFBO0FBRTlDO0lBQXVDLHFDQUFpQjtJQUNwRCwyQkFBWSxZQUFxQjtRQUM3QixrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsVUFBVSxDQUFDO0lBQy9DLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUVsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxRQUFRLElBQUksMEJBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBdkJELENBQXVDLHNDQUFpQixHQXVCdkQ7QUF2QlkseUJBQWlCLG9CQXVCN0IsQ0FBQSJ9