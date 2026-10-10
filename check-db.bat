@echo off
title WEN Database Viewer
echo ===================================================================
echo   WEN SQL DATABASE VIEWER (wen_database.db)
echo ===================================================================
echo.
java -cp ".;sqlite-jdbc.jar" WENServer CheckDB
pause
