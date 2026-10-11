# Women Entrepreneur Network (WEN) - MongoDB Java Server Launcher
Write-Host "==================================================================" -ForegroundColor Magenta
Write-Host "  WOMEN ENTREPRENEUR NETWORK (WEN) - MONGO LAUNCHER" -ForegroundColor White
Write-Host "  Tagline: Connect • Learn • Grow" -ForegroundColor Cyan
Write-Host "  Active Database: MongoDB (wen_db.users)" -ForegroundColor Yellow
Write-Host "==================================================================" -ForegroundColor Magenta

$currentDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location "$currentDir\backend"

Write-Host "Compiling WENServer.java..." -ForegroundColor Cyan
javac WENServer.java

if ($LASTEXITCODE -eq 0) {
    Write-Host "Starting WEN Java Server with MongoDB (wen_db.users)..." -ForegroundColor Green
    Start-Process "http://localhost:8080/"
    java WENServer 8080
} else {
    Write-Host "Java compiler (javac) not found or compilation failed. Check JDK installation." -ForegroundColor Red
}
