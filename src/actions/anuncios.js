const pool = require('../config/database');

module.exports = (bot) => {
  bot.action('anuncios', async (ctx) => {
    try {
      await ctx.answerCbQuery();

      const [anuncios] = await pool.query(
        `
        SELECT titulo, contenido, created_at
        FROM anuncios
        WHERE estado = 'ACTIVO'
        ORDER BY created_at DESC
        LIMIT 5
        `
      );

      if (anuncios.length === 0) {
        return ctx.reply('📢 No hay anuncios registrados.');
      }

      let mensaje = '📢 Anuncios institucionales:\n\n';

      anuncios.forEach((anuncio, index) => {
        mensaje += `${index + 1}. 📌 ${anuncio.titulo}\n`;
        mensaje += `${anuncio.contenido}\n\n`;
      });

      return ctx.reply(mensaje);

    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al consultar los anuncios.');
    }
  });
};