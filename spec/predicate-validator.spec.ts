import { PredicateValidator } from "../src/validators/predicate.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";
import { ValidationContext } from "../src/validation-context";

var description = "Predicate validator spec.";
var customer = {
    id: 1000,
    hasDiscount: true
};

let validator = new PredicateValidator((value, instance) => instance["hasDiscount"]);
let validationContext = new ValidationContext();
validationContext.instance = customer;
validationContext.propertyValue = customer.id;

describe(description, () => {
    it("Predicate validator should pass.", () => {
        expect(validator.isValid(validationContext)).toBe(true);
    });
});