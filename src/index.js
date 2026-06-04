require('dotenv').config();

const { Telegraf, session } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());

// COMMANDS
require('./commands/start')(bot);
require('./commands/help')(bot);

// AUTH
require('./actions/auth')(bot);

// ACTIONS
require('./actions/horarios')(bot);
require('./actions/calendario')(bot);
require('./actions/malla')(bot);
require('./actions/institucion')(bot);
require('./actions/faq')(bot);
require('./actions/contactos')(bot);

// START BOT
bot.launch();

console.log('🤖 ANNI está funcionando...');