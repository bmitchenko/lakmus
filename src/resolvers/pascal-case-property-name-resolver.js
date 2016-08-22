"use strict";
/**
 * PascalCase property name resolver (default).
 * @param name Property name.
 */
var PascalCasePropertyNameResolver = function (name) {
    if (name) {
        return name.substr(0, 1).toUpperCase() + name.substr(1);
    }
    return name;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PascalCasePropertyNameResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzY2FsLWNhc2UtcHJvcGVydHktbmFtZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhc2NhbC1jYXNlLXByb3BlcnR5LW5hbWUtcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOzs7R0FHRztBQUNILElBQUksOEJBQThCLEdBQXlCLFVBQUMsSUFBWTtJQUNwRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFBO0FBRUQ7a0JBQWUsOEJBQThCLENBQUMifQ==