const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c47ad1de078d42eee14e.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263714773898";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263785192250";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_01_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMCxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk83ckx5VGZjdDc0RHdaVGN4ajJDRVNBZjFQcjd1TjdaTDhpSlZvNWEwbVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg1MTkyMjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQzhGODM0MERENERCMzM0QTVFNDAxMTQ1MkYzNzBCM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMzkyNzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODUxOTIyNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBBRDZERURBQjk1QUYwNUVEMjE1ODlDNTk1NDBDODQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDMzOTI4MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVZXhjdXcwYVN3R2doRlJWYWtRY1V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzOTczOTNmLTA1N2ItNGRjYS04OGFjLTAxMDI4NzdjN2NlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDEzNixcbiAgICAgIDMsXG4gICAgICA2NCxcbiAgICAgIDE3MCxcbiAgICAgIDEzMCxcbiAgICAgIDI0MCxcbiAgICAgIDE5NCxcbiAgICAgIDQ5LFxuICAgICAgMTUzLFxuICAgICAgODQsXG4gICAgICAyMDIsXG4gICAgICAxMzIsXG4gICAgICAxNTMsXG4gICAgICA5MixcbiAgICAgIDI0OCxcbiAgICAgIDUzLFxuICAgICAgMjQ0LFxuICAgICAgMTUwLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDE3NCxcbiAgICAgIDg1LFxuICAgICAgMTU4LFxuICAgICAgMTExLFxuICAgICAgMTM2LFxuICAgICAgMTQ0LFxuICAgICAgMTY1LFxuICAgICAgMzMsXG4gICAgICA5OCxcbiAgICAgIDEyLFxuICAgICAgNyxcbiAgICAgIDYyLFxuICAgICAgMTI3LFxuICAgICAgMTksXG4gICAgICAxNzEsXG4gICAgICAxODMsXG4gICAgICA1NixcbiAgICAgIDIzMyxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBHWDZIWDFHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODUxOTIyNTA6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUQUtYLU9GQ1wiLFxuICAgIFwibGlkXCI6IFwiMjY4MDE5MTEyNjI4MzU5OjUyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ud3p1UUdFTWVXcWJRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnhZT3lUa0hHU2cyM3lmZU9ZeGNMd0ZiV2JCcEprMlY4NEZrWEJZTGJncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqYkJBd0cxemYwUXFtV21BaE42NVZKNVhSeUoyR01zbi9zalNIWFJhRjZLV3BKZnViQ2xZOTNad2VDVUxMUTRyYU9Rc0V6Qi9MN3lQOEFGLy80K0FDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1TWhxZzA0RUs1TDdEaGRkNFdnRTBNUi9aZTlnZWxUbTBqY3BOem5acVNXZjd5K1dEWHNWUW41OVFydzZrc3FzMHU4ZWloRG1GNmxzUDJzQmE4c3RnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODUxOTIyNTA6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMzkyNzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIeXRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh5dC5qc29uIjogIntcImtleURhdGFcIjpcIkk3QVUra2NpNGFRZ2pTR2tLS0RqR1V4YVVwUWhxNEFyZithN0FNUi83M2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgyMTYyMDMyOSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzMzkyODEwMDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "https://telegra.ph/file/9c47ad1de078d42eee14e.jpg", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "takx" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MUNYORO-BOT",
  ownername:process.env.OWNER_NAME|| "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
