"use strict";
var phone_validator_1 = require("../src/validators/phone.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Phone validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new phone_validator_1.PhoneValidator());
tester.test(description, [
    { value: null, pass: true },
    { value: "+1 800-642-7676", pass: true },
    { value: "800-642-7676", pass: true },
    { value: "8 123 4567890", pass: true },
    { value: "+7 123 4567890", pass: true },
    { value: "+7 (123) 456-78-90", pass: true },
    { value: "+7 (1234) 56-78-90", pass: true },
    { value: "+7 (12345) 6-78-90", pass: true },
    { value: "71234567890", pass: true }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaG9uZS12YWxpZGF0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsMENBQW1FLDZCQUE2QixDQUFDLENBQUE7QUFFakcsSUFBSSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFFMUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLGdDQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDeEMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDckMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDdEMsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN2QyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNDLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0MsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUN2QyxDQUFDLENBQUMifQ==