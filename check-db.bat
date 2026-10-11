@echo off
title WEN MongoDB Database Inspector
echo ===================================================================
echo   WEN MONGODB DATABASE INSPECTOR (wen_db.users)
echo ===================================================================
echo.
cd /d "%~dp0backend"
java WENServer CheckDB
pause
