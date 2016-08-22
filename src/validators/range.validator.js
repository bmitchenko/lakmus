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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFuZ2UudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBR3pEO0lBQTZDLGtDQUFpQjtJQUsxRCx3QkFBWSxHQUFZLEVBQUUsR0FBWSxFQUFFLFNBQWdCLEVBQUUsWUFBcUI7UUFBdkMseUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNwRCxrQkFBTSxZQUFZLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxPQUEwQjtRQUNyQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBdUIsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXBERCxDQUE2QyxzQ0FBaUIsR0FvRDdEO0FBcERxQixzQkFBYyxpQkFvRG5DLENBQUEifQ==