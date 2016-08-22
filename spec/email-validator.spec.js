"use strict";
var email_validator_1 = require("../src/validators/email.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Email validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new email_validator_1.EmailValidator());
tester.test(description, [
    { value: "user.name123@outlook.com", valueDescription: "well-formed email address", pass: true },
    { value: "пользователь@почта.ру", valueDescription: "well-formed cyrillic email address", pass: true },
    { value: "usernameoutlook.com", valueDescription: "no '@'", pass: false },
    { value: "username@outlookcom", valueDescription: "invalid host", pass: false },
    { value: null, valueDescription: "null", pass: true },
    { value: "", valueDescription: "empty string", pass: false },
    { value: 12345, valueDescription: "number", pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbWFpbC12YWxpZGF0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsMENBQW1FLDZCQUE2QixDQUFDLENBQUE7QUFFakcsSUFBSSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFFMUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLGdDQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLDBCQUEwQixFQUFFLGdCQUFnQixFQUFFLDJCQUEyQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDaEcsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN0RyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUN6RSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUMvRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDckQsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzVELEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUM1RCxDQUFDLENBQUMifQ==