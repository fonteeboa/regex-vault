/**
 * @module xssPatterns
 * @description Padrões de regex para detecção de XSS e injeção de JavaScript
 */

/**
 * Valida XSS e Injeção de JavaScript em strings de texto e HTML.
 * Detecta tags <script>, atributos de evento (onerror, onload, etc.) e URLs javascript:
 * 
 * @type {RegExp}
 * @example
 * xssPattern.test("<script>alert('XSS')</script>") // true
 * xssPattern.test("<img src='x' onerror='alert(1)'>") // true
 * xssPattern.test("<p>Safe text</p>") // false
 */
export const xssPattern = /<script[^>]*?(?:src\s*=|>[\s\S]*?)(?:<\/script>)?|<[^>]*?(?:onerror|onload|onclick|onmouseover|onfocus|onblur|onabort|onchange|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseup|onreset|onresize|onselect|onsubmit|onunload)\s*=|javascript:\s*[^\s]*/i;

/**
 * Valida URLs com `javascript:` que podem ser usadas para ataques de injeção de JavaScript.
 * Detecta atributos de evento e URLs javascript: em tags HTML.
 * 
 * @type {RegExp}
 * @example
 * jsPattern.test("<a href='javascript:alert(1)'>Click</a>") // true
 * jsPattern.test("<iframe src='javascript:stealData()'></iframe>") // true
 * jsPattern.test("<p>Safe text</p>") // false
 */
export const jsPattern = /<[^>]+(?:(?:on(?:abort|blur|change|click|dblclick|error|focus|keydown|keypress|keyup|load|mousedown|mousemove|mouseout|mouseover|mouseup|reset|resize|select|submit|unload)\s*=)|javascript:)[^>]*/i;
