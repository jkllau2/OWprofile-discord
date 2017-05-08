var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", function(message){
	if((message.content).match(/!owrank\s[a-zA-Z]+#[0-9]+/)) {
		var masterow = "http://www.masteroverwatch.com/profile/pc/us/";
		var rawName = message.content.substring(8);
		var playerName = (rawName.charAt(0).toUpperCase() + rawName.slice(1)).replace(/#/g, "-");

		bot.sendMessage(message, masterow.concat(playerName));
	}
});

bot.loginWithToken("MjA2MzE3MjExNTU4NzM5OTY5.CnS1Vg.kU_4aSNAWgJh7lug54hOeE9aTsw");