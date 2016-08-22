"use strict";
var utils_1 = require("./utils");
var language_manager_1 = require("./localization/language-manager");
var validator_options_1 = require("./validator-options");
/**
 * Factory for creating validators.
 * */
var ValidatorFactory = (function () {
    function ValidatorFactory() {
    }
    /**
     * Gets a validator (singleton) of the specified type.
     * @param validatorType Type of the validator.
     */
    ValidatorFactory.getValidator = function (validatorType) {
        if (validatorType == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, { parameterName: "validatorType" });
        }
        var validatorName = utils_1.getTypeName(validatorType);
        var validator = ValidatorFactory.validators[validatorName];
        if (validator == null) {
            validator = new validatorType();
            ValidatorFactory.validators[validatorName] = validator;
        }
        return validator;
    };
    /**
     * Performs validation.
     * @param instance Instance to validate.
     * @param validatorType Type of the validator.
     */
    ValidatorFactory.validate = function (instance, validatorType) {
        if (instance == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, { parameterName: "instance" });
        }
        return ValidatorFactory.getValidator(validatorType).validate(instance);
    };
    /**
     * Performs validation and then throws an exception if validation fails.
     * @param instance Instance to validate.
     * @param validatorType Type of the validator.
     */
    ValidatorFactory.validateAndThrow = function (instance, validatorType) {
        if (instance == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, { parameterName: "instance" });
        }
        return ValidatorFactory.getValidator(validatorType).validateAndThrow(instance);
    };
    ValidatorFactory.validators = {};
    return ValidatorFactory;
}());
exports.ValidatorFactory = ValidatorFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWxpZGF0b3ItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0JBQTRCLFNBQVMsQ0FBQyxDQUFBO0FBQ3RDLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRXZEOztLQUVLO0FBQ0w7SUFBQTtJQWdEQSxDQUFDO0lBN0NHOzs7T0FHRztJQUNXLDZCQUFZLEdBQTFCLFVBQTJCLGFBQWtCO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sa0NBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsb0NBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDN0gsQ0FBQztRQUVELElBQUksYUFBYSxHQUFHLG1CQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDM0QsQ0FBQztRQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyx5QkFBUSxHQUF0QixVQUF1QixRQUFhLEVBQUUsYUFBdUI7UUFDekQsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxrQ0FBZSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxvQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN4SCxDQUFDO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyxpQ0FBZ0IsR0FBOUIsVUFBK0IsUUFBYSxFQUFFLGFBQXVCO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sa0NBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsb0NBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDeEgsQ0FBQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQTlDYywyQkFBVSxHQUE0QixFQUFFLENBQUM7SUErQzVELHVCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQWhEWSx3QkFBZ0IsbUJBZ0Q1QixDQUFBIn0=