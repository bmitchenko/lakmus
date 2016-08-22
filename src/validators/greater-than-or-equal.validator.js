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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlYXRlci10aGFuLW9yLWVxdWFsLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyZWF0ZXItdGhhbi1vci1lcXVhbC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFFbkQ7SUFBaUQsK0NBQWM7SUFDM0QscUNBQVksR0FBVyxFQUFFLFlBQXFCO1FBQzFDLGtCQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxxQkFBcUIsQ0FBQztJQUMxRCxDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBaUQsZ0NBQWMsR0FNOUQ7QUFOWSxtQ0FBMkIsOEJBTXZDLENBQUEifQ==