"use strict";
var null_validator_1 = require("../src/validators/null.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Null validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new null_validator_1.NullValidator());
tester.test(description, [
    { value: null, pass: true },
    { value: undefined, pass: true },
    { value: 0, pass: false },
    { value: "   ", pass: false },
    { value: [], pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVsbC12YWxpZGF0b3Iuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm51bGwtdmFsaWRhdG9yLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtCQUE4QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2pFLDBDQUFtRSw2QkFBNkIsQ0FBQyxDQUFBO0FBRWpHLElBQUksV0FBVyxHQUFHLHNCQUFzQixDQUFDO0FBRXpDLElBQUksTUFBTSxHQUFHLElBQUksbURBQXVCLENBQUMsSUFBSSw4QkFBYSxFQUFFLENBQUMsQ0FBQztBQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNoQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUN6QixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM3QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUM3QixDQUFDLENBQUMifQ==