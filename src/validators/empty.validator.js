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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2VtcHR5LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUV6RCxzQkFBbUMsVUFBVSxDQUFDLENBQUE7QUFFOUM7SUFBb0Msa0NBQWlCO0lBQ2pELHdCQUFZLFlBQXFCO1FBQzdCLGtCQUFNLFlBQVksQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUM7SUFDNUMsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxPQUEwQjtRQUNyQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRWxDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLDBCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxxQkFBQztBQUFELENBeEJBLEFBd0JDLENBeEJtQyxzQ0FBaUIsR0F3QnBEO0FBeEJZLHNCQUFjLGlCQXdCMUIsQ0FBQSIsImZpbGUiOiJzcmMvdmFsaWRhdG9ycy9lbXB0eS52YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wZXJ0eVZhbGlkYXRvciB9IGZyb20gXCIuL3Byb3BlcnR5LXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udGV4dCB9IGZyb20gXCIuLi92YWxpZGF0aW9uLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgaXNOdWxsT3JXaGl0ZXNwYWNlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wdHlWYWxpZGF0b3IgZXh0ZW5kcyBQcm9wZXJ0eVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlTmFtZSA9IFwiZW1wdHlcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZChjb250ZXh0OiBWYWxpZGF0aW9uQ29udGV4dCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGNvbnRleHQucHJvcGVydHlWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IDAgfHwgdmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiICYmIGlzTnVsbE9yV2hpdGVzcGFjZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn0iXX0=
