const { Markup } = require('telegraf');

const welcomeMessage = require('../messages/welcomeMessage');

module.exports = (bot) => {

  bot.start((ctx) => {

    ctx.reply(

      welcomeMessage,

      Markup.inlineKeyboard([
        [Markup.button.callback('📅 Horarios', 'horarios')],
        [Markup.button.callback('🗓 Calendario', 'calendario')],
        [Markup.button.callback('❓ FAQ', 'faq')],
        [Markup.button.callback('📞 Contactos', 'contactos')]
      ])

    );

  });

};