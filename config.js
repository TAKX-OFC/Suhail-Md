const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://suhail-md-q8j6.onrender.com"                       // put your app url here,
global.email ="nokuekanjuma@gmail.com"
global.location="HARARE,ZIMBABWE."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/TAKX-OFC/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vaal1wf1NCrYiPt8cU3D";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vaal1wf1NCrYiPt8cU3D" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/sEpu8WP.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚩𝐋𝚵𝐒𝐒𝚵𝐃-𝚩𝚯𝚻" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263780597112";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_50_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY5LFxuICAgICAgICA3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNyxcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY1LFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndFNkJqbkZlQUx6c3R6eXpTUDJoQ053ZE5XMXlkSEFTaS9EWjNRYXBNRFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg2MjMwOTk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RjcwM0Y4QzkxRURFOERDOEMxNDE0Mzc4OTQ2NUZFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMTcwMDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODYyMzA5OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNGREFBN0M5NkRDRERDQjQ4NUFFNERGOEYyMUY4QTMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDMxNzAwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0RkpndlB5UlRMZTVWZFBXa1o0VmtRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJiZWE4MTA4LWY2NjYtNDYxNS04OWY3LTE4Y2IzYjEwMmY2OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAyMDAsXG4gICAgICAxMzIsXG4gICAgICAyMTYsXG4gICAgICAxNDksXG4gICAgICAxNCxcbiAgICAgIDE0LFxuICAgICAgMTA4LFxuICAgICAgMTc2LFxuICAgICAgNjksXG4gICAgICA1OCxcbiAgICAgIDIyNyxcbiAgICAgIDExOCxcbiAgICAgIDE2NyxcbiAgICAgIDIxMCxcbiAgICAgIDksXG4gICAgICA3LFxuICAgICAgOTEsXG4gICAgICAyNCxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxNjAsXG4gICAgICAzMSxcbiAgICAgIDIxMixcbiAgICAgIDQyLFxuICAgICAgMTEzLFxuICAgICAgMTYyLFxuICAgICAgODYsXG4gICAgICAyMzcsXG4gICAgICAxNjYsXG4gICAgICAyOCxcbiAgICAgIDAsXG4gICAgICAxNjksXG4gICAgICA1OCxcbiAgICAgIDQ5LFxuICAgICAgMjUzLFxuICAgICAgOTIsXG4gICAgICAxMjUsXG4gICAgICAyMzAsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOamMxY29FRU1Qb3A3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9mbHFoS0NiaHdSR1RaQVVWZ2VZTDVaRDJLcEdxamFBVWdDMVlicXZJR1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVmxUOTBKV29vU3RwUG5GUFZkcVBQaDBTL05hYkJ6TllqUkVqTy84NGVXdDJkZVcrWUZ6WGFWbE15UldMZm1yQzhIakxMcHBNQ0xrbGgvV2RNZ0xRQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibkk0WmdFS2ZhRmM1OFp5SkVZTk1MQ3IxQ2Fsbzk4RG4zdWN6Skowa0tuOVkxQzVLOFE3Q052NjI0TkR3TnJpbkxpdFlQODV0L2wvbE1DQVFyR3NwQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODYyMzA5OTU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc2Nzk4NDg2NzgxOTkxOjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQmxlc3NlZCBLYW5qdW1hXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODYyMzA5OTU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMTY5OTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFTlNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVOUy5qc29uIjogIntcImtleURhdGFcIjpcIlJ2SGpQWXVKWUo1M1RpbDV1bTN6eW9rZnFWTjB6M2NUM0trUmIxd2ZBMXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzMDMzNTU3NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTM1ODc5MDQyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```𝚃𝙰𝙺𝚇-𝙾𝙵𝙲```", //*𝚃𝙰𝙺𝚇-𝙾𝙵𝙲*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝚩𝐋𝚵𝐒𝐒𝚵𝐃-𝚩𝚯𝚻",
  packname: process.env.PACK_NAME || "𝚩𝐋𝚵𝐒𝐒𝚵𝐃-𝚩𝚯𝚻",
  botname : process.env.BOT_NAME  || "𝚩𝐋𝚵𝐒𝐒𝚵𝐃-𝚩𝚯𝚻",
  ownername:process.env.OWNER_NAME|| "𝞑𝙇𝞢𝙎𝙎𝞢𝘿-𝞙𝞓𝞜𝙅𝙐𝞛𝞓",

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
