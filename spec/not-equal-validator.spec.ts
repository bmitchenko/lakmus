import { NotEqualValidator } from "../src/validators/not-equal.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Not equal validator spec.";

var tester = new PropertyValidatorTester(new NotEqualValidator(null));
tester.test(description, [
    { value: null, pass: false },
    { value: undefined, pass: true },
    { value: 0, pass: true }
]);

tester = new PropertyValidatorTester(new NotEqualValidator("test string"));
tester.test(description, [
    { value: "test string", pass: false },
    { value: "TEST STRING", pass: true },
    { value: "another string", pass: true },
    { value: 100, pass: true }
]);

tester = new PropertyValidatorTester(new NotEqualValidator(new Date(2020, 1, 0)));
tester.test(description, [
    { value: new Date(2020, 1, 0), pass: false },
    { value: new Date(2010, 1, 0), pass: true }
]);

tester = new PropertyValidatorTester(new NotEqualValidator(false));
tester.test(description, [
    { value: false, pass: false },
    { value: true, pass: true },
    { value: "false", pass: true }
]);

tester = new PropertyValidatorTester(new NotEqualValidator(1000));
tester.test(description, [
    { value: 1000, pass: false },
    { value: "1000", pass: true },
    { value: 500, pass: true },
    { value: -1000, pass: true }
]);