"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var NotNullValidator = (function (_super) {
    __extends(NotNullValidator, _super);
    function NotNullValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "notNull";
    }
    NotNullValidator.prototype.isValid = function (context) {
        return context.propertyValue !== null && context.propertyValue !== undefined;
    };
    return NotNullValidator;
}(property_validator_1.PropertyValidator));
exports.NotNullValidator = NotNullValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LW51bGwudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90LW51bGwudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBR3pEO0lBQXNDLG9DQUFpQjtJQUNuRCwwQkFBWSxZQUFxQjtRQUM3QixrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDO0lBQ2pGLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFWRCxDQUFzQyxzQ0FBaUIsR0FVdEQ7QUFWWSx3QkFBZ0IsbUJBVTVCLENBQUEifQ==