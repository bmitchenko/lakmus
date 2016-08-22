import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";
import { countDigits } from "../utils";

export class CreditCardValidator extends PropertyValidator {
    constructor(errorMessage?: string) {
        super(errorMessage);

        this.errorMessageResourceName = "creditCard";
    }

    private luhnCheck(cardNumber: string): boolean {
        // https://gist.github.com/DiegoSalazar/4075533
        if (/[^0-9-\s]+/.test(cardNumber)) return false;

        var nCheck = 0, nDigit = 0, bEven = false;
        cardNumber = cardNumber.replace(/\D/g, "");

        for (var n = cardNumber.length - 1; n >= 0; n--) {
            var cDigit = cardNumber.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
    }

    public isValid(context: ValidationContext): boolean {
        var cardNumber = context.propertyValue as string;

        if (cardNumber == undefined) {
            return true;
        }

        if (typeof cardNumber != "string") {
            return false;
        }

        cardNumber = cardNumber.replace(/-+/g, "");
        cardNumber = cardNumber.replace(/\s+/g, "");

        if (cardNumber.length == 0 || countDigits(cardNumber) != cardNumber.length) {
            return false;
        }

        if (cardNumber.length < 12 || cardNumber.length > 19) {
            return false;
        }

        return this.luhnCheck(cardNumber);
    }
}