"use strict";
var exclusive_between_validator_1 = require("../src/validators/exclusive-between.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Exclusive between validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new exclusive_between_validator_1.ExclusiveBetweenValidator(0, 100));
tester.test(description, [
    { value: null, pass: true },
    { value: 50, pass: true },
    { value: 0, pass: false },
    { value: 100, pass: false }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjbHVzaXZlLWJldHdlZW4tdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGNsdXNpdmUtYmV0d2Vlbi12YWxpZGF0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTBDLCtDQUErQyxDQUFDLENBQUE7QUFDMUYsMENBQW1FLDZCQUE2QixDQUFDLENBQUE7QUFFakcsSUFBSSxXQUFXLEdBQUcsbUNBQW1DLENBQUM7QUFFdEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLHVEQUF5QixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ3pCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQ3pCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0NBQzlCLENBQUMsQ0FBQyJ9