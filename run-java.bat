@echo off
title Women Entrepreneur Network (WEN) - MongoDB Java Server
echo ===================================================================
echo   WOMEN ENTREPRENEUR NETWORK (WEN)
echo   Tagline: Connect * Learn * Grow
echo   Active Database: MongoDB (wen_db.users)
echo ===================================================================
echo.
cd /d "%~dp0backend"
echo Compiling WENServer.java...
javac WENServer.java
if %errorlevel% neq 0 (
    echo [ERROR] Java compiler failed. Please ensure JDK is installed and on your PATH.
    pause
    exit /b %errorlevel%
)

echo Starting Java Server with MongoDB (wen_db.users)...
echo Open in browser: http://localhost:8080/
echo.
java WENServer 8080
pause
