"use strict";
var memberNameExtractor = new RegExp("return (.*);");
function getMemberNameFromSelector(name) {
    var m = memberNameExtractor.exec(name + "");
    if (m == null)
        throw new Error("The function does not contain a statement matching 'return variableName;'");
    var parts = m[1].toString().split(".");
    return parts[parts.length - 1];
}
exports.getMemberNameFromSelector = getMemberNameFromSelector;
function getTypeName(instance) {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((instance).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
}
exports.getTypeName = getTypeName;
;
function stringEndsWith(subjectString, searchString) {
    return (subjectString.substr(subjectString.length - searchString.length) === searchString);
}
exports.stringEndsWith = stringEndsWith;
function isNullOrWhitespace(text) {
    return text == undefined || text.trim().length == 0;
}
exports.isNullOrWhitespace = isNullOrWhitespace;
function countDigits(text) {
    if (text) {
        return text.replace(/\D/g, "").length;
    }
    return 0;
}
exports.countDigits = countDigits;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVyRCxtQ0FBbUQsSUFBMEI7SUFDekUsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO0lBQzVHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFMZSxpQ0FBeUIsNEJBS3hDLENBQUE7QUFFRCxxQkFBNEIsUUFBYTtJQUNyQyxJQUFJLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztJQUN6QyxJQUFJLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDN0QsQ0FBQztBQUplLG1CQUFXLGNBSTFCLENBQUE7QUFBQSxDQUFDO0FBRUYsd0JBQStCLGFBQXFCLEVBQUUsWUFBb0I7SUFDdEUsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxZQUFZLENBQUMsQ0FBQztBQUMvRixDQUFDO0FBRmUsc0JBQWMsaUJBRTdCLENBQUE7QUFFRCw0QkFBbUMsSUFBWTtJQUMzQyxNQUFNLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRmUsMEJBQWtCLHFCQUVqQyxDQUFBO0FBRUQscUJBQTRCLElBQVk7SUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDYixDQUFDO0FBTmUsbUJBQVcsY0FNMUIsQ0FBQSJ9