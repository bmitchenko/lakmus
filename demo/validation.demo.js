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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QixDQUFDO0FBQ0QsSUFBSSxDQUFDLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFlBQVksRUFBZCxDQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuRSxDQUFDIiwiZmlsZSI6ImRlbW8vdmFsaWRhdGlvbi5kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4uL3NyYy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gXCIuLi9zcmMvdmFsaWRhdG9yLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgVmFsaWRhdG9yT3B0aW9ucyB9IGZyb20gXCIuLi9zcmMvdmFsaWRhdG9yLW9wdGlvbnNcIjtcclxuaW1wb3J0IEFwU3R5bGVUaXRsZUNhc2VQcm9wZXJ0eU5hbWVSZXNvbHZlciBmcm9tIFwiLi4vc3JjL3Jlc29sdmVycy9hcC1zdHlsZS1wcm9wZXJ0eS1uYW1lLXJlc29sdmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyc29uIHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBhZGRyZXNzOiBBZGRyZXNzO1xyXG4gICAgcHVibGljIHBob25lTnVtYmVyczogUGhvbmVOdW1iZXJbXTtcclxuICAgIHB1YmxpYyBoYXNEaXNjb3VudDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBkaXNjb3VudFZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzIHtcclxuICAgIHB1YmxpYyBjb3VudHJ5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2l0eTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN0cmVldDogc3RyaW5nO1xyXG4gICAgcHVibGljIGhvdXNlTnVtYmVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaG9uZU51bWJlciB7XHJcbiAgICBwdWJsaWMgY291bnRyeTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBudW1iZXI6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvblZhbGlkYXRvciBleHRlbmRzIFZhbGlkYXRvcjxQZXJzb24+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIC8vIG5vdCBudWxsICYgbWF4IGxlbmd0aDtcclxuICAgICAgICB0aGlzLnJ1bGVGb3IoeCA9PiB4Lm5hbWUpXHJcbiAgICAgICAgICAgIC5ub3ROdWxsKClcclxuICAgICAgICAgICAgLm1heExlbmdodCgxMDApO1xyXG5cclxuICAgICAgICAvLyBuZXN0ZWQgb2JqZWN0aW9uIHZhbGlkYXRpb247XHJcbiAgICAgICAgdGhpcy5ydWxlRm9yKHggPT4geC5hZGRyZXNzKVxyXG4gICAgICAgICAgICAubm90TnVsbCgpXHJcbiAgICAgICAgICAgIC5zZXRWYWxpZGF0b3IobmV3IEFkZHJlc3NWYWxpZGF0b3IoKSk7XHJcblxyXG4gICAgICAgIC8vIGNvbGxlY3Rpb24gdmFsaWRhdGlvbjtcclxuICAgICAgICB0aGlzLnJ1bGVGb3IoeCA9PiB4LnBob25lTnVtYmVycylcclxuICAgICAgICAgICAgLm5vdE51bGwoKVxyXG4gICAgICAgICAgICAuc2V0Q29sbGVjdGlvblZhbGlkYXRvcihuZXcgUGhvbmVOdW1iZXJWYWxpZGF0b3IoKSk7XHJcblxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIHRoaXMud2hlbih4ID0+IHguaGFzRGlzY291bnQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ydWxlRm9yKHggPT4geC5kaXNjb3VudFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLm5vdE51bGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZHJlc3NWYWxpZGF0b3IgZXh0ZW5kcyBWYWxpZGF0b3I8QWRkcmVzcz4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ydWxlRm9yKHggPT4geC5jaXR5KVxyXG4gICAgICAgICAgICAubm90TnVsbCgpLm1heExlbmdodCg1MCk7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZUZvcih4ID0+IHguc3RyZWV0KVxyXG4gICAgICAgICAgICAubm90TnVsbCgpLm1heExlbmdodCg1MCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQaG9uZU51bWJlclZhbGlkYXRvciBleHRlbmRzIFZhbGlkYXRvcjxQaG9uZU51bWJlcj4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ydWxlRm9yKHggPT4geC5jb3VudHJ5KVxyXG4gICAgICAgICAgICAubm90TnVsbCgpLm1heExlbmdodCgzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ydWxlRm9yKHggPT4geC5jb2RlKVxyXG4gICAgICAgICAgICAubm90TnVsbCgpLm1heExlbmdodCg1KTtcclxuXHJcbiAgICAgICAgLy8gcHJlZGljYXRlIGFuZCBjdXN0b20gZXJyb3IgbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnJ1bGVGb3IoeCA9PiB4Lm51bWJlcilcclxuICAgICAgICAgICAgLm5vdE51bGwoKS5tYXhMZW5naHQoNylcclxuICAgICAgICAgICAgLm11c3QoKG51bWJlciwgcGhvbmVOdW1iZXIpID0+IChwaG9uZU51bWJlci5jb2RlIHx8IFwiXCIpLmxlbmd0aCArIChwaG9uZU51bWJlci5jb3VudHJ5IHx8IFwiXCIpLmxlbmd0aCArIChwaG9uZU51bWJlci5udW1iZXIgfHwgXCJcIikubGVuZ3RoID09IDExKVxyXG4gICAgICAgICAgICAud2l0aE1lc3NhZ2UoXCLQlNC70LjQvdCwINGC0LXQu9C10YTQvtC90LAg0L3QtSDQtNC+0LvQttC90LAg0LHRi9GC0YwgMTEg0LfQvdCw0LrQvtCyLlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gc2V0IGN1c3RvbSBwcm9wZXJ0eSBuYW1lIHJlc29sdmVyOiBkaXNjb3VudFZhbHVlIC0+IERpc2NvdW50IFZhbHVlXHJcblZhbGlkYXRvck9wdGlvbnMucHJvcGVydHlOYW1lUmVzb2x2ZXIgPSBBcFN0eWxlVGl0bGVDYXNlUHJvcGVydHlOYW1lUmVzb2x2ZXI7XHJcblxyXG4vLyBpbml0aWFsaXplIG9iamVjdCB0byB2YWxpZGF0ZTtcclxudmFyIHBlcnNvbiA9IG5ldyBQZXJzb24oKTtcclxuXHJcbi8vIGNyZWF0ZSB2YWxpZGF0b3I7XHJcbnZhciB2YWxpZGF0b3IgPSBuZXcgUGVyc29uVmFsaWRhdG9yKCk7XHJcbi8vIG9yIGdldCBpdCBmcm9tIGZhY3RvcnkgKHJlY29tbWVuZGVkKSBcclxudmFsaWRhdG9yID0gVmFsaWRhdG9yRmFjdG9yeS5nZXRWYWxpZGF0b3IoUGVyc29uVmFsaWRhdG9yKTtcclxuXHJcbi8vIHZhbGlkYXRlO1xyXG52YXIgcmVzdWx0ID0gdmFsaWRhdG9yLnZhbGlkYXRlKHBlcnNvbik7XHJcblxyXG4vLyByZXN1bHQgY29udGFpbnMgbGlzdCBvZiBlcnJvcnM7XHJcbmlmIChyZXN1bHQuaXNWYWxpZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJJcyB2YWxpZC5cIik7XHJcbn1cclxuZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3JzLm1hcCh4ID0+IHguZXJyb3JNZXNzYWdlKS5qb2luKFwiXFxuXCIpKTtcclxufSJdfQ==
