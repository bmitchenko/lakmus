import { InclusiveBetweenValidator } from "../src/validators/inclusive-between.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Inclusive between validator spec.";

var tester = new PropertyValidatorTester(new InclusiveBetweenValidator(50, 100));
tester.test(description, [
    { value: null, pass: true },
    { value: 50, pass: true },
    { value: 100, pass: true },
    { value: 110, pass: false },
    { value: 40, pass: false }
]);