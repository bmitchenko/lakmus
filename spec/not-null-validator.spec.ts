import { NotNullValidator } from "../src/validators/not-null.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Not null validator spec.";

var tester = new PropertyValidatorTester(new NotNullValidator());
tester.test(description, [
    { value: null, pass: false },
    { value: undefined, pass: false },
    { value: 0, pass: true },
    { value: "   ", pass: true },
    { value: [], pass: true }
]);