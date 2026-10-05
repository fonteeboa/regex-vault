/**
 * @module sql
 * @description Padrões de regex para detecção de injeção SQL
 */

/**
 * Valida código SQL (e.g., SELECT, INSERT, UPDATE, DELETE, DROP, UNION, TABLE, OR, AND, --, comentários, ")
 * Detecta comandos SQL que podem ser usados em ataques de injeção
 * 
 * @type {RegExp}
 * @example
 * sqlPattern.test("SELECT * FROM users") // true
 * sqlPattern.test("INSERT INTO table VALUES ('data')") // true
 * sqlPattern.test("This is a normal sentence") // false
 */
export const sqlPattern = /(?:^|\s|[;()]|\b)(?:SELECT(?:\s+(?:["'`][^"'`]+["'`]|\*|\w+)(?:\s*,\s*(?:["'`][^"'`]+["'`]|\*|\w+))*)?(?:\s+FROM(?!\s+(?:the|menu|store)\b)|\s+\*\s+FROM)|(?:INSERT\s+INTO|UPDATE\s+[\w_]+\s+SET|DELETE\s+FROM|DROP\s+TABLE|UNION\s+(?:ALL\s+)?SELECT|\bTABLE\s+\w+|(?:OR|AND)\s+(?:[\w\s-]*?[=<>]+[\s\d'"]+|[\w_]+\s*=\s*['"][^'"]*['"]|\w+\s*=\s*\d+)|\-\-|\/\*[\s\S]*?\*\/|;\s*(?:DROP|DELETE|UPDATE|INSERT))(?:\s|$|[;)]))/i;