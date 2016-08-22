import { LessThanOrEqualValidator } from "../src/validators/less-than-or-equal.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Less than or equal validator spec.";

var tester = new PropertyValidatorTester(new LessThanOrEqualValidator(100));
tester.test(description, [
    { value: null, pass: true },
    { value: 100, pass: true },
    { value: 90, pass: true },
    { value: 110, pass: false }
]);