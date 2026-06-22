require('dotenv').config();

const { Telegraf, session } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());

// CIERRE AUTOMÁTICO POR INACTIVIDAD
bot.use(async (ctx, next) => {
    const TIEMPO_MAXIMO = 10 * 60 * 1000; // 10 minutos

    if (!ctx.session) {
        ctx.session = {};
    }

    if (ctx.session.timeoutId) {
        clearTimeout(ctx.session.timeoutId);
    }

    if (ctx.session.usuario) {
        const chatId = ctx.chat.id;

        ctx.session.timeoutId = setTimeout(async () => {
            try {
                ctx.session = {};

                await bot.telegram.sendMessage(
                    chatId,
                    '⏱️ Tu sesión ha expirado por inactividad.\n\nUsa /start para iniciar sesión nuevamente.'
                );
            } catch (error) {
                console.error('Error al cerrar sesión por inactividad:', error);
            }
        }, TIEMPO_MAXIMO);
    }

    return next();
});

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
require('./actions/anuncios')(bot);

// START BOT
bot.launch();

console.log('🤖 ANNI está funcionando...');