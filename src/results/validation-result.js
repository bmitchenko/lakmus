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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZXN1bHRzL3ZhbGlkYXRpb24tcmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSx5Q0FBeUM7QUFDekM7SUFBQTtRQUVJLDhCQUE4QjtRQUN2QixXQUFNLEdBQXNCLEVBQUUsQ0FBQztJQU0xQyxDQUFDO0lBSEcsc0JBQVcscUNBQU87UUFEbEIsb0NBQW9DO2FBQ3BDO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNMLHVCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3QkFBZ0IsbUJBUzVCLENBQUEiLCJmaWxlIjoic3JjL3Jlc3VsdHMvdmFsaWRhdGlvbi1yZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tIFwiLi92YWxpZGF0aW9uLWVycm9yXCI7XHJcblxyXG4vKiogVGhlIHJlc3VsdCBvZiBydW5uaW5nIGEgdmFsaWRhdG9yLiAqL1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblJlc3VsdCB7XHJcbiAgICBcclxuICAgIC8qKiBBIGNvbGxlY3Rpb24gb2YgZXJyb3JzLiAqL1xyXG4gICAgcHVibGljIGVycm9yczogVmFsaWRhdGlvbkVycm9yW10gPSBbXTtcclxuXHJcbiAgICAvKiogV2hldGhlciB2YWxpZGF0aW9uIHN1Y2NlZWRlZC4gKi9cclxuICAgIHB1YmxpYyBnZXQgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcbn0iXX0=
