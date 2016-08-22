"use strict";
var min_length_validator_1 = require("../src/validators/min-length.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Min length validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new min_length_validator_1.MinLengthValidator(5));
tester.test(description, [
    { value: null, pass: true },
    { value: "value", pass: true },
    { value: "text", pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLWxlbmd0aC12YWxpZGF0b3Iuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pbi1sZW5ndGgtdmFsaWRhdG9yLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUFtQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQzVFLDBDQUFtRSw2QkFBNkIsQ0FBQyxDQUFBO0FBRWpHLElBQUksV0FBVyxHQUFHLDRCQUE0QixDQUFDO0FBRS9DLElBQUksTUFBTSxHQUFHLElBQUksbURBQXVCLENBQUMsSUFBSSx5Q0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0NBQ2pDLENBQUMsQ0FBQyJ9