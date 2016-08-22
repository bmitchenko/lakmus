"use strict";
var credit_card_validator_1 = require("../src/validators/credit-card.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Credit card validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new credit_card_validator_1.CreditCardValidator());
tester.test(description, [
    { value: "349807947812143", valueDescription: "America Express", pass: true },
    { value: "5508300312526239", valueDescription: "MasterCard", pass: true },
    { value: "4532553848546203", valueDescription: "Visa", pass: true },
    { value: "4532-5538-4854-6203", valueDescription: "Visa with dashes", pass: true },
    { value: "4532 5538 4854 6203", valueDescription: "Visa with spaces", pass: true },
    { value: "1234", valueDescription: "incorrect length", pass: false },
    { value: "1234-5678-9012-3456", valueDescription: "incorrect Luhn checksum", pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQtdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVkaXQtY2FyZC12YWxpZGF0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9DLHlDQUF5QyxDQUFDLENBQUE7QUFDOUUsMENBQW1FLDZCQUE2QixDQUFDLENBQUE7QUFFakcsSUFBSSxXQUFXLEdBQUcsNkJBQTZCLENBQUM7QUFFaEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLDJDQUFtQixFQUFFLENBQUMsQ0FBQztBQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzdFLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ3pFLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ25FLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDbEYsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNsRixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUNwRSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0NBQzdGLENBQUMsQ0FBQyJ9