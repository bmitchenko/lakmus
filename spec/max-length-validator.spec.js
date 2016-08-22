"use strict";
var max_length_validator_1 = require("../src/validators/max-length.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Max length validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new max_length_validator_1.MaxLengthValidator(5));
tester.test(description, [
    { value: null, pass: true },
    { value: "value", pass: true },
    { value: "csharp", pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWxlbmd0aC12YWxpZGF0b3Iuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1heC1sZW5ndGgtdmFsaWRhdG9yLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUFtQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQzVFLDBDQUFtRSw2QkFBNkIsQ0FBQyxDQUFBO0FBRWpHLElBQUksV0FBVyxHQUFHLDRCQUE0QixDQUFDO0FBRS9DLElBQUksTUFBTSxHQUFHLElBQUksbURBQXVCLENBQUMsSUFBSSx5Q0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzlCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0NBQ25DLENBQUMsQ0FBQyJ9