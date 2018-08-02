import { ValidatorFactory } from "../src/validator-factory";
import { PhoneValidator } from "../src/validators/phone.validator";
import { EmailValidator } from "../src/validators/email.validator";

describe("ValidatorFactory", () => {
    it("Resolves multiple validators", () => {
        let validator = ValidatorFactory.getValidator(PhoneValidator);
        expect(validator instanceof PhoneValidator).toBeTruthy();
        validator = ValidatorFactory.getValidator(EmailValidator);
        expect(validator instanceof EmailValidator).toBeTruthy();
    });
});