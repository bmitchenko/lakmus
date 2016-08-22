import { EmailValidator } from "../src/validators/email.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Email validator spec.";

var tester = new PropertyValidatorTester(new EmailValidator());
tester.test(description, [
    { value: "user.name123@outlook.com", valueDescription: "well-formed email address", pass: true },
    { value: "пользователь@почта.ру", valueDescription: "well-formed cyrillic email address", pass: true },
    { value: "usernameoutlook.com", valueDescription: "no '@'", pass: false },
    { value: "username@outlookcom", valueDescription: "invalid host", pass: false },
    { value: null, valueDescription: "null", pass: true },
    { value: "", valueDescription: "empty string", pass: false },
    { value: 12345, valueDescription: "number", pass: false }
]);