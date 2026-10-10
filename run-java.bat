@echo off
title Women Entrepreneur Network (WEN) - Java Server
echo ===================================================================
echo   WOMEN ENTREPRENEUR NETWORK (WEN)
echo   Tagline: Connect * Learn * Grow
echo   "Stronger Women * Stronger Businesses * A Brighter Tomorrow"
echo ===================================================================
echo.
cd /d "%~dp0backend"
echo Compiling WENServer.java with Database Support...
javac -cp ".;..\db\sqlite-jdbc.jar" WENServer.java
if %errorlevel% neq 0 (
    echo [ERROR] Java compiler failed. Please ensure JDK 11+ is installed and on your PATH.
    pause
    exit /b %errorlevel%
)

echo Starting Java Server with SQLite Database (db\wen_database.db)...
echo Visit http://localhost:8080 in your browser.
echo.
java -cp ".;..\db\sqlite-jdbc.jar" WENServer 8080
pause
