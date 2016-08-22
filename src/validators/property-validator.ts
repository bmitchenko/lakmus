import { ValidationContext } from "../validation-context";
import { LanguageManager } from "../localization/language-manager";
import { ValidatorOptions } from "../validator-options";

export abstract class PropertyValidator {
    public errorMessage: string;
    public errorMessageResourceName: string;

    constructor(errorMessage?: string) {
        this.errorMessage = errorMessage;
    }

    public getErrorMessage(context: ValidationContext): string {
        if (this.errorMessage != null && this.errorMessage.length > 0) {
            return this.errorMessage;
        }

        if (this.errorMessageResourceName != null && this.errorMessageResourceName.length > 0) {
            return LanguageManager.getLocalizedMessage(this.errorMessageResourceName, ValidatorOptions.language, this.getFormatParameters(context.propertyDisplayName));
        }

        return LanguageManager.getLocalizedMessage("invalidField", ValidatorOptions.language, {
            name: context.propertyDisplayName
        });
    }

    private getFormatParameters(propertyName: string): { [parameterName: string]: string } {
        var params: { [name: string]: string } = {
            name: propertyName
        };

        Object.getOwnPropertyNames(this).forEach((propertyName) => {
            if (propertyName != "errorMessage" && propertyName != "errorMessageResourceName") {
                params[propertyName] = this[propertyName];
            }
        });

        return params;
    }

    public abstract isValid(context: ValidationContext): boolean;
}