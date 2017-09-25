import { Validator } from "../src/validator";
import { ValidatorFactory } from "../src/validator-factory";
import { ValidatorOptions } from "../src/validator-options";
import ApStyleTitleCasePropertyNameResolver from "../src/resolvers/ap-style-property-name-resolver";

export class Person {
    public id: number;
    public name: string;
    public address: Address;
    public phoneNumbers: PhoneNumber[];
    public hasDiscount: boolean;
    public discountValue: number;
}

export class Address {
    public country: string;
    public city: string;
    public street: string;
    public houseNumber: string;
}

export class PhoneNumber {
    public country: string;
    public code: string;
    public number: string;
}

export class PersonValidator extends Validator<Person> {
    constructor() {
        super();

        // not null & max length;
        this.ruleFor(x => x.name)
            .notNull()
            .maxLength(100);

        // nested objection validation;
        this.ruleFor(x => x.address)
            .notNull()
            .setValidator(new AddressValidator());

        // collection validation;
        this.ruleFor(x => x.phoneNumbers)
            .notNull()
            .setCollectionValidator(new PhoneNumberValidator());

        // 
        this.when(x => x.hasDiscount, () => {
            this.ruleFor(x => x.discountValue)
                .notNull();
        });
    }
}

export class AddressValidator extends Validator<Address> {
    constructor() {
        super();

        this.ruleFor(x => x.city)
            .notNull().maxLength(50);

        this.ruleFor(x => x.street)
            .notNull().maxLength(50);
    }
}

export class PhoneNumberValidator extends Validator<PhoneNumber> {
    constructor() {
        super();

        this.ruleFor(x => x.country)
            .notNull().maxLength(3);

        this.ruleFor(x => x.code)
            .notNull().maxLength(5);

        // predicate and custom error message;
        this.ruleFor(x => x.number)
            .notNull().maxLength(7)
            .must((number, phoneNumber) => (phoneNumber.code || "").length + (phoneNumber.country || "").length + (phoneNumber.number || "").length == 11)
            .withMessage("Длина телефона не должна быть 11 знаков.");
    }
}

// set custom property name resolver: discountValue -> Discount Value
ValidatorOptions.propertyNameResolver = ApStyleTitleCasePropertyNameResolver;

// initialize object to validate;
var person = new Person();

// create validator;
var validator = new PersonValidator();
// or get it from factory (recommended) 
validator = ValidatorFactory.getValidator(PersonValidator);

// validate;
var result = validator.validate(person);

// result contains list of errors;
if (result.isValid) {
    console.log("Is valid.");
}
else {
    console.log(result.errors.map(x => x.errorMessage).join("\n"));
}