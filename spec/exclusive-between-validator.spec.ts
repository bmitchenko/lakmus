import { ExclusiveBetweenValidator } from "../src/validators/exclusive-between.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Exclusive between validator spec.";

var tester = new PropertyValidatorTester(new ExclusiveBetweenValidator(0, 100));
tester.test(description, [
    { value: null, pass: true },
    { value: 50, pass: true },
    { value: 0, pass: false },
    { value: 100, pass: false }
]);