//first run "npm init" in your folder's command prompt or terminal
//then run "npm i discord.js" in that same cmd prompt or terminal
//now start coding:
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.login("Your-Bot-Token")
