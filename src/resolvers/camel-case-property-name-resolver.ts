import PropertyNameResolver from "./property-name-resolver";

/**
 * camelCase property name resolver.
 * @param name Property name.
 */
var CamelCasePropertyNameResolver: PropertyNameResolver = (name: string): string => {
    if (name) {
        return name.substr(0, 1).toLocaleLowerCase() + name.substr(1);
    }
}

export default CamelCasePropertyNameResolver;