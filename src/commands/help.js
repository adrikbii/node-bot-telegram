const helpMessage = require('../messages/helpMessage');

module.exports = (bot) => {

  bot.help((ctx) => {

    ctx.reply(helpMessage);

  });

};