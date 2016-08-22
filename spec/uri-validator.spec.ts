import { UriValidator } from "../src/validators/uri.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Regular expression validator spec.";

var tester = new PropertyValidatorTester(new UriValidator());
tester.test(description, [
    { value: null, pass: true },
    { value: "http://google.com", pass: true },
    { value: "http://россия.рф", pass: true },
    { value: "google.com", pass: false },
    { value: "google", pass: false },
    { value: 500, pass: false }
]);