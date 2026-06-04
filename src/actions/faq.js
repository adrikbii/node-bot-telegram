const { Markup } = require('telegraf');
const pool = require('../config/database');

module.exports = (bot) => {
  bot.action('faq', async (ctx) => {
    try {
      await ctx.answerCbQuery();

      const [faqs] = await pool.query(
        "SELECT id, pregunta FROM faq WHERE estado = 'ACTIVO'"
      );

      if (faqs.length === 0) {
        return ctx.reply('❓ No hay preguntas frecuentes registradas.');
      }

      const botones = faqs.map((faq) => [
        Markup.button.callback(faq.pregunta, `faq_${faq.id}`)
      ]);

      return ctx.reply(
        '❓ Selecciona una pregunta frecuente:',
        Markup.inlineKeyboard(botones)
      );
    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al consultar las preguntas frecuentes.');
    }
  });

  bot.action(/^faq_(\d+)$/, async (ctx) => {
    try {
      await ctx.answerCbQuery();

      const faqId = ctx.match[1];

      const [rows] = await pool.query(
        "SELECT pregunta, respuesta FROM faq WHERE id = ? AND estado = 'ACTIVO'",
        [faqId]
      );

      if (rows.length === 0) {
        return ctx.reply('❌ La pregunta seleccionada no está disponible.');
      }

      const faq = rows[0];

      return ctx.reply(
        `❓ ${faq.pregunta}\n\n✅ ${faq.respuesta}`
      );
    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al obtener la respuesta.');
    }
  });
};