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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVzcy10aGFuLW9yLWVxdWFsLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxlc3MtdGhhbi1vci1lcXVhbC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQ7SUFBOEMsNENBQWM7SUFDeEQsa0NBQVksR0FBVyxFQUFFLFlBQXFCO1FBQzFDLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxrQkFBa0IsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBOEMsZ0NBQWMsR0FNM0Q7QUFOWSxnQ0FBd0IsMkJBTXBDLENBQUEifQ==