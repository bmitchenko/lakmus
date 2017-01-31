"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var MinLengthValidator = (function (_super) {
    __extends(MinLengthValidator, _super);
    function MinLengthValidator(minLength, errorMessage) {
        _super.call(this, errorMessage);
        this.minLength = minLength;
        this.errorMessageResourceName = "minLength";
    }
    MinLengthValidator.prototype.isValid = function (context) {
        var value = context.propertyValue;
        if (value == undefined) {
            return true;
        }
        if (typeof value == "string") {
            return value.length >= this.minLength;
        }
        return false;
    };
    return MinLengthValidator;
}(property_validator_1.PropertyValidator));
exports.MinLengthValidator = MinLengthValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL21pbi1sZW5ndGgudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBR3pEO0lBQXdDLHNDQUFpQjtJQUdyRCw0QkFBWSxTQUFpQixFQUFFLFlBQXFCO1FBQ2hELGtCQUFNLFlBQVksQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxXQUFXLENBQUM7SUFDaEQsQ0FBQztJQUVNLG9DQUFPLEdBQWQsVUFBZSxPQUEwQjtRQUNyQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRWxDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQXZCQSxBQXVCQyxDQXZCdUMsc0NBQWlCLEdBdUJ4RDtBQXZCWSwwQkFBa0IscUJBdUI5QixDQUFBIiwiZmlsZSI6InNyYy92YWxpZGF0b3JzL21pbi1sZW5ndGgudmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tIFwiLi9wcm9wZXJ0eS12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vdmFsaWRhdGlvbi1jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWluTGVuZ3RoVmFsaWRhdG9yIGV4dGVuZHMgUHJvcGVydHlWYWxpZGF0b3Ige1xyXG4gICAgcHVibGljIG1pbkxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1pbkxlbmd0aDogbnVtYmVyLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLm1pbkxlbmd0aCA9IG1pbkxlbmd0aDtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlTmFtZSA9IFwibWluTGVuZ3RoXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWQoY29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBjb250ZXh0LnByb3BlcnR5VmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+PSB0aGlzLm1pbkxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==
