const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

var stdin = process.openStdin();

client.on('ready', () => {
	channel = client.channels.cache.get(config.channelID);
})

stdin.addListener("data", function(d) {
		if (d.toString().trim() == "shruggie") {
			channel.send("¯\\_(ツ)_/¯");
		}
		else if (d.toString().trim() == "tableflip") {
			channel.send("(╯°□°)╯︵ ┻━┻");
		}
		else {
			channel.send(d.toString().trim());
		}
  });

client.on("message", function(message) {

	if (message.author.id == client.user.id) return;

	console.log(`${message.author.username} says: ${message.content}`);

})
client.login(config.token);
