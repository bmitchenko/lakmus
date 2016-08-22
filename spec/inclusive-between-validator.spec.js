"use strict";
var inclusive_between_validator_1 = require("../src/validators/inclusive-between.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Inclusive between validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new inclusive_between_validator_1.InclusiveBetweenValidator(50, 100));
tester.test(description, [
    { value: null, pass: true },
    { value: 50, pass: true },
    { value: 100, pass: true },
    { value: 110, pass: false },
    { value: 40, pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVzaXZlLWJldHdlZW4tdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmNsdXNpdmUtYmV0d2Vlbi12YWxpZGF0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTBDLCtDQUErQyxDQUFDLENBQUE7QUFDMUYsMENBQW1FLDZCQUE2QixDQUFDLENBQUE7QUFFakcsSUFBSSxXQUFXLEdBQUcsbUNBQW1DLENBQUM7QUFFdEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLHVEQUF5QixDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ3pCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0NBQzdCLENBQUMsQ0FBQyJ9