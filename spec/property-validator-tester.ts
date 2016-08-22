import { PropertyValidator } from "../src/validators/property-validator";
import { ValidationContext } from "../src/validation-context";

export class PropertyValidatorTester {
    private validator: PropertyValidator;

    constructor(validator: PropertyValidator) {
        this.validator = validator;
    }

    public test(description: string, testCases: PropertyValidatorTestCase[]): void {
        describe(description, () => {
            testCases.forEach((testCase) => {
                let validationContext = new ValidationContext();
                validationContext.propertyValue = testCase.value;

                it(this.getExpectation(testCase), () => {
                    expect(this.validator.isValid(validationContext)).toBe(testCase.pass);
                });
            });
        });
    }

    private valueToString(value: any): string {
        if (value === undefined) {
            return "undefined";
        }

        if (value === null) {
            return "null";
        }

        return value.toString();
    }

    private getExpectation(testCase: PropertyValidatorTestCase): string {
        var valueText = "'" + this.valueToString(testCase.value) + "'";

        if (testCase.valueDescription) {
            valueText += " (" + testCase.valueDescription + ")";
        }

        return "When value is " + valueText + " validator should " + (testCase.pass ? "pass" : "fail") + ".";
    }
}

export interface PropertyValidatorTestCase {
    value: any;
    valueDescription?: string;
    pass: boolean;
}