"use strict";
var uri_validator_1 = require("../src/validators/uri.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Regular expression validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new uri_validator_1.UriValidator());
tester.test(description, [
    { value: null, pass: true },
    { value: "http://google.com", pass: true },
    { value: "http://россия.рф", pass: true },
    { value: "google.com", pass: false },
    { value: "google", pass: false },
    { value: 500, pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJpLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXJpLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4QkFBNkIsaUNBQWlDLENBQUMsQ0FBQTtBQUMvRCwwQ0FBbUUsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRyxJQUFJLFdBQVcsR0FBRyxvQ0FBb0MsQ0FBQztBQUV2RCxJQUFJLE1BQU0sR0FBRyxJQUFJLG1EQUF1QixDQUFDLElBQUksNEJBQVksRUFBRSxDQUFDLENBQUM7QUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7SUFDckIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ3pDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ3BDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ2hDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0NBQzlCLENBQUMsQ0FBQyJ9