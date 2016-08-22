import { MaxLengthValidator } from "../src/validators/max-length.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Max length validator spec.";

var tester = new PropertyValidatorTester(new MaxLengthValidator(5));
tester.test(description, [
    { value: null, pass: true },
    { value: "value", pass: true },
    { value: "csharp", pass: false }
]);