"use strict";
var language_manager_1 = require("../localization/language-manager");
var validator_options_1 = require("../validator-options");
var PropertyValidator = (function () {
    function PropertyValidator(errorMessage) {
        this.errorMessage = errorMessage;
    }
    PropertyValidator.prototype.getErrorMessage = function (context) {
        if (this.errorMessage != null && this.errorMessage.length > 0) {
            return this.errorMessage;
        }
        if (this.errorMessageResourceName != null && this.errorMessageResourceName.length > 0) {
            return language_manager_1.LanguageManager.getLocalizedMessage(this.errorMessageResourceName, validator_options_1.ValidatorOptions.language, this.getFormatParameters(context.propertyDisplayName));
        }
        return language_manager_1.LanguageManager.getLocalizedMessage("invalidField", validator_options_1.ValidatorOptions.language, {
            name: context.propertyDisplayName
        });
    };
    PropertyValidator.prototype.getFormatParameters = function (propertyName) {
        var _this = this;
        var params = {
            name: propertyName
        };
        Object.getOwnPropertyNames(this).forEach(function (propertyName) {
            if (propertyName != "errorMessage" && propertyName != "errorMessageResourceName") {
                params[propertyName] = _this[propertyName];
            }
        });
        return params;
    };
    return PropertyValidator;
}());
exports.PropertyValidator = PropertyValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvcGVydHktdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpQ0FBZ0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNuRSxrQ0FBaUMsc0JBQXNCLENBQUMsQ0FBQTtBQUV4RDtJQUlJLDJCQUFZLFlBQXFCO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixPQUEwQjtRQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRixNQUFNLENBQUMsa0NBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsb0NBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ2hLLENBQUM7UUFFRCxNQUFNLENBQUMsa0NBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsb0NBQWdCLENBQUMsUUFBUSxFQUFFO1lBQ2xGLElBQUksRUFBRSxPQUFPLENBQUMsbUJBQW1CO1NBQ3BDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTywrQ0FBbUIsR0FBM0IsVUFBNEIsWUFBb0I7UUFBaEQsaUJBWUM7UUFYRyxJQUFJLE1BQU0sR0FBK0I7WUFDckMsSUFBSSxFQUFFLFlBQVk7U0FDckIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFZO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxjQUFjLElBQUksWUFBWSxJQUFJLDBCQUEwQixDQUFDLENBQUMsQ0FBQztnQkFDL0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFHTCx3QkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ3FCLHlCQUFpQixvQkFxQ3RDLENBQUEifQ==