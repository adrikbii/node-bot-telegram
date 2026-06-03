require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// COMMANDS
require('./commands/start')(bot);
require('./commands/help')(bot);

// ACTIONS
require('./actions/horarios')(bot);
require('./actions/calendario')(bot);
require('./actions/faq')(bot);
require('./actions/contactos')(bot);

// START BOT
bot.launch();

console.log('🤖 ANNI está funcionando...');