@echo off
title Women Entrepreneur Network - MySQL Database Viewer
echo ===================================================================
echo   WEN MYSQL DATABASE VIEWER (wen_database)
echo ===================================================================
echo.
set /p MYSQL_PASSWORD=Enter your MySQL Root Password (press Enter if password is root): 
if "%MYSQL_PASSWORD%"=="" set MYSQL_PASSWORD=root

node viewdb-mysql.js
pause
