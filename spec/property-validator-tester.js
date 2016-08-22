"use strict";
var validation_context_1 = require("../src/validation-context");
var PropertyValidatorTester = (function () {
    function PropertyValidatorTester(validator) {
        this.validator = validator;
    }
    PropertyValidatorTester.prototype.test = function (description, testCases) {
        var _this = this;
        describe(description, function () {
            testCases.forEach(function (testCase) {
                var validationContext = new validation_context_1.ValidationContext();
                validationContext.propertyValue = testCase.value;
                it(_this.getExpectation(testCase), function () {
                    expect(_this.validator.isValid(validationContext)).toBe(testCase.pass);
                });
            });
        });
    };
    PropertyValidatorTester.prototype.valueToString = function (value) {
        if (value === undefined) {
            return "undefined";
        }
        if (value === null) {
            return "null";
        }
        return value.toString();
    };
    PropertyValidatorTester.prototype.getExpectation = function (testCase) {
        var valueText = "'" + this.valueToString(testCase.value) + "'";
        if (testCase.valueDescription) {
            valueText += " (" + testCase.valueDescription + ")";
        }
        return "When value is " + valueText + " validator should " + (testCase.pass ? "pass" : "fail") + ".";
    };
    return PropertyValidatorTester;
}());
exports.PropertyValidatorTester = PropertyValidatorTester;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdmFsaWRhdG9yLXRlc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3BlcnR5LXZhbGlkYXRvci10ZXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1DQUFrQywyQkFBMkIsQ0FBQyxDQUFBO0FBRTlEO0lBR0ksaUNBQVksU0FBNEI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLHNDQUFJLEdBQVgsVUFBWSxXQUFtQixFQUFFLFNBQXNDO1FBQXZFLGlCQVdDO1FBVkcsUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUNsQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDdkIsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHNDQUFpQixFQUFFLENBQUM7Z0JBQ2hELGlCQUFpQixDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUVqRCxFQUFFLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDOUIsTUFBTSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxRSxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sK0NBQWEsR0FBckIsVUFBc0IsS0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxnREFBYyxHQUF0QixVQUF1QixRQUFtQztRQUN0RCxJQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRS9ELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDNUIsU0FBUyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQ3hELENBQUM7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxHQUFHLG9CQUFvQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3pHLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksK0JBQXVCLDBCQXlDbkMsQ0FBQSJ9