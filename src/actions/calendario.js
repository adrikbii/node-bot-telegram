const pool = require('../config/database');

module.exports = (bot) => {
  bot.action('calendario', async (ctx) => {
    try {
      await ctx.answerCbQuery();

      const [calendarios] = await pool.query(
        "SELECT titulo, url_archivo FROM calendario_academico WHERE estado = 'ACTIVO' ORDER BY id DESC LIMIT 1"
      );

      if (calendarios.length === 0) {
        return ctx.reply('🗓 No hay calendario académico registrado.');
      }

      const calendario = calendarios[0];

      return ctx.reply(
        `🗓 ${calendario.titulo}\n\n` +
        `🔗 Ver calendario académico:\n${calendario.url_archivo}`
      );

    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al consultar el calendario académico.');
    }
  });
};