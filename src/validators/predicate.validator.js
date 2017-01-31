"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var PredicateValidator = (function (_super) {
    __extends(PredicateValidator, _super);
    function PredicateValidator(predicate, errorMessage) {
        _super.call(this, errorMessage);
        this.predicate = predicate;
        this.errorMessageResourceName = "predicate";
    }
    PredicateValidator.prototype.isValid = function (context) {
        return this.predicate(context.propertyValue, context.instance);
    };
    return PredicateValidator;
}(property_validator_1.PropertyValidator));
exports.PredicateValidator = PredicateValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL3ByZWRpY2F0ZS52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQ7SUFBd0Msc0NBQWlCO0lBR3JELDRCQUFZLFNBQWtELEVBQUUsWUFBcUI7UUFDakYsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztJQUNoRCxDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDTCx5QkFBQztBQUFELENBYkEsQUFhQyxDQWJ1QyxzQ0FBaUIsR0FheEQ7QUFiWSwwQkFBa0IscUJBYTlCLENBQUEiLCJmaWxlIjoic3JjL3ZhbGlkYXRvcnMvcHJlZGljYXRlLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSBcIi4vcHJvcGVydHktdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByZWRpY2F0ZVZhbGlkYXRvciBleHRlbmRzIFByb3BlcnR5VmFsaWRhdG9yIHtcclxuICAgIHB1YmxpYyBwcmVkaWNhdGU6ICh2YWx1ZTogYW55LCBpbnN0YW5jZT86IGFueSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwcmVkaWNhdGU6ICh2YWx1ZTogYW55LCBpbnN0YW5jZT86IGFueSkgPT4gYm9vbGVhbiwgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZU5hbWUgPSBcInByZWRpY2F0ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKGNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZGljYXRlKGNvbnRleHQucHJvcGVydHlWYWx1ZSwgY29udGV4dC5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbn0iXX0=
