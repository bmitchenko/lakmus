"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var range_validator_1 = require("./range.validator");
var LessThanOrEqualValidator = (function (_super) {
    __extends(LessThanOrEqualValidator, _super);
    function LessThanOrEqualValidator(max, errorMessage) {
        _super.call(this, null, max, true, errorMessage);
        this.errorMessageResourceName = "lessThanOrEquals";
    }
    return LessThanOrEqualValidator;
}(range_validator_1.RangeValidator));
exports.LessThanOrEqualValidator = LessThanOrEqualValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2xlc3MtdGhhbi1vci1lcXVhbC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQ7SUFBOEMsNENBQWM7SUFDeEQsa0NBQVksR0FBVyxFQUFFLFlBQXFCO1FBQzFDLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxrQkFBa0IsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQU5BLEFBTUMsQ0FONkMsZ0NBQWMsR0FNM0Q7QUFOWSxnQ0FBd0IsMkJBTXBDLENBQUEiLCJmaWxlIjoic3JjL3ZhbGlkYXRvcnMvbGVzcy10aGFuLW9yLWVxdWFsLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmdlVmFsaWRhdG9yIH0gZnJvbSBcIi4vcmFuZ2UudmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGVzc1RoYW5PckVxdWFsVmFsaWRhdG9yIGV4dGVuZHMgUmFuZ2VWYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWF4OiBudW1iZXIsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG51bGwsIG1heCwgdHJ1ZSwgZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZU5hbWUgPSBcImxlc3NUaGFuT3JFcXVhbHNcIjtcclxuICAgIH1cclxufSJdfQ==
