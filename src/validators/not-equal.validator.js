"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var NotEqualValidator = (function (_super) {
    __extends(NotEqualValidator, _super);
    function NotEqualValidator(valueToCompare, errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "notEqual";
        this.comparisonValue = valueToCompare;
    }
    NotEqualValidator.prototype.isValid = function (context) {
        if (this.comparisonValue instanceof Date && context.propertyValue instanceof Date) {
            return this.comparisonValue.getTime() != context.propertyValue.getTime();
        }
        return this.comparisonValue !== context.propertyValue;
    };
    return NotEqualValidator;
}(property_validator_1.PropertyValidator));
exports.NotEqualValidator = NotEqualValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL25vdC1lcXVhbC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQ7SUFBdUMscUNBQWlCO0lBR3BELDJCQUFZLGNBQW1CLEVBQUUsWUFBcUI7UUFDbEQsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFVBQVUsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sbUNBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLFlBQVksSUFBSSxJQUFJLE9BQU8sQ0FBQyxhQUFhLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdFLENBQUM7UUFFUCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3BELENBQUM7SUFDTCx3QkFBQztBQUFELENBakJBLEFBaUJDLENBakJzQyxzQ0FBaUIsR0FpQnZEO0FBakJZLHlCQUFpQixvQkFpQjdCLENBQUEiLCJmaWxlIjoic3JjL3ZhbGlkYXRvcnMvbm90LWVxdWFsLnZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSBcIi4vcHJvcGVydHktdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uL3ZhbGlkYXRpb24tY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdEVxdWFsVmFsaWRhdG9yIGV4dGVuZHMgUHJvcGVydHlWYWxpZGF0b3Ige1xyXG5cdHB1YmxpYyBjb21wYXJpc29uVmFsdWU6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZVRvQ29tcGFyZTogYW55LCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZVJlc291cmNlTmFtZSA9IFwibm90RXF1YWxcIjtcclxuXHRcdHRoaXMuY29tcGFyaXNvblZhbHVlID0gdmFsdWVUb0NvbXBhcmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWQoY29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jb21wYXJpc29uVmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmIGNvbnRleHQucHJvcGVydHlWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvblZhbHVlLmdldFRpbWUoKSAhPSBjb250ZXh0LnByb3BlcnR5VmFsdWUuZ2V0VGltZSgpOyBcclxuICAgICAgICB9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcGFyaXNvblZhbHVlICE9PSBjb250ZXh0LnByb3BlcnR5VmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=
