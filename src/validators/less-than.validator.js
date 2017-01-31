"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var range_validator_1 = require("./range.validator");
var LessThanValidator = (function (_super) {
    __extends(LessThanValidator, _super);
    function LessThanValidator(max, errorMessage) {
        _super.call(this, null, max, false, errorMessage);
        this.errorMessageResourceName = "lessThan";
    }
    return LessThanValidator;
}(range_validator_1.RangeValidator));
exports.LessThanValidator = LessThanValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2xlc3MtdGhhbi52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQ7SUFBdUMscUNBQWM7SUFDakQsMkJBQVksR0FBVyxFQUFFLFlBQXFCO1FBQzFDLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUM7SUFDL0MsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FOQSxBQU1DLENBTnNDLGdDQUFjLEdBTXBEO0FBTlkseUJBQWlCLG9CQU03QixDQUFBIiwiZmlsZSI6InNyYy92YWxpZGF0b3JzL2xlc3MtdGhhbi52YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5nZVZhbGlkYXRvciB9IGZyb20gXCIuL3JhbmdlLnZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExlc3NUaGFuVmFsaWRhdG9yIGV4dGVuZHMgUmFuZ2VWYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWF4OiBudW1iZXIsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG51bGwsIG1heCwgZmFsc2UsIGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlUmVzb3VyY2VOYW1lID0gXCJsZXNzVGhhblwiO1xyXG4gICAgfVxyXG59Il19
