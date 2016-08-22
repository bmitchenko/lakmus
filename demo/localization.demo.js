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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLmRlbW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhbGl6YXRpb24uZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBZ0Msc0NBQXNDLENBQUMsQ0FBQTtBQUV2RSwwQkFBMEIsa0JBQWtCLENBQUMsQ0FBQTtBQUM3QyxrQ0FBaUMsMEJBQTBCLENBQUMsQ0FBQTtBQUU1RCxnQkFBZ0I7QUFDaEI7SUFBQTtJQUVBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRCxvQkFBb0I7QUFDcEI7SUFBOEIsbUNBQWlCO0lBQzNDO1FBQ0ksaUJBQU8sQ0FBQztRQUVSLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQzthQUNwQixPQUFPLEVBQUU7YUFDVCxTQUFTLENBQUMsRUFBRSxDQUFDO2FBQ2IsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFURCxDQUE4QixxQkFBUyxHQVN0QztBQUVELG1CQUFtQjtBQUNuQixvQ0FBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBRWpDLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDMUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUN0QyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsc0JBQXNCO0FBRXhFLDBCQUEwQjtBQUMxQixrRUFBa0U7QUFDbEUsaURBQWlEO0FBQ2pELDJCQUEyQjtBQUMzQixrQ0FBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUV0QyxDQUFDLENBQUE7QUFDRiwwQkFBMEI7QUFDMUIsb0NBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyJ9