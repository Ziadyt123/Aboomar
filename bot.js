const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543459368973369365")
setInterval(function() {
channel.send(`الدنيه مشيه ب كردت`);
}, 30)
})

client.login("NTE1MzM4NDUwMDg2Mzk1OTE0.Dz89cw.10I7dXY8ftI4MvVnyOF5rDC-C18");
