"use strict";
var predicate_validator_1 = require("../src/validators/predicate.validator");
var validation_context_1 = require("../src/validation-context");
var description = "Predicate validator spec.";
var customer = {
    id: 1000,
    hasDiscount: true
};
var validator = new predicate_validator_1.PredicateValidator(function (value, instance) { return instance["hasDiscount"]; });
var validationContext = new validation_context_1.ValidationContext();
validationContext.instance = customer;
validationContext.propertyValue = customer.id;
describe(description, function () {
    it("Predicate validator should pass.", function () {
        expect(validator.isValid(validationContext)).toBe(true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljYXRlLXZhbGlkYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJlZGljYXRlLXZhbGlkYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQ0FBbUMsdUNBQXVDLENBQUMsQ0FBQTtBQUUzRSxtQ0FBa0MsMkJBQTJCLENBQUMsQ0FBQTtBQUU5RCxJQUFJLFdBQVcsR0FBRywyQkFBMkIsQ0FBQztBQUM5QyxJQUFJLFFBQVEsR0FBRztJQUNYLEVBQUUsRUFBRSxJQUFJO0lBQ1IsV0FBVyxFQUFFLElBQUk7Q0FDcEIsQ0FBQztBQUVGLElBQUksU0FBUyxHQUFHLElBQUksd0NBQWtCLENBQUMsVUFBQyxLQUFLLEVBQUUsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7QUFDckYsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHNDQUFpQixFQUFFLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN0QyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUU5QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ2xCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtRQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==