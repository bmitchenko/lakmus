"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var NotNullValidator = (function (_super) {
    __extends(NotNullValidator, _super);
    function NotNullValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "notNull";
    }
    NotNullValidator.prototype.isValid = function (context) {
        return context.propertyValue !== null && context.propertyValue !== undefined;
    };
    return NotNullValidator;
}(property_validator_1.PropertyValidator));
exports.NotNullValidator = NotNullValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL25vdC1udWxsLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUd6RDtJQUFzQyxvQ0FBaUI7SUFDbkQsMEJBQVksWUFBcUI7UUFDN0Isa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsYUFBYSxLQUFLLFNBQVMsQ0FBQztJQUNqRixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWcUMsc0NBQWlCLEdBVXREO0FBVlksd0JBQWdCLG1CQVU1QixDQUFBIiwiZmlsZSI6InNyYy92YWxpZGF0b3JzL25vdC1udWxsLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSBcIi4vcHJvcGVydHktdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdE51bGxWYWxpZGF0b3IgZXh0ZW5kcyBQcm9wZXJ0eVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlTmFtZSA9IFwibm90TnVsbFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKGNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJvcGVydHlWYWx1ZSAhPT0gbnVsbCAmJiBjb250ZXh0LnByb3BlcnR5VmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxufSJdfQ==
