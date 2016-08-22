"use strict";
var greater_than_validator_1 = require("../src/validators/greater-than.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Greater than validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new greater_than_validator_1.GreaterThanValidator(100));
tester.test(description, [
    { value: null, pass: true },
    { value: 120, pass: true },
    { value: 100, pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlYXRlci10aGFuLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JlYXRlci10aGFuLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1Q0FBcUMsMENBQTBDLENBQUMsQ0FBQTtBQUNoRiwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRyw4QkFBOEIsQ0FBQztBQUVqRCxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksNkNBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUM5QixDQUFDLENBQUMifQ==