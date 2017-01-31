"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var range_validator_1 = require("./range.validator");
var GreaterThanOrEqualValidator = (function (_super) {
    __extends(GreaterThanOrEqualValidator, _super);
    function GreaterThanOrEqualValidator(min, errorMessage) {
        _super.call(this, min, null, true, errorMessage);
        this.errorMessageResourceName = "greaterThanOrEquals";
    }
    return GreaterThanOrEqualValidator;
}(range_validator_1.RangeValidator));
exports.GreaterThanOrEqualValidator = GreaterThanOrEqualValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2dyZWF0ZXItdGhhbi1vci1lcXVhbC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQ7SUFBaUQsK0NBQWM7SUFDM0QscUNBQVksR0FBVyxFQUFFLFlBQXFCO1FBQzFDLGtCQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxxQkFBcUIsQ0FBQztJQUMxRCxDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQU5BLEFBTUMsQ0FOZ0QsZ0NBQWMsR0FNOUQ7QUFOWSxtQ0FBMkIsOEJBTXZDLENBQUEiLCJmaWxlIjoic3JjL3ZhbGlkYXRvcnMvZ3JlYXRlci10aGFuLW9yLWVxdWFsLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmdlVmFsaWRhdG9yIH0gZnJvbSBcIi4vcmFuZ2UudmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JlYXRlclRoYW5PckVxdWFsVmFsaWRhdG9yIGV4dGVuZHMgUmFuZ2VWYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWluOiBudW1iZXIsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1pbiwgbnVsbCwgdHJ1ZSwgZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZU5hbWUgPSBcImdyZWF0ZXJUaGFuT3JFcXVhbHNcIjtcclxuICAgIH1cclxufSJdfQ==
