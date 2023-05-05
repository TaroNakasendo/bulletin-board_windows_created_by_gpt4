@echo off

rem launch backend
cd backend
start npm start index.js

rem launch frontend
cd ../frontend
start npm run dev

rem get my ip and launch web browser
for /F "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /R /C:"IPv4"') do (set my_ip=%%i && goto :next)
:next
set my_ip=%my_ip: =%
start http://%my_ip%:3000
