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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlYXRlci10aGFuLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyZWF0ZXItdGhhbi52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQ7SUFBMEMsd0NBQWM7SUFDcEQsOEJBQVksR0FBVyxFQUFFLFlBQXFCO1FBQzFDLGtCQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxhQUFhLENBQUM7SUFDbEQsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTBDLGdDQUFjLEdBTXZEO0FBTlksNEJBQW9CLHVCQU1oQyxDQUFBIn0=