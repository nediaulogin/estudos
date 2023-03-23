// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// const { token } = require('./config.json'); não usaremos pois estamos guardando os dados no .env
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID} = process.env

//importação de comandos
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands") //caminho para commands
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js")) //nome dos terminados em .js


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()


for (const file of commandFiles){
	const filePath = path.join(commandsPath, file) //caminho para file.js
	const command = require(filePath)
	if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
	}else {
        console.log(`Esse comando em ${filePath} esta com data ou execute faltando`)
	}
}

console.log(client.commands)

//Loguin
client.once(Events.ClientReady, c => {
	console.log(`pronto login realizado como ${c.user.tag}`)
});
client.login(TOKEN); // Log in to Discord with your client's token

// Listener de interações com o bot
client.on(Events.InteractionCreate, async interaction =>{
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("Comando não encontrado")
        return
    }
    try {
        await command.execute(interaction)
    } 
    catch (error) {
        console.error(error)
        await interaction.reply("Houve um erro ao executar esse comando!")
	}
})
