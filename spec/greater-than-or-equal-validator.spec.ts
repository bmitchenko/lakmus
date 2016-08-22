import { GreaterThanOrEqualValidator } from "../src/validators/greater-than-or-equal.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Greater than or equal validator spec.";

var tester = new PropertyValidatorTester(new GreaterThanOrEqualValidator(100));
tester.test(description, [
    { value: null, pass: true },
    { value: 100, pass: true },
    { value: 120, pass: true },
    { value: 99, pass: false }
]);