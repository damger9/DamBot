const { Client, GatewayIntentBits } = require('discord.js')
const config = require('./config.json')
const { version } = require('../package.json')

class DamBot {
    /**
     * do stuff here
     */
    constructor() {
        this.version = version

        this.token = config.token
        this.clientId = config.clientId
        this.serverId = config.serverId

        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds
            ]
        })
    }

    login() {
        this.client.login(this.token)
    }
}

module.exports = DamBot