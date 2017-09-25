import { LanguageManager } from "../src/localization/language-manager";
import { LanguageResources } from "../src/localization/language-resources";
import { Validator } from "../src/validator";
import { ValidatorOptions } from "../src/validator-options";

// define class;
class Person {
    public name: string;
}

// define validator;
class PersonValidator extends Validator<Person> {
    constructor() {
        super();

        this.ruleFor(x => x.name)
            .notNull()
            .minLength(10)
            .withName("Имя");
    }
}

// select language;
ValidatorOptions.language = "ru";

var person = new Person();
var validator = new PersonValidator();
var result = validator.validate(person);
var errorMessage = result.errors[0].errorMessage; // Требуется поле Имя.

// to add a new langugage:
// 1. create a copy of /src/localization/en.ts to use as template;
// 2. replace error messages with localized ones;
// 3. register new language
LanguageManager.registerLanguage("ua", {
    // localized messages;
})
// 4. select new language;
ValidatorOptions.language = "ua";