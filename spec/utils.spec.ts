import { getMemberNameFromSelector } from "../src/utils";

var description = "utils spec.";
var funcs = [
    function (instance) { return instance.InstanceId; },
    function (instance) { return instance.InstanceId; },
    function (instance) { return instance.InstanceId;  },
    function (instance) { return instance.InstanceId},
    function (instance) { return instance.InstanceId },
    function (instance) { return instance.InstanceId; },
    function(instance){return instance.InstanceId},
    function(instance){return (instance.InstanceId);},
    function(instance){return (instance.InstanceId);;},
    // Simulates es6 arrow functions
    "instance => instance.InstanceId" as any,
    "instance =>instance.InstanceId" as any,
    "(instance) => instance.InstanceId" as any
]

describe(description, () => {
    it("getMemberNameFromSelector should pass.", () => {
        funcs.forEach(func => expect(getMemberNameFromSelector(func)).toBe("InstanceId"))
    });
});

describe(description, () => {
    it("getMemberNameFromSelector should throw an error when function has no return statement.", () => {
        expect(() => getMemberNameFromSelector(() => { 1 + 1 })).toThrow()
    });
});