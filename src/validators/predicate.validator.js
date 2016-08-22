"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var PredicateValidator = (function (_super) {
    __extends(PredicateValidator, _super);
    function PredicateValidator(predicate, errorMessage) {
        _super.call(this, errorMessage);
        this.predicate = predicate;
        this.errorMessageResourceName = "predicate";
    }
    PredicateValidator.prototype.isValid = function (context) {
        return this.predicate(context.propertyValue, context.instance);
    };
    return PredicateValidator;
}(property_validator_1.PropertyValidator));
exports.PredicateValidator = PredicateValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljYXRlLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZWRpY2F0ZS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQ7SUFBd0Msc0NBQWlCO0lBR3JELDRCQUFZLFNBQWtELEVBQUUsWUFBcUI7UUFDakYsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztJQUNoRCxDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFiRCxDQUF3QyxzQ0FBaUIsR0FheEQ7QUFiWSwwQkFBa0IscUJBYTlCLENBQUEifQ==