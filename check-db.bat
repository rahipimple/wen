@echo off
title WEN Database Viewer
echo ===================================================================
echo   WEN SQL DATABASE VIEWER (db\wen_database.db)
echo ===================================================================
echo.
cd /d "%~dp0backend"
java -cp ".;..\db\sqlite-jdbc.jar" WENServer CheckDB
pause
