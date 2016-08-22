"use strict";
var exact_length_validator_1 = require("../src/validators/exact-length.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Exact length validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new exact_length_validator_1.ExactLengthValidator(0));
tester.test(description, [
    { value: "", pass: true },
    { value: undefined, pass: true },
    { value: "value", pass: false },
    { value: 0, pass: false }
]);
tester = new property_validator_tester_1.PropertyValidatorTester(new exact_length_validator_1.ExactLengthValidator(5));
tester.test(description, [
    { value: "value", pass: true },
    { value: "value+2", pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhY3QtbGVuZ3RoLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhhY3QtbGVuZ3RoLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1Q0FBcUMsMENBQTBDLENBQUMsQ0FBQTtBQUNoRiwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRyw4QkFBOEIsQ0FBQztBQUVqRCxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksNkNBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN6QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUNoQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUMvQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUM1QixDQUFDLENBQUM7QUFFSCxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLDZDQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7SUFDckIsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDOUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Q0FDcEMsQ0FBQyxDQUFDIn0=