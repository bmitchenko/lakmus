"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var NotEqualValidator = (function (_super) {
    __extends(NotEqualValidator, _super);
    function NotEqualValidator(valueToCompare, errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "notEqual";
        this.comparisonValue = valueToCompare;
    }
    NotEqualValidator.prototype.isValid = function (context) {
        if (this.comparisonValue instanceof Date && context.propertyValue instanceof Date) {
            return this.comparisonValue.getTime() != context.propertyValue.getTime();
        }
        return this.comparisonValue !== context.propertyValue;
    };
    return NotEqualValidator;
}(property_validator_1.PropertyValidator));
exports.NotEqualValidator = NotEqualValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVxdWFsLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdC1lcXVhbC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQ7SUFBdUMscUNBQWlCO0lBR3BELDJCQUFZLGNBQW1CLEVBQUUsWUFBcUI7UUFDbEQsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFVBQVUsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sbUNBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLFlBQVksSUFBSSxJQUFJLE9BQU8sQ0FBQyxhQUFhLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdFLENBQUM7UUFFUCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3BELENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFqQkQsQ0FBdUMsc0NBQWlCLEdBaUJ2RDtBQWpCWSx5QkFBaUIsb0JBaUI3QixDQUFBIn0=