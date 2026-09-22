# Women Entrepreneur Network (WEN) - Java Server Launcher
Write-Host "==================================================================" -ForegroundColor Magenta
Write-Host "  WOMEN ENTREPRENEUR NETWORK (WEN) - JAVA LAUNCHER" -ForegroundColor White
Write-Host "  Tagline: Connect • Learn • Grow" -ForegroundColor Cyan
Write-Host "  Vision: Stronger Women • Stronger Businesses • A Brighter Tomorrow" -ForegroundColor Yellow
Write-Host "==================================================================" -ForegroundColor Magenta

$currentDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $currentDir

Write-Host "Compiling WENServer.java..." -ForegroundColor Cyan
javac WENServer.java

if ($LASTEXITCODE -eq 0) {
    Write-Host "Starting WEN Java Server at http://localhost:8080/ ..." -ForegroundColor Green
    Start-Process "http://localhost:8080/"
    java WENServer 8080
} else {
    Write-Host "Java compiler (javac) not found or compilation failed. Check JDK installation." -ForegroundColor Red
}
