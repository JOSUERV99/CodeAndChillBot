@echo off
goto :start

Run CodeAndChillBot instance from local (WindowsStart)

:add_routine
schtasks /create /tn "CodeAndChill BOT Routine" /tr C:\Users\Josue\Desktop\run_cc_bot.bat /sc onstart /sd 26/03/2021

:start
cd "C:\Users\Josue\Documents\git\CodeAndChillBot" && npm start
