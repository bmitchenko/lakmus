"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var RegularExpressionValidator = (function (_super) {
    __extends(RegularExpressionValidator, _super);
    function RegularExpressionValidator(expression, errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "regularExpression";
        this.expression = expression;
    }
    RegularExpressionValidator.prototype.isValid = function (context) {
        if (context.propertyValue == undefined) {
            return true;
        }
        if (typeof context.propertyValue == "string") {
            return this.expression.test(context.propertyValue);
        }
        return false;
    };
    return RegularExpressionValidator;
}(property_validator_1.PropertyValidator));
exports.RegularExpressionValidator = RegularExpressionValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL3JlZ3VsYXItZXhwcmVzc2lvbi52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQ7SUFBZ0QsOENBQWlCO0lBRzdELG9DQUFZLFVBQWtCLEVBQUUsWUFBcUI7UUFDakQsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLG1CQUFtQixDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSw0Q0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQitDLHNDQUFpQixHQXFCaEU7QUFyQlksa0NBQTBCLDZCQXFCdEMsQ0FBQSIsImZpbGUiOiJzcmMvdmFsaWRhdG9ycy9yZWd1bGFyLWV4cHJlc3Npb24udmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tIFwiLi9wcm9wZXJ0eS12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vdmFsaWRhdGlvbi1jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVndWxhckV4cHJlc3Npb25WYWxpZGF0b3IgZXh0ZW5kcyBQcm9wZXJ0eVZhbGlkYXRvciB7XHJcbiAgICBwdWJsaWMgZXhwcmVzc2lvbjogUmVnRXhwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IFJlZ0V4cCwgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZU5hbWUgPSBcInJlZ3VsYXJFeHByZXNzaW9uXCI7XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZChjb250ZXh0OiBWYWxpZGF0aW9uQ29udGV4dCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5VmFsdWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0LnByb3BlcnR5VmFsdWUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uLnRlc3QoY29udGV4dC5wcm9wZXJ0eVZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==
