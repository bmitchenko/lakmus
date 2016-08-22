import { PropertyValidator } from "./property-validator";
import { ValidationContext } from "../validation-context";

export class PredicateValidator extends PropertyValidator {
    public predicate: (value: any, instance?: any) => boolean;

    constructor(predicate: (value: any, instance?: any) => boolean, errorMessage?: string) {
        super(errorMessage);

        this.predicate = predicate;
        this.errorMessageResourceName = "predicate";
    }

    public isValid(context: ValidationContext): boolean {
        return this.predicate(context.propertyValue, context.instance);
    }
}