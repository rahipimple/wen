@echo off
title WEN MongoDB Database Inspector
echo ===================================================================
echo   WEN MONGODB DATABASE INSPECTOR (wen_db.users)
echo ===================================================================
echo.
cd /d "%~dp0"
node sync-from-cloud.js
echo.
pause
