"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var range_validator_1 = require("./range.validator");
var ExclusiveBetweenValidator = (function (_super) {
    __extends(ExclusiveBetweenValidator, _super);
    function ExclusiveBetweenValidator(min, max, errorMessage) {
        _super.call(this, min, max, false, errorMessage);
        this.errorMessageResourceName = "exclusiveBetween";
    }
    return ExclusiveBetweenValidator;
}(range_validator_1.RangeValidator));
exports.ExclusiveBetweenValidator = ExclusiveBetweenValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjbHVzaXZlLWJldHdlZW4udmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhjbHVzaXZlLWJldHdlZW4udmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5EO0lBQStDLDZDQUFjO0lBQ3pELG1DQUFZLEdBQVcsRUFBRSxHQUFXLEVBQUUsWUFBcUI7UUFDdkQsa0JBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGtCQUFrQixDQUFDO0lBQ3ZELENBQUM7SUFDTCxnQ0FBQztBQUFELENBQUMsQUFORCxDQUErQyxnQ0FBYyxHQU01RDtBQU5ZLGlDQUF5Qiw0QkFNckMsQ0FBQSJ9