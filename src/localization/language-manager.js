"use strict";
/**
 * Represents a language manager.
 */
var LanguageManager = (function () {
    function LanguageManager() {
    }
    /**
     * Registers a list of localized messages for the specified language.
     * @parem language Language.
     * @param languageResources List of localized messages.
     */
    LanguageManager.registerLanguage = function (language, languageResources) {
        LanguageManager.registeredLanguages[language] = languageResources;
    };
    /**
     * Gets a localized message based on the specified language.
     * @parem resourceName Message name.
     * @param language Language.
     * @params Message format parameters.
     */
    LanguageManager.getLocalizedMessage = function (resourceName, language, params) {
        var resources = LanguageManager.registeredLanguages[language];
        if (resources == null) {
            throw "Language '" + language + "' is not registered.";
        }
        var message = resources[resourceName];
        if (message == null) {
            throw "The message '" + resourceName + "' is not found in the localization file '" + language + "'.";
        }
        if (params != null) {
            Object.getOwnPropertyNames(params).forEach(function (propertyName) {
                message = message.replace("{" + propertyName + "}", params[propertyName]);
            });
        }
        return message;
    };
    /** List of registered languages. */
    LanguageManager.registeredLanguages = {};
    return LanguageManager;
}());
exports.LanguageManager = LanguageManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbmd1YWdlLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOztHQUVHO0FBQ0g7SUFBQTtJQXdDQSxDQUFDO0lBcENHOzs7O09BSUc7SUFDVyxnQ0FBZ0IsR0FBOUIsVUFBK0IsUUFBZ0IsRUFBRSxpQkFBb0M7UUFDakYsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO0lBQ3RFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLG1DQUFtQixHQUFqQyxVQUFrQyxZQUFvQixFQUFFLFFBQWdCLEVBQUUsTUFBZ0M7UUFDdEcsSUFBSSxTQUFTLEdBQUcsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlELEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sWUFBWSxHQUFHLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQztRQUMzRCxDQUFDO1FBRUQsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sZUFBZSxHQUFHLFlBQVksR0FBRywyQ0FBMkMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pHLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWTtnQkFDcEQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLFlBQVksR0FBRyxHQUFHLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDOUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBdENELG9DQUFvQztJQUN0QixtQ0FBbUIsR0FBOEMsRUFBRSxDQUFDO0lBc0N0RixzQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksdUJBQWUsa0JBd0MzQixDQUFBIn0=