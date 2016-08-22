"use strict";
/**
 * camelCase property name resolver.
 * @param name Property name.
 */
var CamelCasePropertyNameResolver = function (name) {
    if (name) {
        return name.substr(0, 1).toLocaleLowerCase() + name.substr(1);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CamelCasePropertyNameResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZWwtY2FzZS1wcm9wZXJ0eS1uYW1lLXJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtZWwtY2FzZS1wcm9wZXJ0eS1uYW1lLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTs7O0dBR0c7QUFDSCxJQUFJLDZCQUE2QixHQUF5QixVQUFDLElBQVk7SUFDbkUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVEO2tCQUFlLDZCQUE2QixDQUFDIn0=