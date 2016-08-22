"use strict";
/**
 * AP Style Title Case property name resolver.
 * @param name Property name.
 */
var ApStyleTitleCasePropertyNameResolver = function (name) {
    if (!name)
        return null;
    if (!name.length)
        return null;
    var stopwords = 'a an and at but by for in nor of on or so the to up yet'.split(' ');
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    var words = name.split(/(?=[A-ZА-Я])/);
    return words
        .map(function (word, index) {
        if (index === 0)
            return capitalize(word);
        if (index === words.length - 1)
            return capitalize(word);
        if (stopwords.indexOf(word.toLowerCase()) > -1)
            return word.toLowerCase();
        return capitalize(word);
    })
        .join(' ');
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApStyleTitleCasePropertyNameResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXAtc3R5bGUtcHJvcGVydHktbmFtZS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwLXN0eWxlLXByb3BlcnR5LW5hbWUtcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOzs7R0FHRztBQUNILElBQUksb0NBQW9DLEdBQXlCLFVBQUMsSUFBWTtJQUMxRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtJQUU3QixJQUFNLFNBQVMsR0FBRyx5REFBeUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFdEYsb0JBQW9CLEdBQUc7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2QyxNQUFNLENBQUMsS0FBSztTQUNQLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1FBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2RCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN6RSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFFRDtrQkFBZSxvQ0FBb0MsQ0FBQyJ9