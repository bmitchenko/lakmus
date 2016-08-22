import { EmptyValidator } from "../src/validators/empty.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Empty validator spec.";

var tester = new PropertyValidatorTester(new EmptyValidator());
tester.test(description, [
    { value: null, pass: true },
    { value: undefined, pass: true },
    { value: 0, pass: true },
    { value: 1, pass: false },
    { value: new Date(), pass: false },
    { value: "   ", valueDescription: "empty string", pass: true },
    { value: "text", pass: false },
    { value: true, pass: false },
    { value: false, pass: true },
    { value: [], valueDescription: "empty array", pass: true },
    { value: [1], pass: false }
]);