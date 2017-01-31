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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL25vdC1lbXB0eS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQsc0JBQW1DLFVBQVUsQ0FBQyxDQUFBO0FBRTlDO0lBQXVDLHFDQUFpQjtJQUNwRCwyQkFBWSxZQUFxQjtRQUM3QixrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsVUFBVSxDQUFDO0lBQy9DLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUVsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxRQUFRLElBQUksMEJBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxDQXZCc0Msc0NBQWlCLEdBdUJ2RDtBQXZCWSx5QkFBaUIsb0JBdUI3QixDQUFBIiwiZmlsZSI6InNyYy92YWxpZGF0b3JzL25vdC1lbXB0eS52YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wZXJ0eVZhbGlkYXRvciB9IGZyb20gXCIuL3Byb3BlcnR5LXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udGV4dCB9IGZyb20gXCIuLi92YWxpZGF0aW9uLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4uL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBpc051bGxPcldoaXRlc3BhY2UgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3RFbXB0eVZhbGlkYXRvciBleHRlbmRzIFByb3BlcnR5VmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlUmVzb3VyY2VOYW1lID0gXCJub3RFbXB0eVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKGNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gY29udGV4dC5wcm9wZXJ0eVZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiICYmIGlzTnVsbE9yV2hpdGVzcGFjZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19
