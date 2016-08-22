import { GreaterThanValidator } from "../src/validators/greater-than.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Greater than validator spec.";

var tester = new PropertyValidatorTester(new GreaterThanValidator(100));
tester.test(description, [
    { value: null, pass: true },
    { value: 120, pass: true },
    { value: 100, pass: false }
]);