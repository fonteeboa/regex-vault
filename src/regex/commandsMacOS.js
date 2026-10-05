/**
 * @module commandsMacOS
 * @description Padrões de regex para validação de comandos macOS
 */

/**
 * Valida comandos de Firewall no macOS
 * 
 * @type {RegExp}
 * @example
 * macOSFirewallRegex.test("sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on") // true
 * macOSFirewallRegex.test("sudo /usr/libexec/ApplicationFirewall/socketfilterfw --listapps") // true
 * macOSFirewallRegex.test("sudo /usr/libexec/ApplicationFirewall/socketfilterfw") // false
 */
export const macOSFirewallRegex = /^sudo\s+\/usr\/libexec\/ApplicationFirewall\/socketfilterfw\s+--(?:setglobalstate\s+(?:on|off)|setstealthmode\s+(?:on|off)|listapps|add\s+"[^"]+"|remove\s+"[^"]+")$/

/**
 * Valida comandos de Bluetooth no macOS
 * 
 * @type {RegExp}
 * @example
 * macOSBluetoothRegex.test("sudo defaults write /Library/Preferences/com.apple.Bluetooth.plist ControllerPowerState -int 1") // true
 * macOSBluetoothRegex.test("sudo killall -HUP bluetoothd") // true
 * macOSBluetoothRegex.test("defaults write /Library/Preferences/com.apple.Bluetooth.plist ControllerPowerState -int 1") // false
 */
export const macOSBluetoothRegex = /^sudo\s+(?:defaults\s+write\s+\/Library\/Preferences\/com\.apple\.Bluetooth\.plist\s+ControllerPowerState\s+-int\s+[01]|killall\s+-HUP\s+bluetoothd)$/;

/**
 * Valida comandos de listagem de USB no macOS
 * 
 * @type {RegExp}
 * @example
 * macOSUSBRegexList.test("system_profiler SPUSBDataType") // true
 * macOSUSBRegexList.test("sudo system_profiler SPUSBDataType") // false
 */
export const macOSUSBRegexList = /^system_profiler\s+SPUSBDataType$/;

/**
 * Valida comandos de gerenciamento de USB no macOS
 * 
 * @type {RegExp}
 * @example
 * macOSUSBRegexManage.test("sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.Boot.plist USBKeyEnabled YES") // true
 * macOSUSBRegexManage.test("defaults write /Library/Preferences/SystemConfiguration/com.apple.Boot.plist USBKeyEnabled YES") // false
 */
export const macOSUSBRegexManage = /^sudo\s+defaults\s+write\s+\/Library\/Preferences\/SystemConfiguration\/com\.apple\.Boot\.plist\s+[^ ]+\s+[^ ]+$/;

/**
 * Valida comandos perigosos no macOS
 * 
 * @type {RegExp}
 * @example
 * macOSCommonDangerousFunctions.test("rm -rf /") // true
 * macOSCommonDangerousFunctions.test("sudo reboot") // true
 * macOSCommonDangerousFunctions.test("echo Hello World") // false
 */
export const macOSCommonDangerousFunctions = /\b(?:cat|fsck|touch|rm|sudo|chmod|chown|kill|ps|bash|nmap|traceroute|ifconfig|service|reboot|halt|shutdown|mount|umount|ls|grep|awk|sed|tail|cut|tee|alias)\b/i;
