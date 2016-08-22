"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var ExactLengthValidator = (function (_super) {
    __extends(ExactLengthValidator, _super);
    function ExactLengthValidator(exactLength, errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "exactLength";
        this.exactLength = exactLength;
    }
    ExactLengthValidator.prototype.isValid = function (context) {
        var value = context.propertyValue;
        if (value === null || value === undefined) {
            return true;
        }
        if (typeof value == "string") {
            return value.length == this.exactLength;
        }
        return false;
    };
    return ExactLengthValidator;
}(property_validator_1.PropertyValidator));
exports.ExactLengthValidator = ExactLengthValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhY3QtbGVuZ3RoLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4YWN0LWxlbmd0aC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWtDLHNCQUFzQixDQUFDLENBQUE7QUFHekQ7SUFBMEMsd0NBQWlCO0lBR3ZELDhCQUFZLFdBQW1CLEVBQUUsWUFBcUI7UUFDbEQsa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUM3QixDQUFDO0lBRU0sc0NBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUF1QixDQUFDO1FBRTVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVDLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUF2QkQsQ0FBMEMsc0NBQWlCLEdBdUIxRDtBQXZCWSw0QkFBb0IsdUJBdUJoQyxDQUFBIn0=