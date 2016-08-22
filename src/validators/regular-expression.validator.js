"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var RegularExpressionValidator = (function (_super) {
    __extends(RegularExpressionValidator, _super);
    function RegularExpressionValidator(expression, errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "regularExpression";
        this.expression = expression;
    }
    RegularExpressionValidator.prototype.isValid = function (context) {
        if (context.propertyValue == undefined) {
            return true;
        }
        if (typeof context.propertyValue == "string") {
            return this.expression.test(context.propertyValue);
        }
        return false;
    };
    return RegularExpressionValidator;
}(property_validator_1.PropertyValidator));
exports.RegularExpressionValidator = RegularExpressionValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVndWxhci1leHByZXNzaW9uLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ3VsYXItZXhwcmVzc2lvbi52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQ7SUFBZ0QsOENBQWlCO0lBRzdELG9DQUFZLFVBQWtCLEVBQUUsWUFBcUI7UUFDakQsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLG1CQUFtQixDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSw0Q0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUFnRCxzQ0FBaUIsR0FxQmhFO0FBckJZLGtDQUEwQiw2QkFxQnRDLENBQUEifQ==