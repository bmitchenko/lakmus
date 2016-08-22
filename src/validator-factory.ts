import { ValidationResult } from "./results/validation-result";
import { Validator } from "./validator";
import { getTypeName } from "./utils";
import { LanguageManager } from "./localization/language-manager";
import { ValidatorOptions } from "./validator-options";

/** 
 * Factory for creating validators. 
 * */
export class ValidatorFactory {
    private static validators: { [name: string]: any } = {};

    /** 
     * Gets a validator (singleton) of the specified type.
     * @param validatorType Type of the validator.
     */
    public static getValidator(validatorType: any): Validator<any> {
        if (validatorType == null) {
            throw LanguageManager.getLocalizedMessage("argumentNull", ValidatorOptions.language, { parameterName: "validatorType" });
        }

        var validatorName = getTypeName(validatorType);
        var validator = ValidatorFactory.validators[validatorName];

        if (validator == null) {
            validator = new validatorType();
            ValidatorFactory.validators[validatorName] = validator;
        }

        return validator;
    }

    /**
     * Performs validation.
     * @param instance Instance to validate.
     * @param validatorType Type of the validator.
     */
    public static validate(instance: any, validatorType: Function): ValidationResult {
        if (instance == null) {
            throw LanguageManager.getLocalizedMessage("argumentNull", ValidatorOptions.language, { parameterName: "instance" });
        }

        return ValidatorFactory.getValidator(validatorType).validate(instance);
    }

    /**
     * Performs validation and then throws an exception if validation fails.
     * @param instance Instance to validate.
     * @param validatorType Type of the validator.
     */
    public static validateAndThrow(instance: any, validatorType: Function): void {
        if (instance == null) {
            throw LanguageManager.getLocalizedMessage("argumentNull", ValidatorOptions.language, { parameterName: "instance" });
        }

        return ValidatorFactory.getValidator(validatorType).validateAndThrow(instance);
    }
}