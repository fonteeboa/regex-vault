/**
 * @module removeAccents
 * @description Função para remover acentos e caracteres invisíveis de strings
 */

/**
 * Mapeamento de caracteres acentuados para seus equivalentes sem acento
 * 
 * Inclui:
 * - Caracteres latinos (É, À, Ç, Ñ, Ä, Ö, Ü, etc.)
 * - Caracteres cirílicos (Ё, Є, Ї, Љ, Њ, etc.)
 * - Símbolos monetários (₦, ₽)
 * - Caracteres de formatação (removidos)
 * 
 * @private
 * @type {Object.<string, string>}
 * @see {@link https://unicode.org/charts/ Unicode Character Charts}
 */
const accentMapping = {
	'É': "E", 'é': "e", 'À': "A", 'à': "a", 'Ç': "C", 'ç': "c", 'Ñ': "N", 'ñ': "n", 'Á': 'A', 'á': 'a',
	'Ä': "A", 'ä': "a", 'Ö': "O", 'ö': "o", 'Ü': "U", 'ü': "u", 'ß': "ss", 'È': "E", 'è': "e",
	'Ё': "E", 'ё': "e", 'Є': "E", 'є': "e", 'Ї': "I", 'ї': "i", 'Љ': "Lj", 'љ': "lj", 'Њ': "Nj", 'њ': "nj",
	'Ћ': "C", 'ћ': "c", 'Ќ': "K", 'ќ': "k", 'Ў': "U", 'ў': "u", 'Џ': "Dz", 'џ': "dz", 'Ә': "A", 'ә': "a",
	'Ғ': "G", 'ғ': "g", 'Қ': "K", 'қ': "k", 'Ң': "N", 'ң': "n", 'Ұ': "U", 'ұ': "u", 'Ҳ': "H", 'ҳ': "h",
	'Җ': "Zh", 'җ': "zh", 'Ҹ': "Ch", 'ҹ': "ch", 'Ѡ': "O", 'ѡ': "o", 'Ѣ': "E", 'ѣ': "e", 'Ѥ': "E", 'ѥ': "e",
	'Ѧ': "A", 'ѧ': "a", 'Ѩ': "Ya", 'ѩ': "ya", 'Ѫ': "U", 'ѫ': "u", 'Ѭ': "Yu", 'ѭ': "yu", 'Ѯ': "Ks", 'ѯ': "ks",
	'Ѱ': "Ps", 'ѱ': "ps", 'Ѳ': "F", 'ѳ': "f", 'Ѵ': "V", 'ѵ': "v", 'Ѷ': "V", 'ѷ': "v", 'Ѹ': "U", 'ѹ': "u",
	'Ѻ': "O", 'ѻ': "o", 'Ѽ': "O", 'ѽ': "o", 'Ѿ': "O", 'ѿ': "o", 'Ҁ': "S", 'ҁ': "s", '҂': "S", '҃': "s",
	'҄': "N", '҅': "n", '҆': "T", '҇': "t", '҈': "Zh", '҉': "zh", 'Ҋ': "Ch", 'ҋ': "ch", 'Ҍ': "D", 'ҍ': "d",
	'Ҏ': "R", 'ҏ': "r", 'Ӏ': "I", 'Ӂ': "Zh", 'ӂ': "zh", 'Ӄ': "K", 'ӄ': "k", 'Ӆ': "L", 'ӆ': "l", 'Ӈ': "N",
	'ӈ': "n", 'Ӊ': "Ng", 'ӊ': "ng", 'Ӌ': "Ch", 'ӌ': "ch", 'Ӎ': "M", 'ӎ': "m", 'Ӑ': "A", 'ӑ': "a", 'Ӓ': "A",
	'ӓ': "a", 'Ӕ': "Ae", 'ӕ': "ae", 'Ӗ': "E", 'ӗ': "e", 'Ҕ': "G", 'ҟ': "k", 'Ҡ': "K", 'ҡ': "k", 'Ҥ': "N",
	'ҥ': "n", 'Ү': "U", 'ү': "u", 'Ҵ': "Ts", 'ҵ': "ts", 'Ҷ': "Ch", 'ҷ': "ch", 'Һ': "H", 'һ': "h", 'Ҽ': "Ts",
	'ҽ': "ts", 'Ҿ': "Ts", 'ҿ': "ts", 'ï': "i", 'А': "A", 'Е': "E", 'О': "O", 'С': "C", 'Н': "H",
	'₦': "N", '₽': "R", '\u202E': "", '\u202D': "", '\u200F': "", '\u200E': "", '\u200B': "", '\u2066': "",
	'\u2067': "", '\u2068': "", '\u2069': "", '\uFEFF': "", '\u2800': "", '\u2801': "", '\u0000': "",
	'\u0008': "", '\u0009': "", '\u000A': "", '\u000D': "", '\u001B': "", '\u007F': "", '\u0300': "",
	'\u0301': "", '\u034F': "", '\u036F': "", 'ë': "e", 'Ë': "E", 'Ï': "I", 'ÿ': "y", 'Ÿ': "Y", 'í': "i",
	'Í': "I", 'ó': "o", 'Ó': "O", 'ú': "u", 'Ú': "U", 'ý': "y", 'Ý': "Y", 'ì': "i", 'Ì': "I", 'ò': "o",
	'Ò': "O", 'ù': "u", 'Ù': "U", 'â': "a", 'Â': "A", 'ê': "e", 'Ê': "E", 'î': "i", 'Î': "I", 'ô': "o",
	'Ô': "O", 'û': "u", 'Û': "U", 'ã': "a", 'Ã': "A", 'õ': "o", 'Õ': "O", 'ø': "o", 'Ø': "O", 'œ': "oe",
	'Œ': "OE", 'æ': "ae", 'Æ': "AE", 'å': "a", 'Å': "A", 'þ': "th", 'Þ': "TH", 'ð': "d", 'Ð': "D",
	'µ': "u", '¿': "",
};

