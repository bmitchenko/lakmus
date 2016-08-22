import { EqualValidator } from "../src/validators/equal.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Equal validator spec.";

var tester = new PropertyValidatorTester(new EqualValidator(null));
tester.test(description, [
    { value: null, pass: true },
    { value: undefined, pass: false },
    { value: 0, pass: false }
]);

tester = new PropertyValidatorTester(new EqualValidator("test string"));
tester.test(description, [
    { value: "test string", pass: true },
    { value: "TEST STRING", pass: false },
    { value: "another string", pass: false },
    { value: 100, pass: false }
]);

tester = new PropertyValidatorTester(new EqualValidator(new Date(2020, 1, 0)));
tester.test(description, [
    { value: new Date(2020, 1, 0), pass: true },
    { value: new Date(2010, 1, 0), pass: false }
]);

tester = new PropertyValidatorTester(new EqualValidator(false));
tester.test(description, [
    { value: false, pass: true },
    { value: true, pass: false },
    { value: "false", pass: false }
]);

tester = new PropertyValidatorTester(new EqualValidator(1000));
tester.test(description, [
    { value: 1000, pass: true },
    { value: "1000", pass: false },
    { value: 500, pass: false },
    { value: -1000, pass: false }
]);