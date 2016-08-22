import PropertyNameResolver from "./property-name-resolver";

/**
 * AP Style Title Case property name resolver.
 * @param name Property name.
 */
var ApStyleTitleCasePropertyNameResolver: PropertyNameResolver = (name: string): string => {
    if (!name) return null
    if (!name.length) return null

    const stopwords = 'a an and at but by for in nor of on or so the to up yet'.split(' ')

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    var words = name.split(/(?=[A-ZА-Я])/);

    return words
        .map((word, index) => {
            if (index === 0) return capitalize(word)
            if (index === words.length - 1) return capitalize(word)
            if (stopwords.indexOf(word.toLowerCase()) > -1) return word.toLowerCase()
            return capitalize(word)
        })
        .join(' ')
}

export default ApStyleTitleCasePropertyNameResolver;