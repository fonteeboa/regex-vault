/**
 * @module creditCardRegex
 * @description Padrões de regex para validação de cartões de crédito
 */

/**
 * Valida número de cartão de crédito (Visa, MasterCard, Amex, Discover, etc.)
 * 
 * @type {RegExp}
 * @example
 * creditCardRegex.test("4111111111111111") // true (Visa)
 * creditCardRegex.test("5500000000000004") // true (MasterCard)
 * creditCardRegex.test("1234567890123456") // false
 */
export const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;

/**
 * Valida data de expiração no formato MM/YY
 * 
 * @type {RegExp}
 * @example
 * expirationDateRegex.test("12/25") // true
 * expirationDateRegex.test("13/25") // false
 */
export const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

/**
 * Valida código de segurança (CVV) - 3 dígitos (Visa, MasterCard) ou 4 dígitos (Amex)
 * 
 * @type {RegExp}
 * @example
 * cvvRegex.test("123") // true
 * cvvRegex.test("1234") // true
 * cvvRegex.test("12") // false
 */
export const cvvRegex = /^[0-9]{3,4}$/;

/**
 * Valida nomes no cartão (letras maiúsculas, minúsculas, espaços e caracteres especiais como ' e -)
 * 
 * @type {RegExp}
 * @example
 * cardholderNameRegex.test("John Doe") // true
 * cardholderNameRegex.test("Ana-Maria O'Connor") // true
 */
export const cardholderNameRegex = /^[a-zA-Z\s'-]{2,50}$/;

/**
 * Valida bandeira Visa
 * 
 * @type {RegExp}
 * @example
 * visaRegex.test("4111111111111111") // true
 * visaRegex.test("5500000000000004") // false
 */
export const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

/**
 * Valida bandeira MasterCard
 * 
 * @type {RegExp}
 * @example
 * masterCardRegex.test("5500000000000004") // true
 * masterCardRegex.test("4111111111111111") // false
 */
export const masterCardRegex = /^5[1-5][0-9]{14}$/;

/**
 * Valida bandeira American Express
 * 
 * @type {RegExp}
 * @example
 * amexRegex.test("340000000000009") // true
 * amexRegex.test("4111111111111111") // false
 */
export const amexRegex = /^3[47][0-9]{13}$/;

/**
 * Valida bandeira Discover
 * 
 * @type {RegExp}
 * @example
 * discoverRegex.test("6011000000000004") // true
 * discoverRegex.test("4111111111111111") // false
 */
export const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

/**
 * Valida bandeira Diners Club
 * 
 * @type {RegExp}
 * @example
 * dinersClubRegex.test("30569309025904") // true
 * dinersClubRegex.test("4111111111111111") // false
 */
export const dinersClubRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;

/**
 * Valida bandeira JCB
 * 
 * @type {RegExp}
 * @example
 * jcbRegex.test("3565399190803384") // true
 * jcbRegex.test("4111111111111111") // false
 */
export const jcbRegex = /^(?:2131|1800|35\d{3})\d{11}$/;