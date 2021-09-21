const {Client, Intents} = require("discord.js");
const myIntents = new Intents();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})
console.log(process.env.TOKEN);
client.login(process.env.TOKEN)