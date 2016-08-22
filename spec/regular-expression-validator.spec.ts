import { RegularExpressionValidator } from "../src/validators/regular-expression.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Regular expression validator spec.";

var tester = new PropertyValidatorTester(new RegularExpressionValidator(/\d/));
tester.test(description, [
    { value: null, pass: true },
    { value: "123", pass: true },
    { value: "abc", pass: false },
    { value: 123, pass: false },
    { value: false, pass: false }
]);