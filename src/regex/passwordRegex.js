/**
 * @module passwordRegex
 * @description Padrões de regex para validação de senhas
 */

/**
 * Valida senhas fortes (mínimo 8 caracteres, uma letra minúscula, uma maiúscula, um número e um caractere especial)
 * 
 * @type {RegExp}
 * @example
 * passwordRegex.test("Aa1@abcd") // true
 * passwordRegex.test("password") // false
 */
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,128}$/;

/**
 * Valida senhas médias (mínimo 8 caracteres, contendo pelo menos letras e números)
 * 
 * @type {RegExp}
 * @example
 * mediumPasswordRegex.test("abcd1234") // true
 * mediumPasswordRegex.test("password") // false
 */
export const mediumPasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

/**
 * Valida senhas simples (mínimo 8 caracteres, sem outros requisitos)
 * 
 * @type {RegExp}
 * @example
 * simplePasswordRegex.test("abcd1234") // true
 * simplePasswordRegex.test("abc") // false
 */
export const simplePasswordRegex = /^.{8,}$/;

/**
 * Valida senhas com comprimento mínimo e máximo (8-16 caracteres)
 * 
 * @type {RegExp}
 * @example
 * passwordLengthRegex.test("abcd1234") // true
 * passwordLengthRegex.test("abc") // false
 */
export const passwordLengthRegex = /^.{8,16}$/;

/**
 * Valida senhas contendo apenas letras e números (alfanuméricas)
 * 
 * @type {RegExp}
 * @example
 * alphanumericPasswordRegex.test("abcd1234") // true
 * alphanumericPasswordRegex.test("abcd123!") // false
 */
export const alphanumericPasswordRegex = /^[a-zA-Z0-9]{8,}$/;

/**
 * Valida senhas sem caracteres especiais (apenas letras, números e espaços permitidos)
 * 
 * @type {RegExp}
 * @example
 * noSpecialCharsPasswordRegex.test("abcd1234") // true
 * noSpecialCharsPasswordRegex.test("abcd123!") // false
 */
export const noSpecialCharsPasswordRegex = /^[a-zA-Z0-9\s]{8,}$/;

/**
 * Valida senhas que devem conter pelo menos 12 caracteres, com pelo menos 3 tipos de caracteres (letras maiúsculas, minúsculas, números ou símbolos)
 * 
 * @type {RegExp}
 * @example
 * advancedPasswordRegex.test("StrongPassword2023!") // true
 * advancedPasswordRegex.test("Short1!") // false
 */
export const advancedPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;

/**
 * Valida senhas que não podem conter espaços em branco
 * 
 * @type {RegExp}
 * @example
 * noWhitespacePasswordRegex.test("NoSpaces123!") // true
 * noWhitespacePasswordRegex.test("With Spaces1!") // false
 */
export const noWhitespacePasswordRegex = /^\S{8,}$/;
