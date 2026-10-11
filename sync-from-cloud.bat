@echo off
title WEN - Sync Cloud MongoDB to Local Codebase
echo ===================================================================
echo   WEN CLOUD MONGODB -> LOCAL CODEBASE SYNCHRONIZER
echo ===================================================================
echo.
cd /d "%~dp0"
node sync-from-cloud.js
echo.
pause
