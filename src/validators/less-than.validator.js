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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVzcy10aGFuLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxlc3MtdGhhbi52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQ7SUFBdUMscUNBQWM7SUFDakQsMkJBQVksR0FBVyxFQUFFLFlBQXFCO1FBQzFDLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUM7SUFDL0MsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXVDLGdDQUFjLEdBTXBEO0FBTlkseUJBQWlCLG9CQU03QixDQUFBIn0=