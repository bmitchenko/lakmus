import { PhoneValidator } from "../src/validators/phone.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Phone validator spec.";

var tester = new PropertyValidatorTester(new PhoneValidator());
tester.test(description, [
    { value: null, pass: true },
    { value: "+1 800-642-7676", pass: true },
    { value: "800-642-7676", pass: true },
    { value: "8 123 4567890", pass: true },
    { value: "+7 123 4567890", pass: true },
    { value: "+7 (123) 456-78-90", pass: true },
    { value: "+7 (1234) 56-78-90", pass: true },
    { value: "+7 (12345) 6-78-90", pass: true },
    { value: "71234567890", pass: true }
]);