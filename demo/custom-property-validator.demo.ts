import { PropertyValidator } from "../src/validators/property-validator";
import { Validator } from "../src/validator";
import { ValidationContext } from "../src/validation-context";
import { ValidatorOptions } from "../src/validator-options";
import { ValidationRuleConfigurator } from "../src/validation-rule-configurator";

// define custom property validator;
class PinValidator extends PropertyValidator {
    public isValid(context: ValidationContext): boolean {
        return typeof context.propertyValue == "string" && context.propertyValue.length == 4;
    }
}

// define class;
class Person {
    public pin: string;
}

// define validator;
class PersonValidator extends Validator<Person> {
    constructor() {
        super();

        this.ruleFor(x => x.pin)
            // apply new validator;
            .setValidator(new PinValidator());
    }
}

// optionally you can extend ValidationRuleConfigurator:
ValidationRuleConfigurator.prototype["pin"] = () => {
    return this.setValidator(new PinValidator());
};

// use module augmentation https://www.typescriptlang.org/docs/handbook/declaration-merging.html to tell the
// compiler about new validation method;
declare module "../src/validation-rule-configurator" {
    interface ValidationRuleConfigurator<TInstance, TProperty> {
        pin(): ValidationRuleConfigurator<TInstance, TProperty>;
    }
}

class AugmentedPersonValidator extends Validator<Person> {
    constructor() {
        super();

        this.ruleFor(x => x.pin)
            // apply new validator;
            .pin();
    }
}