import { ExactLengthValidator } from "../src/validators/exact-length.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Exact length validator spec.";

var tester = new PropertyValidatorTester(new ExactLengthValidator(0));
tester.test(description, [
    { value: "", pass: true },
    { value: undefined, pass: true },
    { value: "value", pass: false },
    { value: 0, pass: false }
]);

tester = new PropertyValidatorTester(new ExactLengthValidator(5));
tester.test(description, [
    { value: "value", pass: true },
    { value: "value+2", pass: false }
]);