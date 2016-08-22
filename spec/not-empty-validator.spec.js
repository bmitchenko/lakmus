"use strict";
var not_empty_validator_1 = require("../src/validators/not-empty.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Not empty validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new not_empty_validator_1.NotEmptyValidator());
tester.test(description, [
    { value: null, pass: false },
    { value: undefined, pass: false },
    { value: 0, pass: false },
    { value: 1, pass: true },
    { value: new Date(), pass: true },
    { value: "   ", valueDescription: "empty string", pass: false },
    { value: "text", pass: true },
    { value: true, pass: true },
    { value: false, pass: false },
    { value: [], valueDescription: "empty array", pass: false },
    { value: [1], pass: true }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVtcHR5LXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90LWVtcHR5LXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBa0MsdUNBQXVDLENBQUMsQ0FBQTtBQUMxRSwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksdUNBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ2pDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ3pCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ3hCLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNqQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0QsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDN0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDN0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzNELEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUM3QixDQUFDLENBQUMifQ==