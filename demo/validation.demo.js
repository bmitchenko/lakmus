"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var validator_1 = require("../src/validator");
var validator_factory_1 = require("../src/validator-factory");
var validator_options_1 = require("../src/validator-options");
var ap_style_property_name_resolver_1 = require("../src/resolvers/ap-style-property-name-resolver");
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var Address = (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var PhoneNumber = (function () {
    function PhoneNumber() {
    }
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;
var PersonValidator = (function (_super) {
    __extends(PersonValidator, _super);
    function PersonValidator() {
        var _this = this;
        _super.call(this);
        // not null & max length;
        this.ruleFor(function (x) { return x.name; })
            .notNull()
            .maxLenght(100);
        // nested objection validation;
        this.ruleFor(function (x) { return x.address; })
            .notNull()
            .setValidator(new AddressValidator());
        // collection validation;
        this.ruleFor(function (x) { return x.phoneNumbers; })
            .notNull()
            .setCollectionValidator(new PhoneNumberValidator());
        // 
        this.when(function (x) { return x.hasDiscount; }, function () {
            _this.ruleFor(function (x) { return x.discountValue; })
                .notNull();
        });
    }
    return PersonValidator;
}(validator_1.Validator));
exports.PersonValidator = PersonValidator;
var AddressValidator = (function (_super) {
    __extends(AddressValidator, _super);
    function AddressValidator() {
        _super.call(this);
        this.ruleFor(function (x) { return x.city; })
            .notNull().maxLenght(50);
        this.ruleFor(function (x) { return x.street; })
            .notNull().maxLenght(50);
    }
    return AddressValidator;
}(validator_1.Validator));
exports.AddressValidator = AddressValidator;
var PhoneNumberValidator = (function (_super) {
    __extends(PhoneNumberValidator, _super);
    function PhoneNumberValidator() {
        _super.call(this);
        this.ruleFor(function (x) { return x.country; })
            .notNull().maxLenght(3);
        this.ruleFor(function (x) { return x.code; })
            .notNull().maxLenght(5);
        // predicate and custom error message;
        this.ruleFor(function (x) { return x.number; })
            .notNull().maxLenght(7)
            .must(function (number, phoneNumber) { return (phoneNumber.code || "").length + (phoneNumber.country || "").length + (phoneNumber.number || "").length == 11; })
            .withMessage("Длина телефона не должна быть 11 знаков.");
    }
    return PhoneNumberValidator;
}(validator_1.Validator));
exports.PhoneNumberValidator = PhoneNumberValidator;
// set custom property name resolver: discountValue -> Discount Value
validator_options_1.ValidatorOptions.propertyNameResolver = ap_style_property_name_resolver_1.default;
// initialize object to validate;
var person = new Person();
// create validator;
var validator = new PersonValidator();
// or get it from factory (recommended) 
validator = validator_factory_1.ValidatorFactory.getValidator(PersonValidator);
// validate;
var result = validator.validate(person);
// result contains list of errors;
if (result.isValid) {
    console.log("Is valid.");
}
else {
    console.log(result.errors.map(function (x) { return x.errorMessage; }).join("\n"));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5kZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBCQUEwQixrQkFBa0IsQ0FBQyxDQUFBO0FBQzdDLGtDQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzVELGtDQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzVELGdEQUFpRCxrREFBa0QsQ0FBQyxDQUFBO0FBRXBHO0lBQUE7SUFPQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksY0FBTSxTQU9sQixDQUFBO0FBRUQ7SUFBQTtJQUtBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxlQUFPLFVBS25CLENBQUE7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxtQkFBVyxjQUl2QixDQUFBO0FBRUQ7SUFBcUMsbUNBQWlCO0lBQ2xEO1FBREosaUJBeUJDO1FBdkJPLGlCQUFPLENBQUM7UUFFUix5QkFBeUI7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDO2FBQ3BCLE9BQU8sRUFBRTthQUNULFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDO2FBQ3ZCLE9BQU8sRUFBRTthQUNULFlBQVksQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUUxQyx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxZQUFZLEVBQWQsQ0FBYyxDQUFDO2FBQzVCLE9BQU8sRUFBRTthQUNULHNCQUFzQixDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBRXhELEdBQUc7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBYixDQUFhLEVBQUU7WUFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxhQUFhLEVBQWYsQ0FBZSxDQUFDO2lCQUM3QixPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUF6QkQsQ0FBcUMscUJBQVMsR0F5QjdDO0FBekJZLHVCQUFlLGtCQXlCM0IsQ0FBQTtBQUVEO0lBQXNDLG9DQUFrQjtJQUNwRDtRQUNJLGlCQUFPLENBQUM7UUFFUixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUM7YUFDcEIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQzthQUN0QixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQVZELENBQXNDLHFCQUFTLEdBVTlDO0FBVlksd0JBQWdCLG1CQVU1QixDQUFBO0FBRUQ7SUFBMEMsd0NBQXNCO0lBQzVEO1FBQ0ksaUJBQU8sQ0FBQztRQUVSLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQzthQUN2QixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDO2FBQ3BCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QixzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVIsQ0FBUSxDQUFDO2FBQ3RCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDdEIsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFFLFdBQVcsSUFBSyxPQUFBLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBOUcsQ0FBOEcsQ0FBQzthQUM3SSxXQUFXLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBaEJELENBQTBDLHFCQUFTLEdBZ0JsRDtBQWhCWSw0QkFBb0IsdUJBZ0JoQyxDQUFBO0FBRUQscUVBQXFFO0FBQ3JFLG9DQUFnQixDQUFDLG9CQUFvQixHQUFHLHlDQUFvQyxDQUFDO0FBRTdFLGlDQUFpQztBQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBRTFCLG9CQUFvQjtBQUNwQixJQUFJLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0FBQ3RDLHdDQUF3QztBQUN4QyxTQUFTLEdBQUcsb0NBQWdCLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTNELFlBQVk7QUFDWixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXhDLGtDQUFrQztBQUNsQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFDRCxJQUFJLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxFQUFkLENBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUMifQ==