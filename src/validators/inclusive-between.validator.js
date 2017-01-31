"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var range_validator_1 = require("./range.validator");
var InclusiveBetweenValidator = (function (_super) {
    __extends(InclusiveBetweenValidator, _super);
    function InclusiveBetweenValidator(min, max, errorMessage) {
        _super.call(this, min, max, true, errorMessage);
        this.errorMessageResourceName = "inclusiveBetween";
    }
    return InclusiveBetweenValidator;
}(range_validator_1.RangeValidator));
exports.InclusiveBetweenValidator = InclusiveBetweenValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2luY2x1c2l2ZS1iZXR3ZWVuLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUVuRDtJQUErQyw2Q0FBYztJQUN6RCxtQ0FBWSxHQUFXLEVBQUUsR0FBVyxFQUFFLFlBQXFCO1FBQ3ZELGtCQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxrQkFBa0IsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQU5BLEFBTUMsQ0FOOEMsZ0NBQWMsR0FNNUQ7QUFOWSxpQ0FBeUIsNEJBTXJDLENBQUEiLCJmaWxlIjoic3JjL3ZhbGlkYXRvcnMvaW5jbHVzaXZlLWJldHdlZW4udmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZ2VWYWxpZGF0b3IgfSBmcm9tIFwiLi9yYW5nZS52YWxpZGF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmNsdXNpdmVCZXR3ZWVuVmFsaWRhdG9yIGV4dGVuZHMgUmFuZ2VWYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtaW4sIG1heCwgdHJ1ZSwgZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZU5hbWUgPSBcImluY2x1c2l2ZUJldHdlZW5cIjtcclxuICAgIH1cclxufSJdfQ==
