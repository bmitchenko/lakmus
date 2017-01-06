var memberNameExtractor = new RegExp("return (.*);?");

export function getMemberNameFromSelector<TResult>(name: (x?: TResult) => any) {
    var m = memberNameExtractor.exec(name + "");
    if (m == null) throw new Error("The function does not contain a statement matching 'return variableName;'");
    var parts = m[1].toString().split(".");
    return parts[parts.length - 1];
}

export function getTypeName(instance: any) {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((instance).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};

export function stringEndsWith(subjectString: string, searchString: string): boolean {
    return (subjectString.substr(subjectString.length - searchString.length) === searchString);
}

export function isNullOrWhitespace(text: string): boolean {
    return text == undefined || text.trim().length == 0;
}

export function countDigits(text: string): number {
    if (text) {
        return text.replace(/\D/g, "").length;
    }
    
    return 0;
}
