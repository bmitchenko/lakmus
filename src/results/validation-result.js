"use strict";
/** The result of running a validator. */
var ValidationResult = (function () {
    function ValidationResult() {
        /** A collection of errors. */
        this.errors = [];
    }
    Object.defineProperty(ValidationResult.prototype, "isValid", {
        /** Whether validation succeeded. */
        get: function () {
            return this.errors.length == 0;
        },
        enumerable: true,
        configurable: true
    });
    return ValidationResult;
}());
exports.ValidationResult = ValidationResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1yZXN1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWxpZGF0aW9uLXJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEseUNBQXlDO0FBQ3pDO0lBQUE7UUFFSSw4QkFBOEI7UUFDdkIsV0FBTSxHQUFzQixFQUFFLENBQUM7SUFNMUMsQ0FBQztJQUhHLHNCQUFXLHFDQUFPO1FBRGxCLG9DQUFvQzthQUNwQztZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFDTCx1QkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksd0JBQWdCLG1CQVM1QixDQUFBIn0=