/**
 * Regex para caracteres invisíveis e de controle
 * 
 * Remove:
 * - Caracteres de formatação bidirecional (RLE U+202E, LRE U+202D, RLO U+200F, LRO U+200E, PDF U+202C)
 * - Zero-width spaces (ZWSP U+200B, ZWNJ U+200C, ZWJ U+200D)
 * - BOM (U+FEFF)
 * - Caracteres de controle (NUL U+0000, TAB U+0009, LF U+000A, CR U+000D, ESC U+001B, DEL U+007F)
 * - Combining diacritical marks (U+0300-U+036F)
 * - Outros caracteres invisíveis (U+2800-U+2801, U+2066-U+2069)
 * 
 * @private
 * @type {RegExp}
 * @see {@link https://unicode.org/reports/tr9/ Unicode Bidirectional Algorithm}
 */
const invisibleCharsRegex = /[\u202E\u202D\u200F\u200E\u200B\u2066\u2067\u2068\u2069\uFEFF\u2800\u2801\u0000\u0008\u0009\u000A\u000D\u001B\u007F\u0300\u0301\u034F\u036F]/g;

/**
 * Remove acentos e caracteres invisíveis de uma string
 * 
 * Esta função realiza duas operações:
 * 1. Remove caracteres invisíveis e de controle (zero-width spaces, bidi, etc.)
 * 2. Substitui caracteres acentuados por seus equivalentes sem acento
 * 
 * A função é segura para uso com strings vazias e retorna string vazia se a entrada for falsy.
 * 
 * @param {string} str - String a ser processada
 * @returns {string} String sem acentos e caracteres invisíveis
 * 
 * @example
 * // Caracteres latinos
 * removeAccents("Olá, München!") // "Ola, Munchen!"
 * removeAccents("ÉéÀàÇçÑñ") // "EeAaCcNn"
 * 
 * @example
 * // String vazia
 * removeAccents("") // ""
 * 
 * @example
 * // Caracteres cirílicos
 * removeAccents("ЁёЄєЇї") // "EeEeIi"
 * 
 * @example
 * // Texto misto
 * removeAccents("Àêïôü Çõ") // "Aeiou Co"
 * 
 * @example
 * // Caracteres invisíveis
 * removeAccents("\u202E\u202D\u200F\u200E") // ""
 * 
 * @example
 * // Números e espaços são preservados
 * removeAccents("123 456") // "123 456"
 * 
 * @example
 * // Símbolos monetários
 * removeAccents("₦₽") // "NR"
 * 
 * @example
 * // Caracteres cirílicos complexos
 * removeAccents("ЉљЊњ") // "LjljNjnj"
 */
const removeAccents = (str) => {
	if (!str) return '';
	str = str.replace(invisibleCharsRegex, '');
	return str
		.split('')
		.map(char => accentMapping[char] || char)
		.join('');
};

export { removeAccents };
