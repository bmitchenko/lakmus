"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var NullValidator = (function (_super) {
    __extends(NullValidator, _super);
    function NullValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "null";
    }
    NullValidator.prototype.isValid = function (context) {
        return context.propertyValue === null || context.propertyValue === undefined;
    };
    return NullValidator;
}(property_validator_1.PropertyValidator));
exports.NullValidator = NullValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL251bGwudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBR3pEO0lBQW1DLGlDQUFpQjtJQUNoRCx1QkFBWSxZQUFxQjtRQUM3QixrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDO0lBQzNDLENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDO0lBQ2pGLENBQUM7SUFDTCxvQkFBQztBQUFELENBVkEsQUFVQyxDQVZrQyxzQ0FBaUIsR0FVbkQ7QUFWWSxxQkFBYSxnQkFVekIsQ0FBQSIsImZpbGUiOiJzcmMvdmFsaWRhdG9ycy9udWxsLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSBcIi4vcHJvcGVydHktdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE51bGxWYWxpZGF0b3IgZXh0ZW5kcyBQcm9wZXJ0eVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlTmFtZSA9IFwibnVsbFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKGNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJvcGVydHlWYWx1ZSA9PT0gbnVsbCB8fCBjb250ZXh0LnByb3BlcnR5VmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxufSJdfQ==
