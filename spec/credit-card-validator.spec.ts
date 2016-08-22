import { CreditCardValidator } from "../src/validators/credit-card.validator";
import { PropertyValidatorTester, PropertyValidatorTestCase } from "./property-validator-tester";

var description = "Credit card validator spec.";

var tester = new PropertyValidatorTester(new CreditCardValidator());
tester.test(description, [
    { value: "349807947812143", valueDescription: "America Express", pass: true },
    { value: "5508300312526239", valueDescription: "MasterCard", pass: true },
    { value: "4532553848546203", valueDescription: "Visa", pass: true },
    { value: "4532-5538-4854-6203", valueDescription: "Visa with dashes", pass: true },
    { value: "4532 5538 4854 6203", valueDescription: "Visa with spaces", pass: true },
    { value: "1234", valueDescription: "incorrect length", pass: false },
    { value: "1234-5678-9012-3456", valueDescription: "incorrect Luhn checksum", pass: false }
]);