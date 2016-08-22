import { NotEmptyValidator } from "../src/validators/not-empty.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Not empty validator spec.";

var tester = new PropertyValidatorTester(new NotEmptyValidator());
tester.test(description, [
    { value: null, pass: false },
    { value: undefined, pass: false },
    { value: 0, pass: false },
    { value: 1, pass: true },
    { value: new Date(), pass: true },
    { value: "   ", valueDescription: "empty string", pass: false },
    { value: "text", pass: true },
    { value: true, pass: true },
    { value: false, pass: false },
    { value: [], valueDescription: "empty array", pass: false },
    { value: [1], pass: true }
]);