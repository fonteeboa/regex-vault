/**
 * @module allowedChars
 * @description Padrões de regex para validação de caracteres permitidos
 */

/**
 * Corresponde a um conjunto definido de caracteres permitidos.
 * Permite: letras, números, espaços, @._-,:<>[]{}|
 * 
 * @type {RegExp}
 * @example
 * allowedCharsPattern.test("Hello_World@2024") // true
 * allowedCharsPattern.test("Invalid#Character!") // false
 */
export const allowedCharsPattern = /^[a-zA-Z0-9\s@._\-,:<>[\]{}|]*$/;

/**
 * Corresponde a caracteres alfanuméricos e espaços (nenhum caractere especial permitido)
 * 
 * @type {RegExp}
 * @example
 * alphanumericWithSpacePattern.test("Hello 123") // true
 * alphanumericWithSpacePattern.test("Hello 123!") // false
 */
export const alphanumericWithSpacePattern = /^[a-zA-Z0-9\s]*$/;

/**
 * Corresponde a caracteres alfanuméricos sem espaços
 * 
 * @type {RegExp}
 * @example
 * alphanumericNoSpacePattern.test("Hello123") // true
 * alphanumericNoSpacePattern.test("Hello 123") // false
 */
export const alphanumericNoSpacePattern = /^[a-zA-Z0-9]*$/;

/**
 * Corresponde a caracteres ASCII comuns e espaços (letras, números e caracteres como @._-)
 * 
 * @type {RegExp}
 * @example
 * commonAsciiPattern.test("Hello_123@.-") // true
 * commonAsciiPattern.test("Invalid$%^") // false
 */
export const commonAsciiPattern = /^[a-zA-Z0-9\s@._\-]*$/;

/**
 * Corresponde a caracteres alfanuméricos com símbolos adicionais específicos (!, #, $, %, &, *, +)
 * 
 * @type {RegExp}
 * @example
 * alphanumericWithSymbolsPattern.test("ValidText! #$ %&*+") // true
 * alphanumericWithSymbolsPattern.test("Invalid: {}|") // false
 */
export const alphanumericWithSymbolsPattern = /^[a-zA-Z0-9\s!#$%&*+]*$/;

/**
 * Permite apenas caracteres Unicode (incluindo letras e números de diferentes idiomas)
 * 
 * @type {RegExp}
 * @example
 * unicodeAllowedPattern.test("こんにちは世界 123") // true
 * unicodeAllowedPattern.test("Invalid@#*!") // false
 */
export const unicodeAllowedPattern = /^[\p{L}\p{N}\s@._\-,:<>[\]{}|]*$/u;

/**
 * Corresponde a caracteres imprimíveis de ASCII (exclui controle e caracteres não imprimíveis)
 * 
 * @type {RegExp}
 * @example
 * printableAsciiPattern.test("Valid ASCII!@#$%^&*()") // true
 * printableAsciiPattern.test("Text with newline\n") // false
 */
export const printableAsciiPattern = /^[\x20-\x7E]*$/;

/**
 * Permite apenas letras e números (sem espaços ou outros caracteres)
 * 
 * @type {RegExp}
 * @example
 * lettersAndNumbersPattern.test("OnlyLetters123") // true
 * lettersAndNumbersPattern.test("Space Not Allowed") // false
 */
export const lettersAndNumbersPattern = /^[a-zA-Z0-9]*$/;
