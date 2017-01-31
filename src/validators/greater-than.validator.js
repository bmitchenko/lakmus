"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var range_validator_1 = require("./range.validator");
var GreaterThanValidator = (function (_super) {
    __extends(GreaterThanValidator, _super);
    function GreaterThanValidator(min, errorMessage) {
        _super.call(this, min, null, false, errorMessage);
        this.errorMessageResourceName = "greaterThan";
    }
    return GreaterThanValidator;
}(range_validator_1.RangeValidator));
exports.GreaterThanValidator = GreaterThanValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2dyZWF0ZXItdGhhbi52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQ7SUFBMEMsd0NBQWM7SUFDcEQsOEJBQVksR0FBVyxFQUFFLFlBQXFCO1FBQzFDLGtCQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxhQUFhLENBQUM7SUFDbEQsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FOQSxBQU1DLENBTnlDLGdDQUFjLEdBTXZEO0FBTlksNEJBQW9CLHVCQU1oQyxDQUFBIiwiZmlsZSI6InNyYy92YWxpZGF0b3JzL2dyZWF0ZXItdGhhbi52YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5nZVZhbGlkYXRvciB9IGZyb20gXCIuL3JhbmdlLnZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyZWF0ZXJUaGFuVmFsaWRhdG9yIGV4dGVuZHMgUmFuZ2VWYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWluOiBudW1iZXIsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1pbiwgbnVsbCwgZmFsc2UsIGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlUmVzb3VyY2VOYW1lID0gXCJncmVhdGVyVGhhblwiO1xyXG4gICAgfVxyXG59Il19
