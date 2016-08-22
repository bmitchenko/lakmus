"use strict";
var empty_validator_1 = require("../src/validators/empty.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Empty validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new empty_validator_1.EmptyValidator());
tester.test(description, [
    { value: null, pass: true },
    { value: undefined, pass: true },
    { value: 0, pass: true },
    { value: 1, pass: false },
    { value: new Date(), pass: false },
    { value: "   ", valueDescription: "empty string", pass: true },
    { value: "text", pass: false },
    { value: true, pass: false },
    { value: false, pass: true },
    { value: [], valueDescription: "empty array", pass: true },
    { value: [1], pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbXB0eS12YWxpZGF0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsMENBQW1FLDZCQUE2QixDQUFDLENBQUE7QUFFakcsSUFBSSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFFMUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLGdDQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ2hDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ3hCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ3pCLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUNsQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDOUQsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDOUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDNUIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDNUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFELEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUM5QixDQUFDLENBQUMifQ==