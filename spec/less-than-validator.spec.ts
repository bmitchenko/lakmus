import { LessThanValidator } from "../src/validators/less-than.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Less than validator spec.";

var tester = new PropertyValidatorTester(new LessThanValidator(100));
tester.test(description, [
    { value: null, pass: true },
    { value: 50, pass: true },
    { value: 100, pass: false }
]);