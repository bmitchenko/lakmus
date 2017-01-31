"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var EqualValidator = (function (_super) {
    __extends(EqualValidator, _super);
    function EqualValidator(comparisonValue, errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "equal";
        this.comparisonValue = comparisonValue;
    }
    EqualValidator.prototype.isValid = function (context) {
        if (this.comparisonValue instanceof Date && context.propertyValue instanceof Date) {
            return this.comparisonValue.getTime() == context.propertyValue.getTime();
        }
        return this.comparisonValue === context.propertyValue;
    };
    return EqualValidator;
}(property_validator_1.PropertyValidator));
exports.EqualValidator = EqualValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2VxdWFsLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUd6RDtJQUFvQyxrQ0FBaUI7SUFHakQsd0JBQVksZUFBb0IsRUFBRSxZQUFxQjtRQUNuRCxrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDO1FBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsWUFBWSxJQUFJLElBQUksT0FBTyxDQUFDLGFBQWEsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0UsQ0FBQztRQUVQLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDcEQsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsQ0FqQm1DLHNDQUFpQixHQWlCcEQ7QUFqQlksc0JBQWMsaUJBaUIxQixDQUFBIiwiZmlsZSI6InNyYy92YWxpZGF0b3JzL2VxdWFsLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSBcIi4vcHJvcGVydHktdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVxdWFsVmFsaWRhdG9yIGV4dGVuZHMgUHJvcGVydHlWYWxpZGF0b3Ige1xyXG5cdHB1YmxpYyBjb21wYXJpc29uVmFsdWU6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wYXJpc29uVmFsdWU6IGFueSwgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZU5hbWUgPSBcImVxdWFsXCI7XHJcblx0XHR0aGlzLmNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmlzb25WYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZChjb250ZXh0OiBWYWxpZGF0aW9uQ29udGV4dCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBhcmlzb25WYWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgY29udGV4dC5wcm9wZXJ0eVZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uVmFsdWUuZ2V0VGltZSgpID09IGNvbnRleHQucHJvcGVydHlWYWx1ZS5nZXRUaW1lKCk7IFxyXG4gICAgICAgIH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wYXJpc29uVmFsdWUgPT09IGNvbnRleHQucHJvcGVydHlWYWx1ZTtcclxuICAgIH1cclxufSJdfQ==
