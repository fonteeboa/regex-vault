/**
 * @module ipRegex
 * @description Padrões de regex para validação de endereços IP
 */

/**
 * Valida endereços IPv4
 * 
 * @type {RegExp}
 * @example
 * ipv4Regex.test("192.168.1.1") // true
 * ipv4Regex.test("256.0.0.1") // false
 */
export const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/;

/**
 * Valida endereços IPv6
 * 
 * @type {RegExp}
 * @example
 * ipv6Regex.test("2001:db8::ff00:42:8329") // true
 * ipv6Regex.test("2001::db8::1") // false
 */
export const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9]))|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])))$/;

/**
 * Valida endereços IPv4 com máscara de sub-rede (e.g., 192.168.0.1/24)
 * 
 * @type {RegExp}
 * @example
 * ipv4WithCidrRegex.test("192.168.1.1/24") // true
 * ipv4WithCidrRegex.test("192.168.1.1/33") // false
 */
export const ipv4WithCidrRegex = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)(\/([0-9]|[12][0-9]|3[0-2]))$/;

/**
 * Valida endereços IPv6 com máscara de sub-rede (e.g., 2001:db8::/32)
 * 
 * @type {RegExp}
 * @example
 * ipv6WithCidrRegex.test("2001:db8::/32") // true
 * ipv6WithCidrRegex.test("2001:db8::/129") // false
 */
export const ipv6WithCidrRegex = /^(([0-9a-fA-F]{1,4}:){1,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(0|[1-9][0-9]?|1[0-1][0-9]|12[0-8])$/;

/**
 * Valida endereços IPv4 locais (127.0.0.1)
 * 
 * @type {RegExp}
 * @example
 * ipv4LocalRegex.test("127.0.0.1") // true
 * ipv4LocalRegex.test("192.168.1.1") // false
 */
export const ipv4LocalRegex = /^127\.0\.0\.1$/;

/**
 * Valida endereços IPv6 locais (::1)
 * 
 * @type {RegExp}
 * @example
 * ipv6LocalRegex.test("::1") // true
 * ipv6LocalRegex.test("2001:db8::1") // false
 */
export const ipv6LocalRegex = /^::1$/;

/**
 * Valida qualquer endereço IP (IPv4 ou IPv6)
 * 
 * @type {RegExp}
 * @example
 * ipRegex.test("192.168.1.1") // true
 * ipRegex.test("2001:db8::ff00:42:8329") // true
 * ipRegex.test("invalid") // false
 */
export const ipRegex = new RegExp(`(${ipv4Regex.source})|(${ipv6Regex.source})`);
