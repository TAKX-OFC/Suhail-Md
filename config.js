const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nokuekanjuma@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/686bbd0f0375bb881df15.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "𝟐𝟔𝟑𝟕𝟖𝟓𝟏𝟗𝟐𝟐𝟓𝟎";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_52_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQwLFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDM5LFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWVEwvaHhTbXZHeXJybisvbW5IWWVOSDZYTUN5MTc4NzNvTGp0Y0hzR1BBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4NTE5MjI1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzUwQTY3MkI3QzZFQzQxOEZFNDM4MDg5MzhDRUFCNjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTU3MTI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg1MTkyMjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNEU1RjZBNTAwQjI1NDc2MEZDMDVBRTE3NkM0MUM1RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5NTcxMjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYlZjamxwYm1SNG1ZcVBzUHdXdGNDUVwiLFxuICBcInBob25lSWRcIjogXCJkZWFkMTk2NC1mMzBjLTQ3ZGYtOGQ4ZS1mZDM3YjdhYzJlZDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAyMjAsXG4gICAgICA4MyxcbiAgICAgIDIzMCxcbiAgICAgIDE0MixcbiAgICAgIDIxMyxcbiAgICAgIDUwLFxuICAgICAgNzksXG4gICAgICAxNDAsXG4gICAgICAyMjMsXG4gICAgICAyMTgsXG4gICAgICAxNSxcbiAgICAgIDE5MCxcbiAgICAgIDE0NSxcbiAgICAgIDIsXG4gICAgICAxOTUsXG4gICAgICAyMjIsXG4gICAgICA1NCxcbiAgICAgIDE3NyxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDIzNSxcbiAgICAgIDU3LFxuICAgICAgNixcbiAgICAgIDMxLFxuICAgICAgMjU1LFxuICAgICAgMjI4LFxuICAgICAgMTgsXG4gICAgICAyMyxcbiAgICAgIDIwMCxcbiAgICAgIDE2LFxuICAgICAgMTk3LFxuICAgICAgMTgwLFxuICAgICAgMTczLFxuICAgICAgMTE1LFxuICAgICAgMjUwLFxuICAgICAgNzIsXG4gICAgICA5OSxcbiAgICAgIDIwMSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTko5SkU2RVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NTE5MjI1MDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRBS1gtT0ZDXCIsXG4gICAgXCJsaWRcIjogXCIyNjgwMTkxMTI2MjgzNTk6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT253enVRR0VQenNrYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCeFlPeVRrSEdTZzIzeWZlT1l4Y0x3RmJXYkJwSmsyVjg0RmtYQllMYmdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInB1YmhzY3VnSk82aHNRalpVTkd2WnRtMXJuelZlc0duLzJ0WVYzNUVGWmsyUlhKTGUwRWQ2MXhTSkpBM0hkd09VaUlRcXhJUXhJdWF3NUR0YTZJYkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkExemk3VkRZU2FOU2xwSFllT0d4Z2xjWjZUaCtpUGlCeXYvRUNZaTBlSVBKdlVQenRTVFp1eWtaaDFwZEZMR0oxWDFEZDI5a2szcHBBeXdzeUxjT2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NTE5MjI1MDo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTk1NzEyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUh5cVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHlxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZFptVllLVGpTZGg4cEF6a3Z3SE80bEpOTXQyRDBneDZMeUpVQmVJeEkvOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODIxNjIwMzI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5NTcxMjI2NjZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```𝚃𝙰𝙺𝚇-𝙾𝙵𝙲```", //*𝚃𝙰𝙺𝚇-𝙾𝙵𝙲*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  packname: process.env.PACK_NAME || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  botname : process.env.BOT_NAME  || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  ownername:process.env.OWNER_NAME|| "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "https://whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/686bbd0f0375bb881df15.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
