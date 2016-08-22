"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var utils_1 = require("../utils");
var CreditCardValidator = (function (_super) {
    __extends(CreditCardValidator, _super);
    function CreditCardValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "creditCard";
    }
    CreditCardValidator.prototype.luhnCheck = function (cardNumber) {
        // https://gist.github.com/DiegoSalazar/4075533
        if (/[^0-9-\s]+/.test(cardNumber))
            return false;
        var nCheck = 0, nDigit = 0, bEven = false;
        cardNumber = cardNumber.replace(/\D/g, "");
        for (var n = cardNumber.length - 1; n >= 0; n--) {
            var cDigit = cardNumber.charAt(n), nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9)
                    nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
    };
    CreditCardValidator.prototype.isValid = function (context) {
        var cardNumber = context.propertyValue;
        if (cardNumber == undefined) {
            return true;
        }
        if (typeof cardNumber != "string") {
            return false;
        }
        cardNumber = cardNumber.replace(/-+/g, "");
        cardNumber = cardNumber.replace(/\s+/g, "");
        if (cardNumber.length == 0 || utils_1.countDigits(cardNumber) != cardNumber.length) {
            return false;
        }
        if (cardNumber.length < 12 || cardNumber.length > 19) {
            return false;
        }
        return this.luhnCheck(cardNumber);
    };
    return CreditCardValidator;
}(property_validator_1.PropertyValidator));
exports.CreditCardValidator = CreditCardValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlZGl0LWNhcmQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRXpELHNCQUE0QixVQUFVLENBQUMsQ0FBQTtBQUV2QztJQUF5Qyx1Q0FBaUI7SUFDdEQsNkJBQVksWUFBcUI7UUFDN0Isa0JBQU0sWUFBWSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFlBQVksQ0FBQztJQUNqRCxDQUFDO0lBRU8sdUNBQVMsR0FBakIsVUFBa0IsVUFBa0I7UUFDaEMsK0NBQStDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRWhELElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDMUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUM3QixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxNQUFNLElBQUksTUFBTSxDQUFDO1lBQ2pCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNuQixDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLE9BQTBCO1FBQ3JDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUF1QixDQUFDO1FBRWpELEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBVSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxtQkFBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBckRELENBQXlDLHNDQUFpQixHQXFEekQ7QUFyRFksMkJBQW1CLHNCQXFEL0IsQ0FBQSJ9