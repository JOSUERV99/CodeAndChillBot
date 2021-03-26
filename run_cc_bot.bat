@echo off
goto :start

Run CodeAndChillBot instance from local (WindowsStart)

:start
cd "C:\Users\Josue\Documents\git\CodeAndChillBot" && npm start

:add_routine
schtasks /create /tn "CodeAndChill BOT Routine" /tr C:\Users\Josue\Desktop\run_c\\&c_bot.bat /sc onstart /sd 26/03/2021