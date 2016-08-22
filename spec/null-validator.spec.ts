import { NullValidator } from "../src/validators/null.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Null validator spec.";

var tester = new PropertyValidatorTester(new NullValidator());
tester.test(description, [
    { value: null, pass: true },
    { value: undefined, pass: true },
    { value: 0, pass: false },
    { value: "   ", pass: false },
    { value: [], pass: false }
]);