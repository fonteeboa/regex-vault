/**
 * @module noSql
 * @description Padrões de regex para detecção de injeção NoSQL
 */

/**
 * Valida código NOSQL (e.g., $where, $gt, $lt, $or)
 * Detecta operadores NoSQL que podem ser usados em ataques de injeção
 * 
 * @type {RegExp}
 * @example
 * noSQLIPattern.test("$where") // true
 * noSQLIPattern.test("$gt") // true
 * noSQLIPattern.test("where") // false
 */
export const noSQLIPattern = /(\$where|\$gt|\$lt|\$or|\\u0024(where|gt|lt|or))/i;