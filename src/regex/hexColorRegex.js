/**
 * @module hexColorRegex
 * @description Padrões de regex para validação de cores
 */

/**
 * Valida cores hexadecimais no formato #RRGGBB ou #RGB (com ou sem #)
 * 
 * @type {RegExp}
 * @example
 * hexColorRegex.test("#fff") // true
 * hexColorRegex.test("#FFFFFF") // true
 * hexColorRegex.test("#12345") // false
 */
export const hexColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

/**
 * Valida cores hexadecimais no formato #RRGGBB (6 caracteres, com ou sem #)
 * 
 * @type {RegExp}
 * @example
 * hexColor6Regex.test("#FFFFFF") // true
 * hexColor6Regex.test("FFFFFF") // true
 * hexColor6Regex.test("#FFF") // false
 */
export const hexColor6Regex = /^#?([a-fA-F0-9]{6})$/;

/**
 * Valida cores hexadecimais no formato #RGB (3 caracteres, com ou sem #)
 * 
 * @type {RegExp}
 * @example
 * hexColor3Regex.test("#fff") // true
 * hexColor3Regex.test("fff") // true
 * hexColor3Regex.test("#ffff") // false
 */
export const hexColor3Regex = /^#?([a-fA-F0-9]{3})$/;

/**
 * Valida cores RGB no formato rgb(r, g, b) (valores de 0 a 255)
 * 
 * @type {RegExp}
 * @example
 * rgbColorRegex.test("rgb(255, 0, 0)") // true
 * rgbColorRegex.test("rgb(0, 255, 123)") // true
 * rgbColorRegex.test("rgb(256, 0, 0)") // false
 */
export const rgbColorRegex = /^rgb\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*\)$/;

/**
 * Valida cores RGBA no formato rgba(r, g, b, a) (valores de 0 a 255 e alpha de 0 a 1)
 * 
 * @type {RegExp}
 * @example
 * rgbaColorRegex.test("rgba(255, 0, 0, 0.5)") // true
 * rgbaColorRegex.test("rgba(0, 255, 123, 1)") // true
 * rgbaColorRegex.test("rgba(256, 0, 0, 1)") // false
 */
export const rgbaColorRegex = /^rgba\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(0|0?\.\d+|1(\.0)?)\s*\)$/;

/**
 * Valida cores HSL no formato hsl(h, s%, l%) (h: 0-360, s e l: 0-100%)
 * 
 * @type {RegExp}
 * @example
 * hslColorRegex.test("hsl(360, 100%, 50%)") // true
 * hslColorRegex.test("hsl(0, 50%, 25%)") // true
 * hslColorRegex.test("hsl(361, 50%, 50%)") // false
 */
export const hslColorRegex = /^hsl\(\s*(360|3[0-5][0-9]|[12]?[0-9]{1,2})\s*,\s*(100|[0-9]?[0-9])%\s*,\s*(100|[0-9]?[0-9])%\s*\)$/;

/**
 * Valida cores HSLA no formato hsla(h, s%, l%, a) (alpha de 0 a 1)
 * 
 * @type {RegExp}
 * @example
 * hslaColorRegex.test("hsla(360, 100%, 50%, 0.5)") // true
 * hslaColorRegex.test("hsla(0, 50%, 25%, 1)") // true
 * hslaColorRegex.test("hsla(361, 50%, 50%, 1)") // false
 */
export const hslaColorRegex = /^hsla\(\s*(360|3[0-5][0-9]|[12]?[0-9]{1,2})\s*,\s*(100|[0-9]?[0-9])%\s*,\s*(100|[0-9]?[0-9])%\s*,\s*(0|0?\.\d+|1(\.0)?)\s*\)$/;
