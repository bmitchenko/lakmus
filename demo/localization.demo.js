"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var language_manager_1 = require("../src/localization/language-manager");
var validator_1 = require("../src/validator");
var validator_options_1 = require("../src/validator-options");
// define class;
var Person = (function () {
    function Person() {
    }
    return Person;
}());
// define validator;
var PersonValidator = (function (_super) {
    __extends(PersonValidator, _super);
    function PersonValidator() {
        _super.call(this);
        this.ruleFor(function (x) { return x.name; })
            .notNull()
            .minLenght(10)
            .withName("Имя");
    }
    return PersonValidator;
}(validator_1.Validator));
// select language;
validator_options_1.ValidatorOptions.language = "ru";
var person = new Person();
var validator = new PersonValidator();
var result = validator.validate(person);
var errorMessage = result.errors[0].errorMessage; // Требуется поле Имя.
// to add a new langugage:
// 1. create a copy of /src/localization/en.ts to use as template;
// 2. replace error messages with localized ones;
// 3. register new language
language_manager_1.LanguageManager.registerLanguage("ua", {});
// 4. select new language;
validator_options_1.ValidatorOptions.language = "ua";

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vbG9jYWxpemF0aW9uLmRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQWdDLHNDQUFzQyxDQUFDLENBQUE7QUFFdkUsMEJBQTBCLGtCQUFrQixDQUFDLENBQUE7QUFDN0Msa0NBQWlDLDBCQUEwQixDQUFDLENBQUE7QUFFNUQsZ0JBQWdCO0FBQ2hCO0lBQUE7SUFFQSxDQUFDO0lBQUQsYUFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRUQsb0JBQW9CO0FBQ3BCO0lBQThCLG1DQUFpQjtJQUMzQztRQUNJLGlCQUFPLENBQUM7UUFFUixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUM7YUFDcEIsT0FBTyxFQUFFO2FBQ1QsU0FBUyxDQUFDLEVBQUUsQ0FBQzthQUNiLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUNkIscUJBQVMsR0FTdEM7QUFFRCxtQkFBbUI7QUFDbkIsb0NBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUVqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQzFCLElBQUksU0FBUyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFDdEMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QyxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLHNCQUFzQjtBQUV4RSwwQkFBMEI7QUFDMUIsa0VBQWtFO0FBQ2xFLGlEQUFpRDtBQUNqRCwyQkFBMkI7QUFDM0Isa0NBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFFdEMsQ0FBQyxDQUFBO0FBQ0YsMEJBQTBCO0FBQzFCLG9DQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiZGVtby9sb2NhbGl6YXRpb24uZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhbmd1YWdlTWFuYWdlciB9IGZyb20gXCIuLi9zcmMvbG9jYWxpemF0aW9uL2xhbmd1YWdlLW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTGFuZ3VhZ2VSZXNvdXJjZXMgfSBmcm9tIFwiLi4vc3JjL2xvY2FsaXphdGlvbi9sYW5ndWFnZS1yZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4uL3NyYy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgVmFsaWRhdG9yT3B0aW9ucyB9IGZyb20gXCIuLi9zcmMvdmFsaWRhdG9yLW9wdGlvbnNcIjtcclxuXHJcbi8vIGRlZmluZSBjbGFzcztcclxuY2xhc3MgUGVyc29uIHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIGRlZmluZSB2YWxpZGF0b3I7XHJcbmNsYXNzIFBlcnNvblZhbGlkYXRvciBleHRlbmRzIFZhbGlkYXRvcjxQZXJzb24+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucnVsZUZvcih4ID0+IHgubmFtZSlcclxuICAgICAgICAgICAgLm5vdE51bGwoKVxyXG4gICAgICAgICAgICAubWluTGVuZ2h0KDEwKVxyXG4gICAgICAgICAgICAud2l0aE5hbWUoXCLQmNC80Y9cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHNlbGVjdCBsYW5ndWFnZTtcclxuVmFsaWRhdG9yT3B0aW9ucy5sYW5ndWFnZSA9IFwicnVcIjtcclxuXHJcbnZhciBwZXJzb24gPSBuZXcgUGVyc29uKCk7XHJcbnZhciB2YWxpZGF0b3IgPSBuZXcgUGVyc29uVmFsaWRhdG9yKCk7XHJcbnZhciByZXN1bHQgPSB2YWxpZGF0b3IudmFsaWRhdGUocGVyc29uKTtcclxudmFyIGVycm9yTWVzc2FnZSA9IHJlc3VsdC5lcnJvcnNbMF0uZXJyb3JNZXNzYWdlOyAvLyDQotGA0LXQsdGD0LXRgtGB0Y8g0L/QvtC70LUg0JjQvNGPLlxyXG5cclxuLy8gdG8gYWRkIGEgbmV3IGxhbmd1Z2FnZTpcclxuLy8gMS4gY3JlYXRlIGEgY29weSBvZiAvc3JjL2xvY2FsaXphdGlvbi9lbi50cyB0byB1c2UgYXMgdGVtcGxhdGU7XHJcbi8vIDIuIHJlcGxhY2UgZXJyb3IgbWVzc2FnZXMgd2l0aCBsb2NhbGl6ZWQgb25lcztcclxuLy8gMy4gcmVnaXN0ZXIgbmV3IGxhbmd1YWdlXHJcbkxhbmd1YWdlTWFuYWdlci5yZWdpc3Rlckxhbmd1YWdlKFwidWFcIiwge1xyXG4gICAgLy8gbG9jYWxpemVkIG1lc3NhZ2VzO1xyXG59KVxyXG4vLyA0LiBzZWxlY3QgbmV3IGxhbmd1YWdlO1xyXG5WYWxpZGF0b3JPcHRpb25zLmxhbmd1YWdlID0gXCJ1YVwiOyJdfQ==
