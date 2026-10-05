/**
 * @module usernameRegex
 * @description Padrões de regex para validação de usernames
 */

/**
 * Valida usernames básicos (3-16 caracteres, letras, números, underscores e hifens)
 * 
 * @type {RegExp}
 * @example
 * usernameRegex.test("user123") // true
 * usernameRegex.test("test_user") // true
 * usernameRegex.test("ab") // false
 */
export const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

/**
 * Valida usernames com apenas letras e números (3-16 caracteres)
 * 
 * @type {RegExp}
 * @example
 * alphanumericUsernameRegex.test("user123") // true
 * alphanumericUsernameRegex.test("TestUser") // true
 * alphanumericUsernameRegex.test("user_123") // false
 */
export const alphanumericUsernameRegex = /^[a-zA-Z0-9]{3,16}$/;

/**
 * Valida usernames que começam com uma letra e permitem números, underscores e hifens (3-16 caracteres)
 * 
 * @type {RegExp}
 * @example
 * usernameWithLetterStartRegex.test("A123") // true
 * usernameWithLetterStartRegex.test("TestUser") // true
 * usernameWithLetterStartRegex.test("1User") // false
 */
export const usernameWithLetterStartRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;

/**
 * Valida usernames que não permitem underscores ou hifens consecutivos
 * 
 * @type {RegExp}
 * @example
 * usernameNoConsecutiveSpecialCharsRegex.test("user-123") // true
 * usernameNoConsecutiveSpecialCharsRegex.test("valid_name") // true
 * usernameNoConsecutiveSpecialCharsRegex.test("user--123") // false
 */
export const usernameNoConsecutiveSpecialCharsRegex = /^(?!.*[_-]{2})[a-zA-Z0-9_-]{3,16}$/;

/**
 * Valida usernames que aceitam letras minúsculas apenas (3-16 caracteres)
 * 
 * @type {RegExp}
 * @example
 * lowercaseUsernameRegex.test("user123") // true
 * lowercaseUsernameRegex.test("testuser") // true
 * lowercaseUsernameRegex.test("TestUser") // false
 */
export const lowercaseUsernameRegex = /^[a-z0-9_-]{3,16}$/;

/**
 * Valida usernames que aceitam letras maiúsculas apenas (3-16 caracteres)
 * 
 * @type {RegExp}
 * @example
 * uppercaseUsernameRegex.test("USER123") // true
 * uppercaseUsernameRegex.test("TESTUSER") // true
 * uppercaseUsernameRegex.test("TestUser") // false
 */
export const uppercaseUsernameRegex = /^[A-Z0-9_-]{3,16}$/;

/**
 * Valida usernames que permitem emojis ou caracteres unicode
 * 
 * @type {RegExp}
 * @example
 * unicodeUsernameRegex.test("user123") // true
 * unicodeUsernameRegex.test("ユーザー") // true
 */
export const unicodeUsernameRegex = /^[\w\d\p{L}\p{N}_-]{3,16}$/u;

/**
 * Valida usernames que permitem até 32 caracteres
 * 
 * @type {RegExp}
 * @example
 * longUsernameRegex.test("user123") // true
 * longUsernameRegex.test("verylongusernamethatexceeds") // true
 * longUsernameRegex.test("ab") // false
 */
export const longUsernameRegex = /^[a-zA-Z0-9_-]{3,32}$/;

/**
 * Valida usernames que aceitam apenas caracteres alfabéticos (sem números ou símbolos)
 * 
 * @type {RegExp}
 * @example
 * alphabeticUsernameRegex.test("username") // true
 * alphabeticUsernameRegex.test("testuser") // true
 * alphabeticUsernameRegex.test("user123") // false
 */
export const alphabeticUsernameRegex = /^[a-zA-Z]{3,16}$/;
