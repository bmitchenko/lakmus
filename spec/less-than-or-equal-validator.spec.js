"use strict";
var less_than_or_equal_validator_1 = require("../src/validators/less-than-or-equal.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Less than or equal validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new less_than_or_equal_validator_1.LessThanOrEqualValidator(100));
tester.test(description, [
    { value: null, pass: true },
    { value: 100, pass: true },
    { value: 90, pass: true },
    { value: 110, pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVzcy10aGFuLW9yLWVxdWFsLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVzcy10aGFuLW9yLWVxdWFsLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBeUMsZ0RBQWdELENBQUMsQ0FBQTtBQUMxRiwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRyxvQ0FBb0MsQ0FBQztBQUV2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksdURBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN6QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUM5QixDQUFDLENBQUMifQ==