# Read-only. No administrator rights required. No network/security settings changed.
$ErrorActionPreference = 'Continue'
$Target = 'https://open-practice.zlnew.workers.dev/'
Write-Output ('Target: ' + $Target)
Write-Output ('Device time: ' + (Get-Date -Format o))
Write-Output ('OS version: ' + [Environment]::OSVersion.VersionString)
Write-Output ('PowerShell version: ' + $PSVersionTable.PSVersion)
foreach ($Path in @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe", "${env:ProgramFiles}\Mozilla Firefox\firefox.exe")) {
    if (Test-Path $Path) { Write-Output ((Split-Path $Path -Leaf) + ' version: ' + (Get-Item $Path).VersionInfo.ProductVersion) }
}
try {
    Write-Output 'DNS addresses:'
    [System.Net.Dns]::GetHostAddresses('open-practice.zlnew.workers.dev') | ForEach-Object { Write-Output $_.IPAddressToString }
} catch { Write-Output ('DNS error: ' + $_.Exception.Message) }
try {
    $Proxy = Get-ItemProperty 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings' -Name ProxyEnable -ErrorAction Stop
    Write-Output ('User proxy enabled flag: ' + $Proxy.ProxyEnable)
} catch { Write-Output 'User proxy flag unavailable.' }
$OldProtocol = [Net.ServicePointManager]::SecurityProtocol
try {
    # Applies only within this process, and is restored below. Does not weaken validation.
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $Request = [Net.HttpWebRequest]::Create($Target)
    $Request.Timeout = 15000
    $Response = $Request.GetResponse()
    Write-Output ('TLS 1.2 HTTP result: ' + [int]$Response.StatusCode)
    $Response.Close()
} catch {
    Write-Output ('TLS/HTTP diagnostic: ' + $_.Exception.Message)
    if ($_.Exception.InnerException) { Write-Output $_.Exception.InnerException.Message }
} finally {
    [Net.ServicePointManager]::SecurityProtocol = $OldProtocol
}
Write-Output 'Supply the exact browser error separately. This diagnostic does not establish browser-specific trust settings.'
