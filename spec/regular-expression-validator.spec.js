"use strict";
var regular_expression_validator_1 = require("../src/validators/regular-expression.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Regular expression validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new regular_expression_validator_1.RegularExpressionValidator(/\d/));
tester.test(description, [
    { value: null, pass: true },
    { value: "123", pass: true },
    { value: "abc", pass: false },
    { value: 123, pass: false },
    { value: false, pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVndWxhci1leHByZXNzaW9uLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVndWxhci1leHByZXNzaW9uLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBMkMsZ0RBQWdELENBQUMsQ0FBQTtBQUM1RiwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRyxvQ0FBb0MsQ0FBQztBQUV2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUkseURBQTBCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM3QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUMzQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUNoQyxDQUFDLENBQUMifQ==