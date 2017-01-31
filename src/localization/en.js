"use strict";
var language_manager_1 = require("./language-manager");
language_manager_1.LanguageManager.registerLanguage("en", {
    argumentNull: "Value cannot be null. Parameter name: {parameterName}.",
    creditCard: "The {name} field is not a valid credit card number.",
    email: "The {name} field is not a valid e-mail address.",
    empty: "The {name} field must be empty.",
    equal: "The {name} field should be equal to '{comparisonValue}'.",
    exactLength: "Then {name} field must be {exactLength} characters in length.",
    exclusiveBetween: "The {name} field must be between {min} and {max} (exclusive).",
    greaterThan: "The {name} field must be greater than or equal to {min}.",
    greaterThanOrEqual: "The {name} field must be greater than {min}.",
    inclusiveBetween: "The field {name} must be between {min} and {max} (inclusive).",
    invalidField: "The {name} field is invalid.",
    invalidFieldType: "Type of the {name} field must be '{expectedType}'. Current type is '{type}'.",
    lessThan: "The {name} field must be less than {max}.",
    lessThanOrEquals: "The {name} field must be less than or equal to {max}.",
    maxLength: "The {name} field must be a string with a maximum length of {maxLength}.",
    minLength: "The {name} field must be a string with a minimum length of {minLength}.",
    notEmpty: "The {name} field should not be empty.",
    notEqual: "The {name} field should not be equal to '{comparisonValue}'.",
    notNull: "The {name} field is required.",
    null: "The {name} field must be empty.",
    phone: "The {name} field is not a valid phone number.",
    predicate: "The specified condition was not met for the {name} field.",
    regularExpression: "The field {name} must match the regular expression '{regularExpression}'.",
    uri: "The {name} field is not a valid fully-qualified http, https, or ftp URL."
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2NhbGl6YXRpb24vZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXJELGtDQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFO0lBQ25DLFlBQVksRUFBRSx3REFBd0Q7SUFDdEUsVUFBVSxFQUFFLHFEQUFxRDtJQUNqRSxLQUFLLEVBQUUsaURBQWlEO0lBQ3hELEtBQUssRUFBRSxpQ0FBaUM7SUFDeEMsS0FBSyxFQUFFLDBEQUEwRDtJQUNqRSxXQUFXLEVBQUUsK0RBQStEO0lBQzVFLGdCQUFnQixFQUFFLCtEQUErRDtJQUNqRixXQUFXLEVBQUUsMERBQTBEO0lBQ3ZFLGtCQUFrQixFQUFFLDhDQUE4QztJQUNsRSxnQkFBZ0IsRUFBRSwrREFBK0Q7SUFDakYsWUFBWSxFQUFFLDhCQUE4QjtJQUM1QyxnQkFBZ0IsRUFBRSw4RUFBOEU7SUFDaEcsUUFBUSxFQUFFLDJDQUEyQztJQUNyRCxnQkFBZ0IsRUFBRSx1REFBdUQ7SUFDekUsU0FBUyxFQUFFLHlFQUF5RTtJQUNwRixTQUFTLEVBQUUseUVBQXlFO0lBQ3BGLFFBQVEsRUFBRSx1Q0FBdUM7SUFDakQsUUFBUSxFQUFFLDhEQUE4RDtJQUN4RSxPQUFPLEVBQUUsK0JBQStCO0lBQ3hDLElBQUksRUFBRSxpQ0FBaUM7SUFDdkMsS0FBSyxFQUFFLCtDQUErQztJQUN0RCxTQUFTLEVBQUUsMkRBQTJEO0lBQ3RFLGlCQUFpQixFQUFFLDJFQUEyRTtJQUM5RixHQUFHLEVBQUUsMEVBQTBFO0NBQ2xGLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvbG9jYWxpemF0aW9uL2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFuZ3VhZ2VNYW5hZ2VyIH0gZnJvbSBcIi4vbGFuZ3VhZ2UtbWFuYWdlclwiO1xyXG5cclxuTGFuZ3VhZ2VNYW5hZ2VyLnJlZ2lzdGVyTGFuZ3VhZ2UoXCJlblwiLCB7XHJcbiAgICBhcmd1bWVudE51bGw6IFwiVmFsdWUgY2Fubm90IGJlIG51bGwuIFBhcmFtZXRlciBuYW1lOiB7cGFyYW1ldGVyTmFtZX0uXCIsXHJcbiAgICBjcmVkaXRDYXJkOiBcIlRoZSB7bmFtZX0gZmllbGQgaXMgbm90IGEgdmFsaWQgY3JlZGl0IGNhcmQgbnVtYmVyLlwiLFxyXG4gICAgZW1haWw6IFwiVGhlIHtuYW1lfSBmaWVsZCBpcyBub3QgYSB2YWxpZCBlLW1haWwgYWRkcmVzcy5cIixcclxuICAgIGVtcHR5OiBcIlRoZSB7bmFtZX0gZmllbGQgbXVzdCBiZSBlbXB0eS5cIixcclxuICAgIGVxdWFsOiBcIlRoZSB7bmFtZX0gZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvICd7Y29tcGFyaXNvblZhbHVlfScuXCIsXHJcbiAgICBleGFjdExlbmd0aDogXCJUaGVuIHtuYW1lfSBmaWVsZCBtdXN0IGJlIHtleGFjdExlbmd0aH0gY2hhcmFjdGVycyBpbiBsZW5ndGguXCIsXHJcbiAgICBleGNsdXNpdmVCZXR3ZWVuOiBcIlRoZSB7bmFtZX0gZmllbGQgbXVzdCBiZSBiZXR3ZWVuIHttaW59IGFuZCB7bWF4fSAoZXhjbHVzaXZlKS5cIixcclxuICAgIGdyZWF0ZXJUaGFuOiBcIlRoZSB7bmFtZX0gZmllbGQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8ge21pbn0uXCIsXHJcbiAgICBncmVhdGVyVGhhbk9yRXF1YWw6IFwiVGhlIHtuYW1lfSBmaWVsZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB7bWlufS5cIixcclxuICAgIGluY2x1c2l2ZUJldHdlZW46IFwiVGhlIGZpZWxkIHtuYW1lfSBtdXN0IGJlIGJldHdlZW4ge21pbn0gYW5kIHttYXh9IChpbmNsdXNpdmUpLlwiLFxyXG4gICAgaW52YWxpZEZpZWxkOiBcIlRoZSB7bmFtZX0gZmllbGQgaXMgaW52YWxpZC5cIixcclxuICAgIGludmFsaWRGaWVsZFR5cGU6IFwiVHlwZSBvZiB0aGUge25hbWV9IGZpZWxkIG11c3QgYmUgJ3tleHBlY3RlZFR5cGV9Jy4gQ3VycmVudCB0eXBlIGlzICd7dHlwZX0nLlwiLCBcclxuICAgIGxlc3NUaGFuOiBcIlRoZSB7bmFtZX0gZmllbGQgbXVzdCBiZSBsZXNzIHRoYW4ge21heH0uXCIsXHJcbiAgICBsZXNzVGhhbk9yRXF1YWxzOiBcIlRoZSB7bmFtZX0gZmllbGQgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8ge21heH0uXCIsXHJcbiAgICBtYXhMZW5ndGg6IFwiVGhlIHtuYW1lfSBmaWVsZCBtdXN0IGJlIGEgc3RyaW5nIHdpdGggYSBtYXhpbXVtIGxlbmd0aCBvZiB7bWF4TGVuZ3RofS5cIixcclxuICAgIG1pbkxlbmd0aDogXCJUaGUge25hbWV9IGZpZWxkIG11c3QgYmUgYSBzdHJpbmcgd2l0aCBhIG1pbmltdW0gbGVuZ3RoIG9mIHttaW5MZW5ndGh9LlwiLFxyXG4gICAgbm90RW1wdHk6IFwiVGhlIHtuYW1lfSBmaWVsZCBzaG91bGQgbm90IGJlIGVtcHR5LlwiLFxyXG4gICAgbm90RXF1YWw6IFwiVGhlIHtuYW1lfSBmaWVsZCBzaG91bGQgbm90IGJlIGVxdWFsIHRvICd7Y29tcGFyaXNvblZhbHVlfScuXCIsXHJcbiAgICBub3ROdWxsOiBcIlRoZSB7bmFtZX0gZmllbGQgaXMgcmVxdWlyZWQuXCIsXHJcbiAgICBudWxsOiBcIlRoZSB7bmFtZX0gZmllbGQgbXVzdCBiZSBlbXB0eS5cIixcclxuICAgIHBob25lOiBcIlRoZSB7bmFtZX0gZmllbGQgaXMgbm90IGEgdmFsaWQgcGhvbmUgbnVtYmVyLlwiLFxyXG4gICAgcHJlZGljYXRlOiBcIlRoZSBzcGVjaWZpZWQgY29uZGl0aW9uIHdhcyBub3QgbWV0IGZvciB0aGUge25hbWV9IGZpZWxkLlwiLFxyXG4gICAgcmVndWxhckV4cHJlc3Npb246IFwiVGhlIGZpZWxkIHtuYW1lfSBtdXN0IG1hdGNoIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gJ3tyZWd1bGFyRXhwcmVzc2lvbn0nLlwiLFxyXG4gICAgdXJpOiBcIlRoZSB7bmFtZX0gZmllbGQgaXMgbm90IGEgdmFsaWQgZnVsbHktcXVhbGlmaWVkIGh0dHAsIGh0dHBzLCBvciBmdHAgVVJMLlwiXHJcbn0pOyJdfQ==
