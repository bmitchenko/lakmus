"use strict";
var validation_context_1 = require("./validation-context");
var validation_error_1 = require("./results/validation-error");
var language_manager_1 = require("./localization/language-manager");
var validator_options_1 = require("./validator-options");
/** Defines a rule associated with a property which can have multiple validators. */
var ValidationRule = (function () {
    /**
     * Initializes a new instance of the ValidationRule class.
     * @param name Property name.
     */
    function ValidationRule(name) {
        /** Collection validators to apply. */
        this.collectionValidators = [];
        /** Property validators to apply. */
        this.propertyValidators = [];
        /** Custom validators to apply. */
        this.validators = [];
        /** Conditions that control when the rule should execute. */
        this.when = [];
        this.propertyDisplayName = validator_options_1.ValidatorOptions.propertyNameResolver(name);
        this.propertyName = name;
    }
    /**
     * Performs validation using an object instance and returns a collection of validation errors.
     * @param instance The object to validate.
     */
    ValidationRule.prototype.validate = function (instance) {
        var _this = this;
        if (instance == null) {
            throw language_manager_1.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, {
                parameterName: "instance"
            });
        }
        var errors = [];
        if (this.when != null) {
            if (this.when.some(function (x) { return !x(instance); })) {
                return errors;
            }
        }
        var value = this.getValue(instance);
        var context = new validation_context_1.ValidationContext();
        context.instance = instance;
        context.propertyDisplayName = this.propertyDisplayName;
        context.propertyName = this.propertyName;
        context.propertyValue = value;
        if (this.collectionValidators != null) {
            this.collectionValidators.forEach(function (collectionValidator) {
                _this.validateWithCollectionValidator(context, collectionValidator, errors);
            });
        }
        if (this.validators != null) {
            this.validators.forEach(function (validator) {
                _this.validateWithValidator(context.propertyValue, validator, errors);
            });
        }
        if (this.propertyValidators != null) {
            this.propertyValidators.forEach(function (propertyValidator) {
                _this.validateWithPropertyValidator(context, propertyValidator, errors);
            });
        }
        return errors;
    };
    ValidationRule.prototype.validateWithCollectionValidator = function (context, validator, errors) {
        var _this = this;
        if (context.propertyValue == null) {
            return;
        }
        if (context.propertyValue instanceof Array) {
            context.propertyValue.forEach(function (item) {
                if (item != null) {
                    _this.validateWithValidator(item, validator, errors);
                }
            });
        }
        else {
            throw language_manager_1.LanguageManager.getLocalizedMessage("invalidPropertyType", validator_options_1.ValidatorOptions.language, {
                propertyName: context.propertyName,
                type: typeof context.propertyValue,
                expectedType: "Array"
            });
        }
    };
    ValidationRule.prototype.validateWithValidator = function (value, validator, errors) {
        if (value == null) {
            return;
        }
        var result = validator.validate(value);
        result.errors.forEach(function (error) {
            errors.push(error);
        });
    };
    ValidationRule.prototype.validateWithPropertyValidator = function (context, validator, errors) {
        if (!validator.isValid(context)) {
            errors.push(new validation_error_1.ValidationError(validator.getErrorMessage(context), context.propertyName));
        }
    };
    ValidationRule.prototype.getValue = function (instance) {
        var value = instance[this.propertyName];
        // if (window) {
        //     if (window["ko"]) {
        //         value = window["ko"].unwrap(value);
        //     }
        // }
        return value;
    };
    return ValidationRule;
}());
exports.ValidationRule = ValidationRule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0aW9uLXJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3pELGlDQUFnQyw0QkFBNEIsQ0FBQyxDQUFBO0FBRTdELGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLGtDQUFpQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRXZELG9GQUFvRjtBQUNwRjtJQW9CSTs7O09BR0c7SUFDSCx3QkFBWSxJQUFZO1FBdEJ4QixzQ0FBc0M7UUFDL0IseUJBQW9CLEdBQXFCLEVBQUUsQ0FBQztRQVFuRCxvQ0FBb0M7UUFDN0IsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUVwRCxrQ0FBa0M7UUFDM0IsZUFBVSxHQUEyQixFQUFFLENBQUM7UUFFL0MsNERBQTREO1FBQ3JELFNBQUksR0FBeUMsRUFBRSxDQUFDO1FBT25ELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxvQ0FBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUNBQVEsR0FBZixVQUFnQixRQUFtQjtRQUFuQyxpQkEyQ0M7UUExQ0csRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxrQ0FBZSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxvQ0FBZ0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pGLGFBQWEsRUFBRSxVQUFVO2FBQzVCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxJQUFJLE1BQU0sR0FBc0IsRUFBRSxDQUFDO1FBRW5DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQixDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxzQ0FBaUIsRUFBRSxDQUFDO1FBRXRDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDdkQsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxtQkFBbUI7Z0JBQ2xELEtBQUksQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0UsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztnQkFDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxpQkFBaUI7Z0JBQzlDLEtBQUksQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU8sd0RBQStCLEdBQXZDLFVBQXdDLE9BQTBCLEVBQUUsU0FBK0IsRUFBRSxNQUF5QjtRQUE5SCxpQkFtQkM7UUFsQkcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDZixLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxrQ0FBZSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLG9DQUFnQixDQUFDLFFBQVEsRUFBRTtnQkFDeEYsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZO2dCQUNsQyxJQUFJLEVBQUUsT0FBTyxPQUFPLENBQUMsYUFBYTtnQkFDbEMsWUFBWSxFQUFFLE9BQU87YUFDeEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFTyw4Q0FBcUIsR0FBN0IsVUFBOEIsS0FBZ0IsRUFBRSxTQUErQixFQUFFLE1BQXlCO1FBQ3RHLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHNEQUE2QixHQUFyQyxVQUFzQyxPQUEwQixFQUFFLFNBQTRCLEVBQUUsTUFBeUI7UUFDckgsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksa0NBQWUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQy9GLENBQUM7SUFDTCxDQUFDO0lBRU8saUNBQVEsR0FBaEIsVUFBaUIsUUFBbUI7UUFDaEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV4QyxnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLDhDQUE4QztRQUM5QyxRQUFRO1FBQ1IsSUFBSTtRQUVKLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FoSUEsQUFnSUMsSUFBQTtBQWhJWSxzQkFBYyxpQkFnSTFCLENBQUEiLCJmaWxlIjoic3JjL3ZhbGlkYXRpb24tcnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udGV4dCB9IGZyb20gXCIuL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tIFwiLi9yZXN1bHRzL3ZhbGlkYXRpb24tZXJyb3JcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tIFwiLi92YWxpZGF0b3JzL3Byb3BlcnR5LXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZU1hbmFnZXIgfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24vbGFuZ3VhZ2UtbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JPcHRpb25zIH0gZnJvbSBcIi4vdmFsaWRhdG9yLW9wdGlvbnNcIjtcclxuXHJcbi8qKiBEZWZpbmVzIGEgcnVsZSBhc3NvY2lhdGVkIHdpdGggYSBwcm9wZXJ0eSB3aGljaCBjYW4gaGF2ZSBtdWx0aXBsZSB2YWxpZGF0b3JzLiAqL1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblJ1bGU8VEluc3RhbmNlLCBUUHJvcGVydHk+IHtcclxuXHJcbiAgICAvKiogQ29sbGVjdGlvbiB2YWxpZGF0b3JzIHRvIGFwcGx5LiAqL1xyXG4gICAgcHVibGljIGNvbGxlY3Rpb25WYWxpZGF0b3JzOiBWYWxpZGF0b3I8YW55PltdID0gW107XHJcblxyXG4gICAgLyoqIFByb3BlcnR5IG5hbWUuICovXHJcbiAgICBwdWJsaWMgcHJvcGVydHlOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIFByb3BlcnR5IG5hbWUgdG8gZGlzcGxheSBpbiBlcnJvciBtZXNzYWdlLiAqL1xyXG4gICAgcHVibGljIHByb3BlcnR5RGlzcGxheU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKiogUHJvcGVydHkgdmFsaWRhdG9ycyB0byBhcHBseS4gKi9cclxuICAgIHB1YmxpYyBwcm9wZXJ0eVZhbGlkYXRvcnM6IFByb3BlcnR5VmFsaWRhdG9yW10gPSBbXTtcclxuXHJcbiAgICAvKiogQ3VzdG9tIHZhbGlkYXRvcnMgdG8gYXBwbHkuICovXHJcbiAgICBwdWJsaWMgdmFsaWRhdG9yczogVmFsaWRhdG9yPFRQcm9wZXJ0eT5bXSA9IFtdO1xyXG5cclxuICAgIC8qKiBDb25kaXRpb25zIHRoYXQgY29udHJvbCB3aGVuIHRoZSBydWxlIHNob3VsZCBleGVjdXRlLiAqL1xyXG4gICAgcHVibGljIHdoZW46IHsgKGluc3RhbmNlOiBUSW5zdGFuY2UpOiBib29sZWFuIH1bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFZhbGlkYXRpb25SdWxlIGNsYXNzLlxyXG4gICAgICogQHBhcmFtIG5hbWUgUHJvcGVydHkgbmFtZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eURpc3BsYXlOYW1lID0gVmFsaWRhdG9yT3B0aW9ucy5wcm9wZXJ0eU5hbWVSZXNvbHZlcihuYW1lKTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtcyB2YWxpZGF0aW9uIHVzaW5nIGFuIG9iamVjdCBpbnN0YW5jZSBhbmQgcmV0dXJucyBhIGNvbGxlY3Rpb24gb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIG9iamVjdCB0byB2YWxpZGF0ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbGlkYXRlKGluc3RhbmNlOiBUSW5zdGFuY2UpOiBWYWxpZGF0aW9uRXJyb3JbXSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgTGFuZ3VhZ2VNYW5hZ2VyLmdldExvY2FsaXplZE1lc3NhZ2UoXCJhcmd1bWVudE51bGxcIiwgVmFsaWRhdG9yT3B0aW9ucy5sYW5ndWFnZSwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTmFtZTogXCJpbnN0YW5jZVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVycm9yczogVmFsaWRhdGlvbkVycm9yW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMud2hlbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndoZW4uc29tZSh4ID0+ICF4KGluc3RhbmNlKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICB2YXIgY29udGV4dCA9IG5ldyBWYWxpZGF0aW9uQ29udGV4dCgpO1xyXG5cclxuICAgICAgICBjb250ZXh0Lmluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICAgICAgY29udGV4dC5wcm9wZXJ0eURpc3BsYXlOYW1lID0gdGhpcy5wcm9wZXJ0eURpc3BsYXlOYW1lO1xyXG4gICAgICAgIGNvbnRleHQucHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgY29udGV4dC5wcm9wZXJ0eVZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb25WYWxpZGF0b3JzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uVmFsaWRhdG9ycy5mb3JFYWNoKChjb2xsZWN0aW9uVmFsaWRhdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlV2l0aENvbGxlY3Rpb25WYWxpZGF0b3IoY29udGV4dCwgY29sbGVjdGlvblZhbGlkYXRvciwgZXJyb3JzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3JzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVdpdGhWYWxpZGF0b3IoY29udGV4dC5wcm9wZXJ0eVZhbHVlLCB2YWxpZGF0b3IsIGVycm9ycyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHlWYWxpZGF0b3JzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbGlkYXRvcnMuZm9yRWFjaCgocHJvcGVydHlWYWxpZGF0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVXaXRoUHJvcGVydHlWYWxpZGF0b3IoY29udGV4dCwgcHJvcGVydHlWYWxpZGF0b3IsIGVycm9ycyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlV2l0aENvbGxlY3Rpb25WYWxpZGF0b3IoY29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQsIHZhbGlkYXRvcjogVmFsaWRhdG9yPFRQcm9wZXJ0eT4sIGVycm9yczogVmFsaWRhdGlvbkVycm9yW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoY29udGV4dC5wcm9wZXJ0eVZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQucHJvcGVydHlWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQucHJvcGVydHlWYWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVdpdGhWYWxpZGF0b3IoaXRlbSwgdmFsaWRhdG9yLCBlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IExhbmd1YWdlTWFuYWdlci5nZXRMb2NhbGl6ZWRNZXNzYWdlKFwiaW52YWxpZFByb3BlcnR5VHlwZVwiLCBWYWxpZGF0b3JPcHRpb25zLmxhbmd1YWdlLCB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IGNvbnRleHQucHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZW9mIGNvbnRleHQucHJvcGVydHlWYWx1ZSxcclxuICAgICAgICAgICAgICAgIGV4cGVjdGVkVHlwZTogXCJBcnJheVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlV2l0aFZhbGlkYXRvcih2YWx1ZTogVFByb3BlcnR5LCB2YWxpZGF0b3I6IFZhbGlkYXRvcjxUUHJvcGVydHk+LCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvci52YWxpZGF0ZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIHJlc3VsdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVXaXRoUHJvcGVydHlWYWxpZGF0b3IoY29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQsIHZhbGlkYXRvcjogUHJvcGVydHlWYWxpZGF0b3IsIGVycm9yczogVmFsaWRhdGlvbkVycm9yW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXZhbGlkYXRvci5pc1ZhbGlkKGNvbnRleHQpKSB7XHJcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKG5ldyBWYWxpZGF0aW9uRXJyb3IodmFsaWRhdG9yLmdldEVycm9yTWVzc2FnZShjb250ZXh0KSwgY29udGV4dC5wcm9wZXJ0eU5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZShpbnN0YW5jZTogVEluc3RhbmNlKTogVFByb3BlcnR5IHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBpbnN0YW5jZVt0aGlzLnByb3BlcnR5TmFtZV07XHJcblxyXG4gICAgICAgIC8vIGlmICh3aW5kb3cpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHdpbmRvd1tcImtvXCJdKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZSA9IHdpbmRvd1tcImtvXCJdLnVud3JhcCh2YWx1ZSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==
