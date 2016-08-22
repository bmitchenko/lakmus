/** 
 * Error message resolving function. 
 * @param params Validator properties.
*/
type ErrorMessageResolver = { (validatorProperties?: { [name: string]: string }): string };

export default ErrorMessageResolver;