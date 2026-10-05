/**
 * @module postalCodeRegex
 * @description Padrões de regex para validação de códigos postais
 */

/**
 * Valida CEP no Brasil (formato 12345-678 ou 12345678)
 * 
 * @type {RegExp}
 * @example
 * postalCodeBrazilRegex.test("12345-678") // true
 * postalCodeBrazilRegex.test("12345678") // true
 * postalCodeBrazilRegex.test("1234-678") // false
 */
export const postalCodeBrazilRegex = /^\d{5}-?\d{3}$/;

/**
 * Valida ZIP Code nos EUA (formato 12345 ou 12345-6789)
 * 
 * @type {RegExp}
 * @example
 * postalCodeUSRegex.test("12345") // true
 * postalCodeUSRegex.test("12345-6789") // true
 * postalCodeUSRegex.test("1234") // false
 */
export const postalCodeUSRegex = /^\d{5}(-\d{4})?$/;

/**
 * Valida códigos postais no Canadá (formato A1A 1A1 ou A1A1A1)
 * 
 * @type {RegExp}
 * @example
 * postalCodeCanadaRegex.test("A1A 1A1") // true
 * postalCodeCanadaRegex.test("A1A1A1") // true
 * postalCodeCanadaRegex.test("123 456") // false
 */
export const postalCodeCanadaRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

/**
 * Valida códigos postais no Reino Unido (formato EC1A 1BB ou EC1A1BB)
 * 
 * @type {RegExp}
 * @example
 * postalCodeUKRegex.test("EC1A 1BB") // true
 * postalCodeUKRegex.test("EC1A1BB") // true
 * postalCodeUKRegex.test("123 456") // false
 */
export const postalCodeUKRegex = /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/;

/**
 * Valida códigos postais na Austrália (formato 1234)
 * 
 * @type {RegExp}
 * @example
 * postalCodeAustraliaRegex.test("1234") // true
 * postalCodeAustraliaRegex.test("12345") // false
 */
export const postalCodeAustraliaRegex = /^\d{4}$/;

/**
 * Valida códigos postais na Alemanha (formato 12345)
 * 
 * @type {RegExp}
 * @example
 * postalCodeGermanyRegex.test("12345") // true
 * postalCodeGermanyRegex.test("1234") // false
 */
export const postalCodeGermanyRegex = /^\d{5}$/;

/**
 * Valida códigos postais na França (formato 12345)
 * 
 * @type {RegExp}
 * @example
 * postalCodeFranceRegex.test("12345") // true
 * postalCodeFranceRegex.test("1234") // false
 */
export const postalCodeFranceRegex = /^\d{5}$/;

/**
 * Valida códigos postais na Índia (formato 123456)
 * 
 * @type {RegExp}
 * @example
 * postalCodeIndiaRegex.test("123456") // true
 * postalCodeIndiaRegex.test("12345") // false
 */
export const postalCodeIndiaRegex = /^\d{6}$/;

/**
 * Valida códigos postais na Itália (formato 12345)
 * 
 * @type {RegExp}
 * @example
 * postalCodeItalyRegex.test("12345") // true
 * postalCodeItalyRegex.test("1234") // false
 */
export const postalCodeItalyRegex = /^\d{5}$/;

/**
 * Valida códigos postais genéricos (mínimo de 3 até 10 caracteres alfanuméricos)
 * 
 * @type {RegExp}
 * @example
 * genericPostalCodeRegex.test("ABC123") // true
 * genericPostalCodeRegex.test("AB") // false
 */
export const genericPostalCodeRegex = /^[A-Za-z0-9]{3,10}$/;
