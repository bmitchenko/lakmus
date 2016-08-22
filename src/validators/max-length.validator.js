"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var MaxLengthValidator = (function (_super) {
    __extends(MaxLengthValidator, _super);
    function MaxLengthValidator(maxLength, errorMessage) {
        _super.call(this, errorMessage);
        this.maxLength = maxLength;
        this.errorMessageResourceName = "maxLength";
    }
    MaxLengthValidator.prototype.isValid = function (context) {
        var value = context.propertyValue;
        if (value == undefined) {
            return true;
        }
        if (typeof value == "string") {
            return value.length <= this.maxLength;
        }
        return false;
    };
    return MaxLengthValidator;
}(property_validator_1.PropertyValidator));
exports.MaxLengthValidator = MaxLengthValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWxlbmd0aC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXgtbGVuZ3RoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUd6RDtJQUF3QyxzQ0FBaUI7SUFHckQsNEJBQVksU0FBaUIsRUFBRSxZQUFxQjtRQUNoRCxrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsV0FBVyxDQUFDO0lBQ2hELENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUVsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUMsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUF3QyxzQ0FBaUIsR0F1QnhEO0FBdkJZLDBCQUFrQixxQkF1QjlCLENBQUEifQ==