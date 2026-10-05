/**
 * @module urlRegex
 * @description Padrões de regex para validação de URLs
 */

/**
 * Valida URLs genéricas (com ou sem protocolo)
 * 
 * @type {RegExp}
 * @example
 * urlRegex.test("example.com") // true
 * urlRegex.test("https://example.com") // true
 * urlRegex.test("htp://example.com") // false
 */
export const urlRegex = /^(https?:\/\/)?([\w\d-]+)\.([a-z\.]{2,6})([\/\w\d\-\.]*)*\/?$/i;

/**
 * Valida URLs completas com protocolo obrigatório (http ou https)
 * 
 * @type {RegExp}
 * @example
 * urlWithProtocolRegex.test("https://example.com") // true
 * urlWithProtocolRegex.test("example.com") // false
 */
export const urlWithProtocolRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6})([\/\w\d\-\.]*)*\/?$/i;

/**
 * Valida URLs que terminam com um caminho ou recurso específico
 * 
 * @type {RegExp}
 * @example
 * urlWithPathRegex.test("https://example.com/path/to/resource") // true
 * urlWithPathRegex.test("https://example.com") // false
 */
export const urlWithPathRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6})\/([\/\w\d\-\.]+)$/i;

/**
 * Valida URLs com query strings (e.g., ?key=value&key2=value2)
 * 
 * @type {RegExp}
 * @example
 * urlWithQueryStringRegex.test("https://example.com?key=value") // true
 * urlWithQueryStringRegex.test("https://example.com") // false
 */
export const urlWithQueryStringRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6})(\/[\/\w\d\-\.]*)?(\?[&\w\d=]*)?$/i;

/**
 * Valida URLs com fragmentos (e.g., #section)
 * 
 * @type {RegExp}
 * @example
 * urlWithFragmentRegex.test("https://example.com#section") // true
 * urlWithFragmentRegex.test("https://example.com") // false
 */
export const urlWithFragmentRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6})([\/\w\d\-\.]*)?(#[\w\d-]*)?$/i;

/**
 * Valida URLs IP-based (e.g., http://192.168.1.1/path)
 * 
 * @type {RegExp}
 * @example
 * urlWithIPRegex.test("http://192.168.1.1/path") // true
 * urlWithIPRegex.test("http://example.com") // false
 */
export const urlWithIPRegex = /^https?:\/\/(\d{1,3}\.){3}\d{1,3}(:\d+)?(\/[\/\w\d\-\.]*)?$/i;

/**
 * Valida URLs localhost (e.g., http://localhost:3000/path)
 * 
 * @type {RegExp}
 * @example
 * urlLocalhostRegex.test("http://localhost:3000/path") // true
 * urlLocalhostRegex.test("http://example.com") // false
 */
export const urlLocalhostRegex = /^https?:\/\/localhost(:\d+)?(\/[\/\w\d\-\.]*)?$/i;

/**
 * Valida URLs seguras (somente https)
 * 
 * @type {RegExp}
 * @example
 * secureUrlRegex.test("https://example.com") // true
 * secureUrlRegex.test("http://example.com") // false
 */
export const secureUrlRegex = /^https:\/\/([\w\d-]+)\.([a-z\.]{2,6})([\/\w\d\-\.]*)*\/?$/i;

/**
 * Valida URLs com portas especificadas (e.g., http://example.com:8080)
 * 
 * @type {RegExp}
 * @example
 * urlWithPortRegex.test("http://example.com:8080") // true
 * urlWithPortRegex.test("http://example.com") // false
 */
export const urlWithPortRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6}):\d{1,5}(\/[\/\w\d\-\.]*)*\/?$/i;
