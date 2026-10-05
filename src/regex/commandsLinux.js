/**
 * @module commandsLinux
 * @description Padrões de regex para validação de comandos Linux
 */

/**
 * Valida comandos de Firewall no linux (UFW)
 * 
 * @type {RegExp}
 * @example
 * linuxFirewallUFWRegex.test("sudo ufw enable") // true
 * linuxFirewallUFWRegex.test("ufw allow 22") // true
 * linuxFirewallUFWRegex.test("ufw start") // false
 */
export const linuxFirewallUFWRegex = /^(sudo\s+)?ufw\s+(allow|deny|enable|disable|reload|reset|status(?:\s+numbered)?|logging\s+(on|off)|default\s+(allow|deny)\s+(incoming|outgoing)|allow\s+(\d+|ssh|http|https|ftp|smtp|dns|pop3|imap|smb|nfs|mysql|postgresql|mongodb)(\/(tcp|udp))?|deny\s+(\d+|ssh|http|https|ftp|smtp|dns|pop3|imap|smb|nfs|mysql|postgresql|mongodb)(\/(tcp|udp))?|delete\s+(allow|deny)?\s*(\d+|ssh|http|https|ftp|smtp|dns|pop3|imap|smb|nfs|mysql|postgresql|mongodb)?(\/(tcp|udp))?|allow\s+from\s+\d{1,3}(\.\d{1,3}){3}(\/\d+)?\s+to\s+any\s+port\s+\d+|deny\s+from\s+\d{1,3}(\.\d{1,3}){3}(\/\d+)?\s+to\s+any\s+port\s+\d+)$/;

/**
 * Valida comandos de Firewall no linux (iptables)
 * 
 * @type {RegExp}
 * @example
 * linuxFirewallIptablesRegex.test("sudo iptables -L") // true
 * linuxFirewallIptablesRegex.test("iptables -A INPUT -p tcp --dport 22 -j ACCEPT") // true
 * linuxFirewallIptablesRegex.test("iptables start") // false
 */
export const linuxFirewallIptablesRegex = /^(sudo\s+)?(\/usr\/sbin\/)?(iptables|ip6tables|ipset)(\s+-[qw])?(-save)?(\s+-w)?(\s+-t\s+(filter|nat|mangle|raw|security))?(\s+(-[AIDFNRXZLPC]|--(?:append|policy|create|delete|insert|flush|list|new|rename|zero|save|restore|exist))(\s+[a-zA-Z0-9_:+./-]+)*)?(\s+(?:hash:[a-z]+|family\s+[a-z]+|timeout\s+\d+|maxelem\s+\d+|hashsize\s+\d+))*(\s+-[a-zA-Z0-9-]+(?:\s+\S+)*)*(\s*>>\/dev\/null\s*2>&1)?$/;

/**
 * Valida comandos de Bluetooth no linux
 * 
 * @type {RegExp}
 * @example
 * linuxBluetoothRegex.test("sudo systemctl start bluetooth") // true
 * linuxBluetoothRegex.test("sudo bluetoothctl power on") // true
 * linuxBluetoothRegex.test("bluetoothctl start bluetooth") // false
 */
export const linuxBluetoothRegex = /^(sudo\s+)?(systemctl\s+(start|stop|enable|disable|status)\s+bluetooth|bluetoothctl\s+(power\s+(on|off)|pair\s+\S+|connect\s+\S+|disconnect\s+\S+|remove\s+\S+)|rfkill\s+(block|unblock)\s+bluetooth)$/;

/**
 * Valida comandos de gerenciamento de USB no linux
 * 
 * @type {RegExp}
 * @example
 * linuxUSBRegexManage.test("sudo modprobe -r usb_storage") // true
 * linuxUSBRegexManage.test("sudo tee /sys/bus/usb/drivers/usb/unbind") // true
 * linuxUSBRegexManage.test("sudo modprobe usb_storage") // true
 */
export const linuxUSBRegexManage = /^sudo\s+(?:modprobe(?:\s+-r)?\s+usb_storage|tee\s+\/sys\/bus\/usb\/drivers\/usb\/(?:un)?bind)$/;

/**
 * Valida comandos de listagem de USB no linux
 * 
 * @type {RegExp}
 * @example
 * linuxUSBRegexList.test("lsusb") // true
 * linuxUSBRegexList.test('dmesg | grep "usb"') // true
 * linuxUSBRegexList.test("sudo lsusb") // false
 */
export const linuxUSBRegexList = /^(lsusb|dmesg\s+\|\s+grep\s+"usb"|echo\s+"[^"]+"\s+\|\s+sudo\s+tee\s+\/sys\/bus\/usb\/drivers\/usb\/(?:un)?bind)$/;

/**
 * Valida regras udev de bloqueio de dispositivos USB no linux
 * 
 * @type {RegExp}
 * @example
 * linuxUSBRegexBlock.test('SUBSYSTEM=="usb", ACTION=="add", ATTR{idVendor}=="1234", ATTR{idProduct}=="5678", RUN+="/bin/sh -c \'exit 1\'"') // true
 */
export const linuxUSBRegexBlock = /^SUBSYSTEM=="usb",\s+ACTION=="add",\s+ATTR{idVendor}=="[0-9a-fA-F]{4}",\s+ATTR{idProduct}=="[0-9a-fA-F]{4}",\s+RUN\+="\/bin\/sh\s+-c\s+'exit\s+1'"$/;

/**
 * Valida comandos perigosos no linux
 * 
 * @type {RegExp}
 * @example
 * linuxCommonDangerousFunctions.test("rm -rf /") // true
 * linuxCommonDangerousFunctions.test("sudo reboot") // true
 * linuxCommonDangerousFunctions.test("echo Hello World") // false
 */
export const linuxCommonDangerousFunctions = /\b(?:cat|fsck|touch|rm|sudo|chmod|chown|kill|ps|bash|nmap|traceroute|ifconfig|iptables|service|reboot|halt|shutdown|mount|umount|dd|ls|grep|awk|sed|tail|cut|tee|alias)\b/i;
