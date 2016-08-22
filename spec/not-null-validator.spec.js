"use strict";
var not_null_validator_1 = require("../src/validators/not-null.validator");
var property_validator_tester_1 = require("./property-validator-tester");
var description = "Not null validator spec.";
var tester = new property_validator_tester_1.PropertyValidatorTester(new not_null_validator_1.NotNullValidator());
tester.test(description, [
    { value: null, pass: false },
    { value: undefined, pass: false },
    { value: 0, pass: true },
    { value: "   ", pass: true },
    { value: [], pass: true }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LW51bGwtdmFsaWRhdG9yLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3QtbnVsbC12YWxpZGF0b3Iuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUNBQWlDLHNDQUFzQyxDQUFDLENBQUE7QUFDeEUsMENBQW1FLDZCQUE2QixDQUFDLENBQUE7QUFFakcsSUFBSSxXQUFXLEdBQUcsMEJBQTBCLENBQUM7QUFFN0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxtREFBdUIsQ0FBQyxJQUFJLHFDQUFnQixFQUFFLENBQUMsQ0FBQztBQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNyQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUNqQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUN4QixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtDQUM1QixDQUFDLENBQUMifQ==