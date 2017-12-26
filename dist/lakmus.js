var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var memberNameExtractor = new RegExp("return (.*);?\\b");
    function getMemberNameFromSelector(name) {
        var m = memberNameExtractor.exec(name + "");
        if (m == null)
            throw new Error("The function does not contain a statement matching 'return variableName;'");
        var parts = m[1].toString().split(".");
        return parts[parts.length - 1];
    }
    exports.getMemberNameFromSelector = getMemberNameFromSelector;
    function getTypeName(instance) {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((instance).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }
    exports.getTypeName = getTypeName;
    ;
    function stringEndsWith(subjectString, searchString) {
        return (subjectString.substr(subjectString.length - searchString.length) === searchString);
    }
    exports.stringEndsWith = stringEndsWith;
    function isNullOrWhitespace(text) {
        return text == undefined || text.trim().length == 0;
    }
    exports.isNullOrWhitespace = isNullOrWhitespace;
    function countDigits(text) {
        if (text) {
            return text.replace(/\D/g, "").length;
        }
        return 0;
    }
    exports.countDigits = countDigits;
});
define("validation-context", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validation context.
     */
    var ValidationContext = /** @class */ (function () {
        function ValidationContext() {
        }
        return ValidationContext;
    }());
    exports.ValidationContext = ValidationContext;
});
define("results/validation-error", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Represents an error that occurs during validation. */
    var ValidationError = /** @class */ (function () {
        /**
         * Initializes a new instance of the ValidationError class.
         * @param errorMessage Error message.
         * @param propertyName Property name.
         */
        function ValidationError(errorMessage, propertyName) {
            this.errorMessage = errorMessage;
            this.propertyName = propertyName;
        }
        return ValidationError;
    }());
    exports.ValidationError = ValidationError;
});
define("results/validation-result", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** The result of running a validator. */
    var ValidationResult = /** @class */ (function () {
        function ValidationResult() {
            /** A collection of errors. */
            this.errors = [];
        }
        Object.defineProperty(ValidationResult.prototype, "isValid", {
            /** Whether validation succeeded. */
            get: function () {
                return this.errors.length == 0;
            },
            enumerable: true,
            configurable: true
        });
        return ValidationResult;
    }());
    exports.ValidationResult = ValidationResult;
});
define("resolvers/error-message-resolver", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("localization/language-resources", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("localization/language-manager", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Represents a language manager.
     */
    var LanguageManager = /** @class */ (function () {
        function LanguageManager() {
        }
        /**
         * Registers a list of localized messages for the specified language.
         * @parem language Language.
         * @param languageResources List of localized messages.
         */
        LanguageManager.registerLanguage = function (language, languageResources) {
            LanguageManager.registeredLanguages[language] = languageResources;
        };
        /**
         * Gets a localized message based on the specified language.
         * @parem resourceName Message name.
         * @param language Language.
         * @params Message format parameters.
         */
        LanguageManager.getLocalizedMessage = function (resourceName, language, params) {
            var resources = LanguageManager.registeredLanguages[language];
            if (resources == null) {
                throw "Language '" + language + "' is not registered.";
            }
            var message = resources[resourceName];
            if (message == null) {
                throw "The message '" + resourceName + "' is not found in the localization file '" + language + "'.";
            }
            if (params != null) {
                Object.getOwnPropertyNames(params).forEach(function (propertyName) {
                    message = message.replace("{" + propertyName + "}", params[propertyName]);
                });
            }
            return message;
        };
        /** List of registered languages. */
        LanguageManager.registeredLanguages = {};
        return LanguageManager;
    }());
    exports.LanguageManager = LanguageManager;
});
define("resolvers/property-name-resolver", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("resolvers/pascal-case-property-name-resolver", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.default = PascalCasePropertyNameResolver;
});
define("validator-options", ["require", "exports", "resolvers/pascal-case-property-name-resolver"], function (require, exports, pascal_case_property_name_resolver_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Validation settings.
     */
    var ValidatorOptions = /** @class */ (function () {
        function ValidatorOptions() {
        }
        /** Validation langugage. Default 'en'. */
        ValidatorOptions.language = "en";
        /** Function to format display name. */
        ValidatorOptions.propertyNameResolver = pascal_case_property_name_resolver_1.default;
        return ValidatorOptions;
    }());
    exports.ValidatorOptions = ValidatorOptions;
});
define("localization/en", ["require", "exports", "localization/language-manager"], function (require, exports, language_manager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    language_manager_1.LanguageManager.registerLanguage("en", {
        argumentNull: "Value cannot be null. Parameter name: {parameterName}.",
        creditCard: "The {name} field is not a valid credit card number.",
        email: "The {name} field is not a valid e-mail address.",
        empty: "The {name} field must be empty.",
        equal: "The {name} field should be equal to '{comparisonValue}'.",
        exactLength: "Then {name} field must be {exactLength} characters in length.",
        exclusiveBetween: "The {name} field must be between {min} and {max} (exclusive).",
        greaterThan: "The {name} field must be greater than or equal to {min}.",
        greaterThanOrEqual: "The {name} field must be greater than {min}.",
        inclusiveBetween: "The field {name} must be between {min} and {max} (inclusive).",
        invalidField: "The {name} field is invalid.",
        invalidFieldType: "Type of the {name} field must be '{expectedType}'. Current type is '{type}'.",
        lessThan: "The {name} field must be less than {max}.",
        lessThanOrEquals: "The {name} field must be less than or equal to {max}.",
        maxLength: "The {name} field must be a string with a maximum length of {maxLength}.",
        minLength: "The {name} field must be a string with a minimum length of {minLength}.",
        notEmpty: "The {name} field should not be empty.",
        notEqual: "The {name} field should not be equal to '{comparisonValue}'.",
        notNull: "The {name} field is required.",
        null: "The {name} field must be empty.",
        phone: "The {name} field is not a valid phone number.",
        predicate: "The specified condition was not met for the {name} field.",
        regularExpression: "The field {name} must match the regular expression '{regularExpression}'.",
        uri: "The {name} field is not a valid fully-qualified http, https, or ftp URL."
    });
});
define("localization/ru", ["require", "exports", "localization/language-manager"], function (require, exports, language_manager_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    language_manager_2.LanguageManager.registerLanguage("ru", {
        argumentNull: "Значение не может быть неопределенным. Имя параметра: {parameterName}.",
        creditCard: "Поле {name} не содержит допустимый номер кредитной карты.",
        email: "Поле {name} не содержит допустимый адрес электронной почты.",
        empty: "Поле {name} должно быть пустым.",
        equal: "Поле {name} должно содержать значение '{comparisonValue}'.",
        exactLength: "Поле {name} должно содержать строку длиною {exactLength}.",
        exclusiveBetween: "Значение поля {name} должно быть в пределах от {min} до {max}.",
        greaterThan: "Значение поля {name} должно быть больше {min}.",
        greaterThanOrEqual: "Значение поля {name} должно быть больше либо равно {min}.",
        inclusiveBetween: "Значение поля {name} должно быть в пределах от {min} до {max} включительно.",
        invalidField: "Поле {name} содержит недопустимое значение.",
        invalidFieldType: "Тип данных поля {name} должен быть '{expectedType}'. Обнаружено значение: '{type}'.",
        lessThan: "Значение поля {name} должно быть меньше {max}.",
        lessThanOrEquals: "Значение поля {name} должно быть меньше либо равно {max}.",
        maxLength: "Поле {name} должно содержать строку с максимальной длиной {maxLength}.",
        minLength: "Поле {name} должно содержать строку с минимальной длиной {minLength}.",
        notEmpty: "Требуется поле {name}.",
        notEqual: "Поле {name} не должно содержать значение '{comparisonValue}'.",
        notNull: "Требуется поле {name}.",
        null: "Поле {name} должно быть пустым.",
        phone: "Поле {name} не содержит допустимый номер телефона.",
        predicate: "Поле {name} содержит недопустимое значение.",
        regularExpression: "Поле {name} должно соответствовать регулярному выражению '{regularExpression}'.",
        uri: "Поле {name} не содержит допустимый полный URL-адрес http, https или ftp."
    });
});
define("validator", ["require", "exports", "utils", "validation-rule", "validation-rule-configurator", "results/validation-result", "localization/language-manager", "validator-options", "localization/en", "localization/ru"], function (require, exports, utils_1, validation_rule_1, validation_rule_configurator_1, validation_result_1, language_manager_3, validator_options_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Defines a validator for a particular type.
     */
    var Validator = /** @class */ (function () {
        function Validator() {
            this._rules = [];
        }
        /**
         * Validates the specified instance.
         * @param instance The instance to validate.
         */
        Validator.prototype.validate = function (instance) {
            if (instance == null) {
                throw language_manager_3.LanguageManager.getLocalizedMessage("argumentNull", validator_options_1.ValidatorOptions.language, { parameterName: "instance" });
            }
            var result = new validation_result_1.ValidationResult();
            this._rules.forEach(function (rule) {
                var validationErrors = rule.validate(instance);
                if (validationErrors != null) {
                    validationErrors.forEach(function (error) {
                        result.errors.push(error);
                    });
                }
            });
            return result;
        };
        /**
         * Performs validation and then throws an exception if validation fails.
         * @param instance Instance to validate.
         * @param validatorType Type of the validator.
         */
        Validator.prototype.validateAndThrow = function (instance) {
            var result = this.validate(instance);
            if (!result.isValid) {
                throw result.errors.map(function (x) { return x.errorMessage; }).join("\r\n");
            }
        };
        /**
         * Defines a validation rule for a specify property.
         * @param propertySelector The expression representing the property to validate.
         */
        Validator.prototype.ruleFor = function (propertySelector) {
            var propertyName = utils_1.getMemberNameFromSelector(propertySelector);
            var rule = new validation_rule_1.ValidationRule(propertyName);
            this._rules.push(rule);
            var configurator = new validation_rule_configurator_1.ValidationRuleConfigurator(rule);
            if (this._when != null) {
                configurator.when(this._when);
            }
            return configurator;
        };
        /**
         * Specifies a condition limiting when validation rules should run.
         * @param predicate A function or lambda expression that specifies a condition for when validation rules should run.
         * @param ruleDefinitions A function with validation rule definitions.
         */
        Validator.prototype.when = function (predicate, ruleDefinitions) {
            this._when = predicate;
            ruleDefinitions();
            this._when = null;
        };
        return Validator;
    }());
    exports.Validator = Validator;
});
define("validators/property-validator", ["require", "exports", "localization/language-manager", "validator-options"], function (require, exports, language_manager_4, validator_options_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PropertyValidator = /** @class */ (function () {
        function PropertyValidator(errorMessage) {
            this.errorMessage = errorMessage;
        }
        PropertyValidator.prototype.getErrorMessage = function (context) {
            if (this.errorMessage != null && this.errorMessage.length > 0) {
                return this.errorMessage;
            }
            if (this.errorMessageResourceName != null && this.errorMessageResourceName.length > 0) {
                return language_manager_4.LanguageManager.getLocalizedMessage(this.errorMessageResourceName, validator_options_2.ValidatorOptions.language, this.getFormatParameters(context.propertyDisplayName));
            }
            return language_manager_4.LanguageManager.getLocalizedMessage("invalidField", validator_options_2.ValidatorOptions.language, {
                name: context.propertyDisplayName
            });
        };
        PropertyValidator.prototype.getFormatParameters = function (propertyName) {
            var _this = this;
            var params = {
                name: propertyName
            };
            Object.getOwnPropertyNames(this).forEach(function (propertyName) {
                if (propertyName != "errorMessage" && propertyName != "errorMessageResourceName") {
                    params[propertyName] = _this[propertyName];
                }
            });
            return params;
        };
        return PropertyValidator;
    }());
    exports.PropertyValidator = PropertyValidator;
});
define("validation-rule", ["require", "exports", "validation-context", "results/validation-error", "localization/language-manager", "validator-options"], function (require, exports, validation_context_1, validation_error_1, language_manager_5, validator_options_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Defines a rule associated with a property which can have multiple validators. */
    var ValidationRule = /** @class */ (function () {
        /**
         * Initializes a new instance of the ValidationRule class.
         * @param name Property name.
         */
        function ValidationRule(name) {
            /** Collection validators to apply. */
            this.collectionValidators = [];
            /** Property validators to apply. */
            this.propertyValidators = [];
            /** Custom validators to apply. */
            this.validators = [];
            /** Conditions that control when the rule should execute. */
            this.when = [];
            this.propertyDisplayName = validator_options_3.ValidatorOptions.propertyNameResolver(name);
            this.propertyName = name;
        }
        /**
         * Performs validation using an object instance and returns a collection of validation errors.
         * @param instance The object to validate.
         */
        ValidationRule.prototype.validate = function (instance) {
            var _this = this;
            if (instance == null) {
                throw language_manager_5.LanguageManager.getLocalizedMessage("argumentNull", validator_options_3.ValidatorOptions.language, {
                    parameterName: "instance"
                });
            }
            var errors = [];
            if (this.when != null) {
                if (this.when.some(function (x) { return !x(instance); })) {
                    return errors;
                }
            }
            var value = this.getValue(instance);
            var context = new validation_context_1.ValidationContext();
            context.instance = instance;
            context.propertyDisplayName = this.propertyDisplayName;
            context.propertyName = this.propertyName;
            context.propertyValue = value;
            if (this.collectionValidators != null) {
                this.collectionValidators.forEach(function (collectionValidator) {
                    _this.validateWithCollectionValidator(context, collectionValidator, errors);
                });
            }
            if (this.validators != null) {
                this.validators.forEach(function (validator) {
                    _this.validateWithValidator(context.propertyValue, validator, errors);
                });
            }
            if (this.propertyValidators != null) {
                this.propertyValidators.forEach(function (propertyValidator) {
                    _this.validateWithPropertyValidator(context, propertyValidator, errors);
                });
            }
            return errors;
        };
        ValidationRule.prototype.validateWithCollectionValidator = function (context, validator, errors) {
            var _this = this;
            if (context.propertyValue == null) {
                return;
            }
            if (context.propertyValue instanceof Array) {
                context.propertyValue.forEach(function (item) {
                    if (item != null) {
                        _this.validateWithValidator(item, validator, errors);
                    }
                });
            }
            else {
                throw language_manager_5.LanguageManager.getLocalizedMessage("invalidPropertyType", validator_options_3.ValidatorOptions.language, {
                    propertyName: context.propertyName,
                    type: typeof context.propertyValue,
                    expectedType: "Array"
                });
            }
        };
        ValidationRule.prototype.validateWithValidator = function (value, validator, errors) {
            if (value == null) {
                return;
            }
            var result = validator.validate(value);
            result.errors.forEach(function (error) {
                errors.push(error);
            });
        };
        ValidationRule.prototype.validateWithPropertyValidator = function (context, validator, errors) {
            if (!validator.isValid(context)) {
                errors.push(new validation_error_1.ValidationError(validator.getErrorMessage(context), context.propertyName));
            }
        };
        ValidationRule.prototype.getValue = function (instance) {
            var value = instance[this.propertyName];
            // if (window) {
            //     if (window["ko"]) {
            //         value = window["ko"].unwrap(value);
            //     }
            // }
            return value;
        };
        return ValidationRule;
    }());
    exports.ValidationRule = ValidationRule;
});
define("validators/credit-card.validator", ["require", "exports", "validators/property-validator", "utils"], function (require, exports, property_validator_1, utils_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CreditCardValidator = /** @class */ (function (_super) {
        __extends(CreditCardValidator, _super);
        function CreditCardValidator(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "creditCard";
            return _this;
        }
        CreditCardValidator.prototype.luhnCheck = function (cardNumber) {
            // https://gist.github.com/DiegoSalazar/4075533
            if (/[^0-9-\s]+/.test(cardNumber))
                return false;
            var nCheck = 0, nDigit = 0, bEven = false;
            cardNumber = cardNumber.replace(/\D/g, "");
            for (var n = cardNumber.length - 1; n >= 0; n--) {
                var cDigit = cardNumber.charAt(n), nDigit = parseInt(cDigit, 10);
                if (bEven) {
                    if ((nDigit *= 2) > 9)
                        nDigit -= 9;
                }
                nCheck += nDigit;
                bEven = !bEven;
            }
            return (nCheck % 10) == 0;
        };
        CreditCardValidator.prototype.isValid = function (context) {
            var cardNumber = context.propertyValue;
            if (cardNumber == undefined) {
                return true;
            }
            if (typeof cardNumber != "string") {
                return false;
            }
            cardNumber = cardNumber.replace(/-+/g, "");
            cardNumber = cardNumber.replace(/\s+/g, "");
            if (cardNumber.length == 0 || utils_2.countDigits(cardNumber) != cardNumber.length) {
                return false;
            }
            if (cardNumber.length < 12 || cardNumber.length > 19) {
                return false;
            }
            return this.luhnCheck(cardNumber);
        };
        return CreditCardValidator;
    }(property_validator_1.PropertyValidator));
    exports.CreditCardValidator = CreditCardValidator;
});
define("validators/email.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmailValidator = /** @class */ (function (_super) {
        __extends(EmailValidator, _super);
        function EmailValidator(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "email";
            return _this;
        }
        EmailValidator.prototype.isValid = function (context) {
            var email = context.propertyValue;
            if (email == undefined) {
                return true;
            }
            if (typeof email != "string") {
                return false;
            }
            return emailRegExp.test(email);
        };
        return EmailValidator;
    }(property_validator_2.PropertyValidator));
    exports.EmailValidator = EmailValidator;
    var emailRegExp = /^((([a-zа-я]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\.([a-zа-я]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\.)+(([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\.?$/;
});
define("validators/empty.validator", ["require", "exports", "validators/property-validator", "utils"], function (require, exports, property_validator_3, utils_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmptyValidator = /** @class */ (function (_super) {
        __extends(EmptyValidator, _super);
        function EmptyValidator(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "empty";
            return _this;
        }
        EmptyValidator.prototype.isValid = function (context) {
            var value = context.propertyValue;
            if (value === undefined || value === null || value === 0 || value === false) {
                return true;
            }
            if (value instanceof Array) {
                return value.length == 0;
            }
            if (typeof value == "string" && utils_3.isNullOrWhitespace(value)) {
                return true;
            }
            return false;
        };
        return EmptyValidator;
    }(property_validator_3.PropertyValidator));
    exports.EmptyValidator = EmptyValidator;
});
define("validators/equal.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EqualValidator = /** @class */ (function (_super) {
        __extends(EqualValidator, _super);
        function EqualValidator(comparisonValue, errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "equal";
            _this.comparisonValue = comparisonValue;
            return _this;
        }
        EqualValidator.prototype.isValid = function (context) {
            if (this.comparisonValue instanceof Date && context.propertyValue instanceof Date) {
                return this.comparisonValue.getTime() == context.propertyValue.getTime();
            }
            return this.comparisonValue === context.propertyValue;
        };
        return EqualValidator;
    }(property_validator_4.PropertyValidator));
    exports.EqualValidator = EqualValidator;
});
define("validators/exact-length.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExactLengthValidator = /** @class */ (function (_super) {
        __extends(ExactLengthValidator, _super);
        function ExactLengthValidator(exactLength, errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "exactLength";
            _this.exactLength = exactLength;
            return _this;
        }
        ExactLengthValidator.prototype.isValid = function (context) {
            var value = context.propertyValue;
            if (value === null || value === undefined) {
                return true;
            }
            if (typeof value == "string") {
                return value.length == this.exactLength;
            }
            return false;
        };
        return ExactLengthValidator;
    }(property_validator_5.PropertyValidator));
    exports.ExactLengthValidator = ExactLengthValidator;
});
define("validators/range.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RangeValidator = /** @class */ (function (_super) {
        __extends(RangeValidator, _super);
        function RangeValidator(min, max, inclusive, errorMessage) {
            if (inclusive === void 0) { inclusive = true; }
            var _this = _super.call(this, errorMessage) || this;
            _this.min = min;
            _this.max = max;
            _this.inclusive = inclusive;
            return _this;
        }
        RangeValidator.prototype.isValid = function (context) {
            var value = context.propertyValue;
            if (value == null) {
                return true;
            }
            if (typeof value == "number") {
                if (this.min != null) {
                    if (this.inclusive) {
                        if (value < this.min) {
                            return false;
                        }
                    }
                    else {
                        if (value <= this.min) {
                            return false;
                        }
                    }
                }
                if (this.max != null) {
                    if (this.inclusive) {
                        if (value > this.max) {
                            return false;
                        }
                    }
                    else {
                        if (value >= this.max) {
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;
        };
        return RangeValidator;
    }(property_validator_6.PropertyValidator));
    exports.RangeValidator = RangeValidator;
});
define("validators/exclusive-between.validator", ["require", "exports", "validators/range.validator"], function (require, exports, range_validator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExclusiveBetweenValidator = /** @class */ (function (_super) {
        __extends(ExclusiveBetweenValidator, _super);
        function ExclusiveBetweenValidator(min, max, errorMessage) {
            var _this = _super.call(this, min, max, false, errorMessage) || this;
            _this.errorMessageResourceName = "exclusiveBetween";
            return _this;
        }
        return ExclusiveBetweenValidator;
    }(range_validator_1.RangeValidator));
    exports.ExclusiveBetweenValidator = ExclusiveBetweenValidator;
});
define("validators/greater-than-or-equal.validator", ["require", "exports", "validators/range.validator"], function (require, exports, range_validator_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GreaterThanOrEqualValidator = /** @class */ (function (_super) {
        __extends(GreaterThanOrEqualValidator, _super);
        function GreaterThanOrEqualValidator(min, errorMessage) {
            var _this = _super.call(this, min, null, true, errorMessage) || this;
            _this.errorMessageResourceName = "greaterThanOrEquals";
            return _this;
        }
        return GreaterThanOrEqualValidator;
    }(range_validator_2.RangeValidator));
    exports.GreaterThanOrEqualValidator = GreaterThanOrEqualValidator;
});
define("validators/greater-than.validator", ["require", "exports", "validators/range.validator"], function (require, exports, range_validator_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GreaterThanValidator = /** @class */ (function (_super) {
        __extends(GreaterThanValidator, _super);
        function GreaterThanValidator(min, errorMessage) {
            var _this = _super.call(this, min, null, false, errorMessage) || this;
            _this.errorMessageResourceName = "greaterThan";
            return _this;
        }
        return GreaterThanValidator;
    }(range_validator_3.RangeValidator));
    exports.GreaterThanValidator = GreaterThanValidator;
});
define("validators/inclusive-between.validator", ["require", "exports", "validators/range.validator"], function (require, exports, range_validator_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InclusiveBetweenValidator = /** @class */ (function (_super) {
        __extends(InclusiveBetweenValidator, _super);
        function InclusiveBetweenValidator(min, max, errorMessage) {
            var _this = _super.call(this, min, max, true, errorMessage) || this;
            _this.errorMessageResourceName = "inclusiveBetween";
            return _this;
        }
        return InclusiveBetweenValidator;
    }(range_validator_4.RangeValidator));
    exports.InclusiveBetweenValidator = InclusiveBetweenValidator;
});
define("validators/less-than-or-equal.validator", ["require", "exports", "validators/range.validator"], function (require, exports, range_validator_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LessThanOrEqualValidator = /** @class */ (function (_super) {
        __extends(LessThanOrEqualValidator, _super);
        function LessThanOrEqualValidator(max, errorMessage) {
            var _this = _super.call(this, null, max, true, errorMessage) || this;
            _this.errorMessageResourceName = "lessThanOrEquals";
            return _this;
        }
        return LessThanOrEqualValidator;
    }(range_validator_5.RangeValidator));
    exports.LessThanOrEqualValidator = LessThanOrEqualValidator;
});
define("validators/less-than.validator", ["require", "exports", "validators/range.validator"], function (require, exports, range_validator_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LessThanValidator = /** @class */ (function (_super) {
        __extends(LessThanValidator, _super);
        function LessThanValidator(max, errorMessage) {
            var _this = _super.call(this, null, max, false, errorMessage) || this;
            _this.errorMessageResourceName = "lessThan";
            return _this;
        }
        return LessThanValidator;
    }(range_validator_6.RangeValidator));
    exports.LessThanValidator = LessThanValidator;
});
define("validators/max-length.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MaxLengthValidator = /** @class */ (function (_super) {
        __extends(MaxLengthValidator, _super);
        function MaxLengthValidator(maxLength, errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.maxLength = maxLength;
            _this.errorMessageResourceName = "maxLength";
            return _this;
        }
        MaxLengthValidator.prototype.isValid = function (context) {
            var value = context.propertyValue;
            if (value == undefined) {
                return true;
            }
            if (typeof value == "string") {
                return value.length <= this.maxLength;
            }
            return false;
        };
        return MaxLengthValidator;
    }(property_validator_7.PropertyValidator));
    exports.MaxLengthValidator = MaxLengthValidator;
});
define("validators/min-length.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MinLengthValidator = /** @class */ (function (_super) {
        __extends(MinLengthValidator, _super);
        function MinLengthValidator(minLength, errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.minLength = minLength;
            _this.errorMessageResourceName = "minLength";
            return _this;
        }
        MinLengthValidator.prototype.isValid = function (context) {
            var value = context.propertyValue;
            if (value == undefined) {
                return true;
            }
            if (typeof value == "string") {
                return value.length >= this.minLength;
            }
            return false;
        };
        return MinLengthValidator;
    }(property_validator_8.PropertyValidator));
    exports.MinLengthValidator = MinLengthValidator;
});
define("validators/not-empty.validator", ["require", "exports", "validators/property-validator", "utils"], function (require, exports, property_validator_9, utils_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotEmptyValidator = /** @class */ (function (_super) {
        __extends(NotEmptyValidator, _super);
        function NotEmptyValidator(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "notEmpty";
            return _this;
        }
        NotEmptyValidator.prototype.isValid = function (context) {
            var value = context.propertyValue;
            if (value === undefined || value === null || value === 0 || value === false) {
                return false;
            }
            if (typeof value == "string" && utils_4.isNullOrWhitespace(value)) {
                return false;
            }
            if (value instanceof Array) {
                return value.length > 0;
            }
            return true;
        };
        return NotEmptyValidator;
    }(property_validator_9.PropertyValidator));
    exports.NotEmptyValidator = NotEmptyValidator;
});
define("validators/not-equal.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotEqualValidator = /** @class */ (function (_super) {
        __extends(NotEqualValidator, _super);
        function NotEqualValidator(valueToCompare, errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "notEqual";
            _this.comparisonValue = valueToCompare;
            return _this;
        }
        NotEqualValidator.prototype.isValid = function (context) {
            if (this.comparisonValue instanceof Date && context.propertyValue instanceof Date) {
                return this.comparisonValue.getTime() != context.propertyValue.getTime();
            }
            return this.comparisonValue !== context.propertyValue;
        };
        return NotEqualValidator;
    }(property_validator_10.PropertyValidator));
    exports.NotEqualValidator = NotEqualValidator;
});
define("validators/not-null.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotNullValidator = /** @class */ (function (_super) {
        __extends(NotNullValidator, _super);
        function NotNullValidator(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "notNull";
            return _this;
        }
        NotNullValidator.prototype.isValid = function (context) {
            return context.propertyValue !== null && context.propertyValue !== undefined;
        };
        return NotNullValidator;
    }(property_validator_11.PropertyValidator));
    exports.NotNullValidator = NotNullValidator;
});
define("validators/null.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NullValidator = /** @class */ (function (_super) {
        __extends(NullValidator, _super);
        function NullValidator(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "null";
            return _this;
        }
        NullValidator.prototype.isValid = function (context) {
            return context.propertyValue === null || context.propertyValue === undefined;
        };
        return NullValidator;
    }(property_validator_12.PropertyValidator));
    exports.NullValidator = NullValidator;
});
define("validators/phone.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_13) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PhoneValidator = /** @class */ (function (_super) {
        __extends(PhoneValidator, _super);
        function PhoneValidator(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "phone";
            return _this;
        }
        PhoneValidator.prototype.isValid = function (context) {
            if (context.propertyValue == undefined) {
                return true;
            }
            return phoneRegExp.test(context.propertyValue);
        };
        return PhoneValidator;
    }(property_validator_13.PropertyValidator));
    exports.PhoneValidator = PhoneValidator;
    var phoneRegExp = /^(\+\s?)?(\(\+?\d+([\s\-\.]?\d+)?\)|\d+)([\s\-\.]?(\(\d+([\s\-\.]?\d+)?\)|\d+))*(\s?(x|ext\.?)\s?\d+)?$/;
});
define("validators/predicate.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PredicateValidator = /** @class */ (function (_super) {
        __extends(PredicateValidator, _super);
        function PredicateValidator(predicate, errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.predicate = predicate;
            _this.errorMessageResourceName = "predicate";
            return _this;
        }
        PredicateValidator.prototype.isValid = function (context) {
            return this.predicate(context.propertyValue, context.instance);
        };
        return PredicateValidator;
    }(property_validator_14.PropertyValidator));
    exports.PredicateValidator = PredicateValidator;
});
define("validators/regular-expression.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_15) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegularExpressionValidator = /** @class */ (function (_super) {
        __extends(RegularExpressionValidator, _super);
        function RegularExpressionValidator(expression, errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "regularExpression";
            _this.expression = expression;
            return _this;
        }
        RegularExpressionValidator.prototype.isValid = function (context) {
            if (context.propertyValue == undefined) {
                return true;
            }
            if (typeof context.propertyValue == "string") {
                return this.expression.test(context.propertyValue);
            }
            return false;
        };
        return RegularExpressionValidator;
    }(property_validator_15.PropertyValidator));
    exports.RegularExpressionValidator = RegularExpressionValidator;
});
define("validators/uri.validator", ["require", "exports", "validators/property-validator"], function (require, exports, property_validator_16) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UriValidator = /** @class */ (function (_super) {
        __extends(UriValidator, _super);
        function UriValidator(errorMessage) {
            var _this = _super.call(this, errorMessage) || this;
            _this.errorMessageResourceName = "uri";
            return _this;
        }
        UriValidator.prototype.isValid = function (context) {
            if (context.propertyValue == undefined) {
                return true;
            }
            return uriRegExp.test(context.propertyValue);
        };
        return UriValidator;
    }(property_validator_16.PropertyValidator));
    exports.UriValidator = UriValidator;
    var uriRegExp = /^(https?|ftp):\/\/(((([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-zа-я]|\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\.)+(([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-zа-я]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\.?)(:\d*)?)(\/((([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\\uE000-\\uF8FF]|\/|\?)*)?(\#((([a-zа-я]|\d|-|\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;
});
define("validation-rule-configurator", ["require", "exports", "validators/property-validator", "validators/credit-card.validator", "validators/email.validator", "validators/equal.validator", "validators/exact-length.validator", "validators/exclusive-between.validator", "validators/greater-than-or-equal.validator", "validators/greater-than.validator", "validators/inclusive-between.validator", "validators/less-than-or-equal.validator", "validators/less-than.validator", "validators/max-length.validator", "validators/min-length.validator", "validators/not-empty.validator", "validators/not-equal.validator", "validators/not-null.validator", "validators/null.validator", "validators/phone.validator", "validators/predicate.validator", "validators/regular-expression.validator", "validators/uri.validator"], function (require, exports, property_validator_17, credit_card_validator_1, email_validator_1, equal_validator_1, exact_length_validator_1, exclusive_between_validator_1, greater_than_or_equal_validator_1, greater_than_validator_1, inclusive_between_validator_1, less_than_or_equal_validator_1, less_than_validator_1, max_length_validator_1, min_length_validator_1, not_empty_validator_1, not_equal_validator_1, not_null_validator_1, null_validator_1, phone_validator_1, predicate_validator_1, regular_expression_validator_1, uri_validator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Helper class that can be used to configure a validation rule. */
    var ValidationRuleConfigurator = /** @class */ (function () {
        /**
         * Initializes a new instance of the ValidationRuleConfigurator class.
         * @param rule Rule to be configured.
         */
        function ValidationRuleConfigurator(rule) {
            this._rule = rule;
        }
        /**
         * Сan be used to specify condition that control when the rule should execute.
         * @param predicate Condition.
         */
        ValidationRuleConfigurator.prototype.when = function (predicate) {
            this._rule.when.push(predicate);
            return this;
        };
        /**
         * Specifies a custom error message to use if validation fails.
         * @param errorMessage The error message to use.
         */
        ValidationRuleConfigurator.prototype.withMessage = function (errorMessage) {
            if (this._rule.propertyValidators.length > 0) {
                this._rule.propertyValidators[this._rule.propertyValidators.length - 1].errorMessage = errorMessage;
                return this;
            }
            throw "Can't set error message: validator list is empty.";
        };
        /**
         * Specifies a custom error message resource to use when validation fails.
         * @param resourceName The resource to use.
         */
        ValidationRuleConfigurator.prototype.withLocalizedMessage = function (resourceName) {
            if (this._rule.propertyValidators.length > 0) {
                this._rule.propertyValidators[this._rule.propertyValidators.length - 1].errorMessageResourceName = resourceName;
                return this;
            }
            throw "Can't set error message: validator list is empty.";
        };
        /**
         * Specifies a custom property name to use within the error message.
         * @param name Custom property name to use.
         */
        ValidationRuleConfigurator.prototype.withName = function (name) {
            this._rule.propertyDisplayName = name;
            return this;
        };
        /**
         * Defines a custom validator on the current rule builder.
         * @param validator Property or object validator instance.
         */
        ValidationRuleConfigurator.prototype.setValidator = function (validator) {
            if (validator instanceof property_validator_17.PropertyValidator) {
                this._rule.propertyValidators.push(validator);
            }
            else {
                this._rule.validators.push(validator);
            }
            return this;
        };
        /**
         * Defines a custom collection validator on the current rule builder.
         * @param validator Object validator to apply.
         */
        ValidationRuleConfigurator.prototype.setCollectionValidator = function (validator) {
            this._rule.collectionValidators.push(validator);
            return this;
        };
        /**
         * Defines a 'credit card' validator on the current rule.
         * Validation will fail if the property is not a credit card number.
         */
        ValidationRuleConfigurator.prototype.creditCard = function () {
            return this.setValidator(new credit_card_validator_1.CreditCardValidator());
        };
        /**
         * Defines an 'email' validator on the current rule.
         * Validation will fail if the property is not an email address.
         */
        ValidationRuleConfigurator.prototype.email = function () {
            return this.setValidator(new email_validator_1.EmailValidator());
        };
        /**
         * Defines an 'empty' validator on the current rule.
         * Validation will fail if the property is not null, not undefined, not whitespace, not zero and not an empty array.
         */
        ValidationRuleConfigurator.prototype.empty = function () {
            return this.setValidator(new not_null_validator_1.NotNullValidator());
        };
        /**
         * Defines an 'equal' validator on the current rule.
         * Validation will fail if the specified value is not equal to the value of the property.
         */
        ValidationRuleConfigurator.prototype.equal = function (valueToCompare) {
            return this.setValidator(new equal_validator_1.EqualValidator(valueToCompare));
        };
        /**
         * Defines an 'exact length' validator on the current rule.
         * Validation will fail if the length of the string is not equal to the length specified.
         * @param length Exact length.
         */
        ValidationRuleConfigurator.prototype.exactLength = function (length) {
            return this.setValidator(new exact_length_validator_1.ExactLengthValidator(length));
        };
        /**
         * Defines a 'exclusive between' validator on the current rule.
         * Validation will fail if the value of the property is outside of the specifed range. The range is exclusive.
         * @param min Minimum value.
         * @param max Maximum value.
         */
        ValidationRuleConfigurator.prototype.exclusiveBetween = function (min, max) {
            return this.setValidator(new exclusive_between_validator_1.ExclusiveBetweenValidator(min, max));
        };
        /**
         * Defines a 'greater than' validator on the current rule.
         * The validation will fail if the property value is less than or equal to the specified value.
         * @param min Minimum value.
         */
        ValidationRuleConfigurator.prototype.greaterThan = function (min) {
            return this.setValidator(new greater_than_validator_1.GreaterThanValidator(min));
        };
        /**
         * Defines a 'greater than or equal' validator on the current rule.
         * The validation will fail if the property value is less than the specified value.
         * @param min Minimum value.
         */
        ValidationRuleConfigurator.prototype.greaterThanOrEqual = function (min) {
            return this.setValidator(new greater_than_or_equal_validator_1.GreaterThanOrEqualValidator(min));
        };
        /**
         * Defines a 'inclusive between' validator on the current rule.
         * Validation will fail if the value of the property is outside of the specifed range. The range is inclusive.
         * @param min Minimum value.
         * @param max Maximum value.
         */
        ValidationRuleConfigurator.prototype.inclusiveBetween = function (min, max) {
            return this.setValidator(new inclusive_between_validator_1.InclusiveBetweenValidator(min, max));
        };
        /**
         * Defines a 'less than' validator on the current rule.
         * The validation will fail if the property value is more than or equal to the specified value.
         * @param max Maximum value.
         */
        ValidationRuleConfigurator.prototype.lessThan = function (max) {
            return this.setValidator(new less_than_validator_1.LessThanValidator(max));
        };
        /**
         * Defines a 'less than or equal' validator on the current rule.
         * The validation will fail if the property value is more than the specified value.
         * @param max Maximum value.
         */
        ValidationRuleConfigurator.prototype.lessThanOrEqual = function (max) {
            return this.setValidator(new less_than_or_equal_validator_1.LessThanOrEqualValidator(max));
        };
        /**
         * Defines a 'maximum length' validator on the current rule.
         * Validation will fail if the length of the string is more than the specified value.
         * @param maxLength Maximum length.
         */
        ValidationRuleConfigurator.prototype.maxLength = function (maxLength) {
            this.setValidator(new max_length_validator_1.MaxLengthValidator(maxLength));
            return this;
        };
        /**
         * Defines a 'minimum length' validator on the current rule.
         * Validation will fail if the length of the string is less than the specified value.
         * @param maxLength Maximum length.
         */
        ValidationRuleConfigurator.prototype.minLength = function (minLength) {
            this.setValidator(new min_length_validator_1.MinLengthValidator(minLength));
            return this;
        };
        /**
         * Defines an 'not empty' validator on the current rule.
         * Validation will fail if the property is null, undefined, whitespace, zero or an empty array.
         */
        ValidationRuleConfigurator.prototype.notEmpty = function () {
            return this.setValidator(new not_empty_validator_1.NotEmptyValidator());
        };
        /**
         * Defines a 'not equal' validator on the current rule.
         * Validation will fail if the specified value is equal to the value of the property.
         */
        ValidationRuleConfigurator.prototype.notEqual = function (valueToCompare) {
            return this.setValidator(new not_equal_validator_1.NotEqualValidator(valueToCompare));
        };
        /**
         * Defines a 'not null' validator on the current rule.
         * Validation will fail if the property is null or undefined.
         */
        ValidationRuleConfigurator.prototype.notNull = function () {
            return this.setValidator(new not_null_validator_1.NotNullValidator());
        };
        /**
         * Defines a 'null' validator on the current rule.
         * Validation will fail if the property is not null and not undefined.
         */
        ValidationRuleConfigurator.prototype.null = function () {
            return this.setValidator(new null_validator_1.NullValidator());
        };
        /**
         * Defines a 'phone' validator on the current rule.
         * Validation will fail if the property is not a well-formed phone number.
         */
        ValidationRuleConfigurator.prototype.phone = function () {
            return this.setValidator(new phone_validator_1.PhoneValidator());
        };
        /**
         * Defines a 'predicate' validator on the current rule.
         * Validation will fail if the specified function or lambda returns false.
         * @param predicate A function or lambda expression specifying the predicate.
         */
        ValidationRuleConfigurator.prototype.must = function (predicate) {
            return this.setValidator(new predicate_validator_1.PredicateValidator(predicate));
        };
        /**
         * Defines a 'regular expression' validator on the current rule.
         * The validation will fail if the property does not match the regular expression.
         * @param regularExpression The regular expression to check the value against.
         */
        ValidationRuleConfigurator.prototype.regularExpression = function (regularExpression) {
            return this.setValidator(new regular_expression_validator_1.RegularExpressionValidator(regularExpression));
        };
        /**
         * Defines an 'uri' validator on the current rule.
         * Validation will fail if the property is not a well-formed URI.
         */
        ValidationRuleConfigurator.prototype.uri = function () {
            return this.setValidator(new uri_validator_1.UriValidator());
        };
        return ValidationRuleConfigurator;
    }());
    exports.ValidationRuleConfigurator = ValidationRuleConfigurator;
});
define("validator-factory", ["require", "exports", "utils", "localization/language-manager", "validator-options"], function (require, exports, utils_5, language_manager_6, validator_options_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Factory for creating validators.
     * */
    var ValidatorFactory = /** @class */ (function () {
        function ValidatorFactory() {
        }
        /**
         * Gets a validator (singleton) of the specified type.
         * @param validatorType Type of the validator.
         */
        ValidatorFactory.getValidator = function (validatorType) {
            if (validatorType == null) {
                throw language_manager_6.LanguageManager.getLocalizedMessage("argumentNull", validator_options_4.ValidatorOptions.language, { parameterName: "validatorType" });
            }
            var validatorName = utils_5.getTypeName(validatorType);
            var validator = ValidatorFactory.validators[validatorName];
            if (validator == null) {
                validator = new validatorType();
                ValidatorFactory.validators[validatorName] = validator;
            }
            return validator;
        };
        /**
         * Performs validation.
         * @param instance Instance to validate.
         * @param validatorType Type of the validator.
         */
        ValidatorFactory.validate = function (instance, validatorType) {
            if (instance == null) {
                throw language_manager_6.LanguageManager.getLocalizedMessage("argumentNull", validator_options_4.ValidatorOptions.language, { parameterName: "instance" });
            }
            return ValidatorFactory.getValidator(validatorType).validate(instance);
        };
        /**
         * Performs validation and then throws an exception if validation fails.
         * @param instance Instance to validate.
         * @param validatorType Type of the validator.
         */
        ValidatorFactory.validateAndThrow = function (instance, validatorType) {
            if (instance == null) {
                throw language_manager_6.LanguageManager.getLocalizedMessage("argumentNull", validator_options_4.ValidatorOptions.language, { parameterName: "instance" });
            }
            return ValidatorFactory.getValidator(validatorType).validateAndThrow(instance);
        };
        ValidatorFactory.validators = {};
        return ValidatorFactory;
    }());
    exports.ValidatorFactory = ValidatorFactory;
});
