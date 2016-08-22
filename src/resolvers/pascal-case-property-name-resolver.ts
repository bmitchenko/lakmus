import PropertyNameResolver from "./property-name-resolver";

/**
 * PascalCase property name resolver (default).
 * @param name Property name.
 */
var PascalCasePropertyNameResolver: PropertyNameResolver = (name: string): string => {
    if (name) {
        return name.substr(0, 1).toUpperCase() + name.substr(1);
    }

    return name;
}

export default PascalCasePropertyNameResolver;