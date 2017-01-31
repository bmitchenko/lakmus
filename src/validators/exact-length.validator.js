"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var ExactLengthValidator = (function (_super) {
    __extends(ExactLengthValidator, _super);
    function ExactLengthValidator(exactLength, errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "exactLength";
        this.exactLength = exactLength;
    }
    ExactLengthValidator.prototype.isValid = function (context) {
        var value = context.propertyValue;
        if (value === null || value === undefined) {
            return true;
        }
        if (typeof value == "string") {
            return value.length == this.exactLength;
        }
        return false;
    };
    return ExactLengthValidator;
}(property_validator_1.PropertyValidator));
exports.ExactLengthValidator = ExactLengthValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2V4YWN0LWxlbmd0aC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQ7SUFBMEMsd0NBQWlCO0lBR3ZELDhCQUFZLFdBQW1CLEVBQUUsWUFBcUI7UUFDbEQsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUM3QixDQUFDO0lBRU0sc0NBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUF1QixDQUFDO1FBRTVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVDLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCwyQkFBQztBQUFELENBdkJBLEFBdUJDLENBdkJ5QyxzQ0FBaUIsR0F1QjFEO0FBdkJZLDRCQUFvQix1QkF1QmhDLENBQUEiLCJmaWxlIjoic3JjL3ZhbGlkYXRvcnMvZXhhY3QtbGVuZ3RoLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSBcIi4vcHJvcGVydHktdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4YWN0TGVuZ3RoVmFsaWRhdG9yIGV4dGVuZHMgUHJvcGVydHlWYWxpZGF0b3Ige1xyXG5cdHB1YmxpYyBleGFjdExlbmd0aDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4YWN0TGVuZ3RoOiBudW1iZXIsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlUmVzb3VyY2VOYW1lID0gXCJleGFjdExlbmd0aFwiO1xyXG5cdFx0dGhpcy5leGFjdExlbmd0aCA9IGV4YWN0TGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKGNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gY29udGV4dC5wcm9wZXJ0eVZhbHVlIGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PSB0aGlzLmV4YWN0TGVuZ3RoOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==
