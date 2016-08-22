"use strict";
var less_than_validator_1 = require("../src/validators/less-than.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Less than validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new less_than_validator_1.LessThanValidator(100));
tester.test(description, [
    { value: null, pass: true },
    { value: 50, pass: true },
    { value: 100, pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVzcy10aGFuLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVzcy10aGFuLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBa0MsdUNBQXVDLENBQUMsQ0FBQTtBQUMxRSwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksdUNBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN6QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUM5QixDQUFDLENBQUMifQ==