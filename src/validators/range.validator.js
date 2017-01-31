"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var RangeValidator = (function (_super) {
    __extends(RangeValidator, _super);
    function RangeValidator(min, max, inclusive, errorMessage) {
        if (inclusive === void 0) { inclusive = true; }
        _super.call(this, errorMessage);
        this.min = min;
        this.max = max;
        this.inclusive = inclusive;
    }
    RangeValidator.prototype.isValid = function (context) {
        var value = context.propertyValue;
        if (value == null) {
            return true;
        }
        if (typeof value == "number") {
            if (this.min != null) {
                if (this.inclusive) {
                    if (value < this.min) {
                        return false;
                    }
                }
                else {
                    if (value <= this.min) {
                        return false;
                    }
                }
            }
            if (this.max != null) {
                if (this.inclusive) {
                    if (value > this.max) {
                        return false;
                    }
                }
                else {
                    if (value >= this.max) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    };
    return RangeValidator;
}(property_validator_1.PropertyValidator));
exports.RangeValidator = RangeValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL3JhbmdlLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUd6RDtJQUE2QyxrQ0FBaUI7SUFLMUQsd0JBQVksR0FBWSxFQUFFLEdBQVksRUFBRSxTQUFnQixFQUFFLFlBQXFCO1FBQXZDLHlCQUFnQixHQUFoQixnQkFBZ0I7UUFDcEQsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsT0FBMEI7UUFDckMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQXVCLENBQUM7UUFFNUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqQixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqQixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxxQkFBQztBQUFELENBcERBLEFBb0RDLENBcEQ0QyxzQ0FBaUIsR0FvRDdEO0FBcERxQixzQkFBYyxpQkFvRG5DLENBQUEiLCJmaWxlIjoic3JjL3ZhbGlkYXRvcnMvcmFuZ2UudmFsaWRhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlWYWxpZGF0b3IgfSBmcm9tIFwiLi9wcm9wZXJ0eS12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vdmFsaWRhdGlvbi1jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmFuZ2VWYWxpZGF0b3IgZXh0ZW5kcyBQcm9wZXJ0eVZhbGlkYXRvciB7XHJcbiAgICBwcml2YXRlIGluY2x1c2l2ZTogYm9vbGVhbjtcclxuXHRwcml2YXRlIG1pbjogbnVtYmVyO1xyXG5cdHByaXZhdGUgbWF4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWluPzogbnVtYmVyLCBtYXg/OiBudW1iZXIsIGluY2x1c2l2ZSA9IHRydWUsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XHJcblxyXG5cdFx0dGhpcy5taW4gPSBtaW47XHJcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgICAgICAgdGhpcy5pbmNsdXNpdmUgPSBpbmNsdXNpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVmFsaWQoY29udGV4dDogVmFsaWRhdGlvbkNvbnRleHQpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBjb250ZXh0LnByb3BlcnR5VmFsdWUgYXMgbnVtYmVyO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5taW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5jbHVzaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy5taW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8PSB0aGlzLm1pbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5jbHVzaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5tYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLm1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==
