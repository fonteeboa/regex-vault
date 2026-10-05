/**
 * @module commandsWindows
 * @description Padrões de regex para validação de comandos Windows
 */

/**
 * Valida comandos de Firewall no windows
 * 
 * @type {RegExp}
 * @example
 * windowsFirewallRegex.test("netsh advfirewall set allprofiles state on") // true
 * windowsFirewallRegex.test('netsh advfirewall firewall add rule name="Allow HTTP" dir=in action=allow protocol=TCP localport=80') // true
 * windowsFirewallRegex.test("netsh advfirewall") // false
 */
export const windowsFirewallRegex = /^netsh\s+advfirewall\s+(?:(?:set\s+(?:allprofiles|currentprofile)\s+(?:state\s+(?:on|off)|logging\s+(?:droppedpackets\s+enable|filename\s+"[^"]+")))|(?:firewall\s+(?:add|delete|show)\s+rule\s+(?:name="[\w\s\-]+"|name=all)(?:\s+dir=(?:in|out))?(?:\s+action=(?:allow|block))?(?:\s+protocol=(?:TCP|UDP))?(?:\s+localport=\d+)?(?:\s+program="[^"]+"|$)?(?:\s+enable=yes)?(?:\s+\|\s+findstr\s+Group)?)|(?:show\s+currentprofile)|(?:(?:export|import)\s+"[^"]+"))$/;

/**
 * Valida comandos Bluetooth no windows
 * 
 * @type {RegExp}
 * @example
 * windowsBluetoothRegex.test('Enable-NetAdapter -Name "Bluetooth Network Connection"') // true
 * windowsBluetoothRegex.test('Get-PnpDevice | Where-Object { $_.FriendlyName -like "*Bluetooth*" }') // true
 * windowsBluetoothRegex.test('Enable-NetAdapter -Name "Wi-Fi Network Connection"') // false
 */
export const windowsBluetoothRegex = /^(?:(?:Enable|Disable)-NetAdapter\s+-Name\s+"Bluetooth Network Connection"|Get-PnpDevice\s+\|\s+Where-Object\s+{\s+\$_\.FriendlyName\s+-like\s+"\*Bluetooth\*"\s+}|Set-BluetoothSettings\s+-AllowReceiveFiles\s+\$(?:true|false))$/;

/**
 * Valida comandos USB no windows
 * 
 * @type {RegExp}
 * @example
 * windowsUSBRegexManage.test('Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR" -Name "Start" -Value 3') // true
 * windowsUSBRegexManage.test('Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR" -Name "Start" -Value 5') // false
 */
export const windowsUSBRegexManage = /^Set-ItemProperty\s+-Path\s+"HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR"\s+-Name\s+"Start"\s+-Value\s+[34]$/;

/**
 * Valida comandos de listagem de USB no windows
 * 
 * @type {RegExp}
 * @example
 * windowsUSBRegexList.test('Get-PnpDevice -Class "USB"') // true
 * windowsUSBRegexList.test('Get-PnpDevice') // false
 */
export const windowsUSBRegexList = /^Get-PnpDevice\s+-Class\s+"USB"$/;

/**
 * Valida comandos perigosos no windows
 * 
 * @type {RegExp}
 * @example
 * windowsCommonDangerousFunctions.test("taskkill /IM notepad.exe") // true
 * windowsCommonDangerousFunctions.test("tasklist") // true
 * windowsCommonDangerousFunctions.test("echo Hello World") // false
 */
export const windowsCommonDangerousFunctions = /\b(?:taskkill|tasklist|ipconfig|nslookup|reg|powershell|diskpart|dir|rd|del|findstr|cmd|cmdkey|vssadmin|cipher|format)\b/i;
