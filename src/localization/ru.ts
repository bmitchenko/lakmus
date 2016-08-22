import { LanguageManager } from "./language-manager";

LanguageManager.registerLanguage("ru", {
    argumentNull:       "Значение не может быть неопределенным. Имя параметра: {parameterName}.",
    creditCard:         "Поле {name} не содержит допустимый номер кредитной карты.",
    email:              "Поле {name} не содержит допустимый адрес электронной почты.",
    empty:              "Поле {name} должно быть пустым.",
    equal:              "Поле {name} должно содержать значение '{comparisonValue}'.",
    exactLength:        "Поле {name} должно содержать строку длиною {exactLength}.",
    exclusiveBetween:   "Значение поля {name} должно быть в пределах от {min} до {max}.",
    greaterThan:        "Значение поля {name} должно быть больше {min}.",
    greaterThanOrEqual: "Значение поля {name} должно быть больше либо равно {min}.",
    inclusiveBetween:   "Значение поля {name} должно быть в пределах от {min} до {max} включительно.",
    invalidField:       "Поле {name} содержит недопустимое значение.",
    invalidFieldType:   "Тип данных поля {name} должен быть '{expectedType}'. Обнаружено значение: '{type}'.", 
    lessThan:           "Значение поля {name} должно быть меньше {max}.",
    lessThanOrEquals:   "Значение поля {name} должно быть меньше либо равно {max}.",
    maxLength:          "Поле {name} должно содержать строку с максимальной длиной {maxLength}.",
    minLength:          "Поле {name} должно содержать строку с минимальной длиной {minLength}.",
    notEmpty:           "Требуется поле {name}.",
    notEqual:           "Поле {name} не должно содержать значение '{comparisonValue}'.",
    notNull:            "Требуется поле {name}.",
    null:               "Поле {name} должно быть пустым.",
    phone:              "Поле {name} не содержит допустимый номер телефона.",
    predicate:          "Поле {name} содержит недопустимое значение.",
    regularExpression:  "Поле {name} должно соответствовать регулярному выражению '{regularExpression}'.",
    uri:                "Поле {name} не содержит допустимый полный URL-адрес http, https или ftp."
});