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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVsbC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJudWxsLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUd6RDtJQUFtQyxpQ0FBaUI7SUFDaEQsdUJBQVksWUFBcUI7UUFDN0Isa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztJQUMzQyxDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQztJQUNqRixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBbUMsc0NBQWlCLEdBVW5EO0FBVlkscUJBQWEsZ0JBVXpCLENBQUEifQ==