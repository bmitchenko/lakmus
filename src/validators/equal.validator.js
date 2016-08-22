"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var EqualValidator = (function (_super) {
    __extends(EqualValidator, _super);
    function EqualValidator(comparisonValue, errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "equal";
        this.comparisonValue = comparisonValue;
    }
    EqualValidator.prototype.isValid = function (context) {
        if (this.comparisonValue instanceof Date && context.propertyValue instanceof Date) {
            return this.comparisonValue.getTime() == context.propertyValue.getTime();
        }
        return this.comparisonValue === context.propertyValue;
    };
    return EqualValidator;
}(property_validator_1.PropertyValidator));
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXF1YWwudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBR3pEO0lBQW9DLGtDQUFpQjtJQUdqRCx3QkFBWSxlQUFvQixFQUFFLFlBQXFCO1FBQ25ELGtCQUFNLFlBQVksQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDckMsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxPQUEwQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxZQUFZLElBQUksSUFBSSxPQUFPLENBQUMsYUFBYSxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3RSxDQUFDO1FBRVAsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNwRCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBakJELENBQW9DLHNDQUFpQixHQWlCcEQ7QUFqQlksc0JBQWMsaUJBaUIxQixDQUFBIn0=