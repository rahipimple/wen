@echo off
title Women Entrepreneur Network - MySQL 8.0 Server
echo ===================================================================
echo   WOMEN ENTREPRENEUR NETWORK (WEN) - MYSQL SERVER
echo   Database: Real MySQL 8.0 Database (wen_database)
echo   Connect - Learn - Grow
echo ===================================================================
echo.
set /p MYSQL_PASSWORD=Enter your MySQL Root Password (press Enter if password is root): 
if "%MYSQL_PASSWORD%"=="" set MYSQL_PASSWORD=root

set MYSQL_USER=root
set MYSQL_DATABASE=wen_database

echo.
echo Launching WEN MySQL REST API Server on http://localhost:8080/ ...
node server-mysql.js
pause
