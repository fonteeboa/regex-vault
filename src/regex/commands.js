/**
 * @module commands
 * @description Padrões de regex para detecção de comandos perigosos
 */

/**
 * Valida comandos comuns perigosos
 * Detecta comandos que podem ser usados para ataques ou operações perigosas
 * 
 * @type {RegExp}
 * @example
 * commonDangerousFunctions.test("rm -rf /") // true
 * commonDangerousFunctions.test("sudo reboot") // true
 * commonDangerousFunctions.test("echo Hello World") // false
 */
export const commonDangerousFunctions = /\b(?:eval|exec|system|spawn|cat|fsck|touch|rm|sudo|chmod|chown|kill|ps|curl|wget|bash|python|perl|php|ruby|nmap|traceroute|ifconfig|iptables|service|reboot|halt|shutdown|taskkill|tasklist|ipconfig|nslookup|reg|powershell|diskpart|dir|rd|del|findstr|ping|ftp|tftp|cmd|cmdkey|vssadmin|cipher|format|mkfs|mount|umount|dd|ls|grep|awk|sed|tail|cut|tee|alias)\b/i;
