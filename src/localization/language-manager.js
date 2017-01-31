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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2NhbGl6YXRpb24vbGFuZ3VhZ2UtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7O0dBRUc7QUFDSDtJQUFBO0lBd0NBLENBQUM7SUFwQ0c7Ozs7T0FJRztJQUNXLGdDQUFnQixHQUE5QixVQUErQixRQUFnQixFQUFFLGlCQUFvQztRQUNqRixlQUFlLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csbUNBQW1CLEdBQWpDLFVBQWtDLFlBQW9CLEVBQUUsUUFBZ0IsRUFBRSxNQUFnQztRQUN0RyxJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUQsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxZQUFZLEdBQUcsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQzNELENBQUM7UUFFRCxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxlQUFlLEdBQUcsWUFBWSxHQUFHLDJDQUEyQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekcsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFZO2dCQUNwRCxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsWUFBWSxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM5RSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUF0Q0Qsb0NBQW9DO0lBQ3RCLG1DQUFtQixHQUE4QyxFQUFFLENBQUM7SUFzQ3RGLHNCQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtBQXhDWSx1QkFBZSxrQkF3QzNCLENBQUEiLCJmaWxlIjoic3JjL2xvY2FsaXphdGlvbi9sYW5ndWFnZS1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFuZ3VhZ2VSZXNvdXJjZXMgfSBmcm9tIFwiLi9sYW5ndWFnZS1yZXNvdXJjZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgbGFuZ3VhZ2UgbWFuYWdlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZU1hbmFnZXIge1xyXG4gICAgLyoqIExpc3Qgb2YgcmVnaXN0ZXJlZCBsYW5ndWFnZXMuICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyZWRMYW5ndWFnZXM6IHsgW2xhbmd1YWdlOiBzdHJpbmddOiBMYW5ndWFnZVJlc291cmNlcyB9ID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBsaXN0IG9mIGxvY2FsaXplZCBtZXNzYWdlcyBmb3IgdGhlIHNwZWNpZmllZCBsYW5ndWFnZS5cclxuICAgICAqIEBwYXJlbSBsYW5ndWFnZSBMYW5ndWFnZS5cclxuICAgICAqIEBwYXJhbSBsYW5ndWFnZVJlc291cmNlcyBMaXN0IG9mIGxvY2FsaXplZCBtZXNzYWdlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcsIGxhbmd1YWdlUmVzb3VyY2VzOiBMYW5ndWFnZVJlc291cmNlcyk6IHZvaWQge1xyXG4gICAgICAgIExhbmd1YWdlTWFuYWdlci5yZWdpc3RlcmVkTGFuZ3VhZ2VzW2xhbmd1YWdlXSA9IGxhbmd1YWdlUmVzb3VyY2VzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBsb2NhbGl6ZWQgbWVzc2FnZSBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlLlxyXG4gICAgICogQHBhcmVtIHJlc291cmNlTmFtZSBNZXNzYWdlIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gbGFuZ3VhZ2UgTGFuZ3VhZ2UuXHJcbiAgICAgKiBAcGFyYW1zIE1lc3NhZ2UgZm9ybWF0IHBhcmFtZXRlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9jYWxpemVkTWVzc2FnZShyZXNvdXJjZU5hbWU6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZywgcGFyYW1zPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciByZXNvdXJjZXMgPSBMYW5ndWFnZU1hbmFnZXIucmVnaXN0ZXJlZExhbmd1YWdlc1tsYW5ndWFnZV07XHJcblxyXG4gICAgICAgIGlmIChyZXNvdXJjZXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkxhbmd1YWdlICdcIiArIGxhbmd1YWdlICsgXCInIGlzIG5vdCByZWdpc3RlcmVkLlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSByZXNvdXJjZXNbcmVzb3VyY2VOYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIlRoZSBtZXNzYWdlICdcIiArIHJlc291cmNlTmFtZSArIFwiJyBpcyBub3QgZm91bmQgaW4gdGhlIGxvY2FsaXphdGlvbiBmaWxlICdcIiArIGxhbmd1YWdlICsgXCInLlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHBhcmFtcykuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFwie1wiICsgcHJvcGVydHlOYW1lICsgXCJ9XCIsIHBhcmFtc1twcm9wZXJ0eU5hbWVdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH0gICAgXHJcbn0iXX0=
