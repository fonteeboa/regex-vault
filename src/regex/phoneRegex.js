/**
 * @module phoneRegex
 * @description Padrões de regex para validação de números de telefone
 */

/**
 * Validação genérica de números de telefone (inclui código de país opcional)
 * 
 * @type {RegExp}
 * @example
 * phoneRegex.test("+55 (11) 91234-5678") // true
 * phoneRegex.test("(11) 9876-5432") // true
 * phoneRegex.test("12345") // false
 */
export const phoneRegex = /^\+?(\d{1,3})?\s?(\(?\d{2,3}\)?)?\s?(\d{4,5})[-.\s]?(\d{4})$/;

/**
 * Valida números de telefone com código de país obrigatório (e.g., +55 11 91234-5678)
 * 
 * @type {RegExp}
 * @example
 * phoneWithCountryCodeRegex.test("+55 11 91234-5678") // true
 * phoneWithCountryCodeRegex.test("(11) 91234-5678") // false
 */
export const phoneWithCountryCodeRegex = /^\+(\d{1,3})\s?(\d{1,3})?\s?(\d{3,5})[-.\s]?(\d{4})$/;

/**
 * Valida números de telefone no formato brasileiro (e.g., (11) 91234-5678)
 * 
 * @type {RegExp}
 * @example
 * brazilianPhoneRegex.test("(11) 91234-5678") // true
 * brazilianPhoneRegex.test("11 91234 5678") // true
 * brazilianPhoneRegex.test("12345678") // false
 */
export const brazilianPhoneRegex = /^\(?(\d{2})\)?[-.\s]?(\d{4,5})[-.\s]?(\d{4})$/;

/**
 * Valida números de telefone no formato americano (e.g., (123) 456-7890)
 * 
 * @type {RegExp}
 * @example
 * usPhoneRegex.test("(123) 456-7890") // true
 * usPhoneRegex.test("123.456.7890") // true
 * usPhoneRegex.test("12-3456-7890") // false
 */
export const usPhoneRegex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;

/**
 * Valida números de telefone sem caracteres especiais (apenas dígitos, e.g., 5511912345678)
 * 
 * @type {RegExp}
 * @example
 * plainPhoneRegex.test("5511912345678") // true
 * plainPhoneRegex.test("1234567890") // true
 * plainPhoneRegex.test("(11) 91234-5678") // false
 */
export const plainPhoneRegex = /^\d{8,15}$/;

/**
 * Valida números de telefone com extensão (e.g., +1-123-456-7890 x1234)
 * 
 * @type {RegExp}
 * @example
 * phoneWithExtensionRegex.test("+1-123-456-7890 x1234") // true
 * phoneWithExtensionRegex.test("+1-123-456-7890") // true
 */
export const phoneWithExtensionRegex = /^\+?(\d{1,3})?[-. (]?(\d{2,4})[-. )]?(\d{3,5})[-. ]?(\d{4})(?:\s?(x|ext)\s?\d{1,5})?$/;

/**
 * Valida números internacionais (formato E.164, e.g., +5511912345678)
 * 
 * @type {RegExp}
 * @example
 * internationalPhoneRegex.test("+5511912345678") // true
 * internationalPhoneRegex.test("+11234567890") // true
 * internationalPhoneRegex.test("5511912345678") // false
 */
export const internationalPhoneRegex = /^\+(\d{1,3})(\d{4,14})$/;
