"use strict";
var greater_than_or_equal_validator_1 = require("../src/validators/greater-than-or-equal.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Greater than or equal validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new greater_than_or_equal_validator_1.GreaterThanOrEqualValidator(100));
tester.test(description, [
    { value: null, pass: true },
    { value: 100, pass: true },
    { value: 120, pass: true },
    { value: 99, pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlYXRlci10aGFuLW9yLWVxdWFsLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlYXRlci10aGFuLW9yLWVxdWFsLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnREFBNEMsbURBQW1ELENBQUMsQ0FBQTtBQUNoRywwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRyx1Q0FBdUMsQ0FBQztBQUUxRCxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksNkRBQTJCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUM3QixDQUFDLENBQUMifQ==