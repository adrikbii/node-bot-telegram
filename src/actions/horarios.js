const pool = require('../config/database');

module.exports = (bot) => {
  bot.action('horarios', async (ctx) => {
    try {
      await ctx.answerCbQuery();

      if (!ctx.session || !ctx.session.usuario) {
        return ctx.reply('🔐 Debes iniciar sesión con /start para consultar horarios.');
      }

      const usuario = ctx.session.usuario;

      if (!usuario.carrera_id) {
        return ctx.reply('❌ No tienes una carrera asignada. Contacta con administración.');
      }

      const [rows] = await pool.query(`
        SELECT 
          h.titulo,
          h.url_imagen,
          c.nombre AS carrera
        FROM horarios_imagenes h
        INNER JOIN carreras c ON h.carrera_id = c.id
        WHERE h.carrera_id = ?
        AND h.estado = 'ACTIVO'
        LIMIT 1
      `, [usuario.carrera_id]);

      if (rows.length === 0) {
        return ctx.reply('📅 No existe un horario registrado para tu carrera.');
      }

      const horario = rows[0];

      return ctx.reply(
        `📅 ${horario.titulo}\n\n` +
        `🎓 Carrera: ${horario.carrera}\n\n` +
        `🔗 Ver horario:\n${horario.url_imagen}`
      );

    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al consultar tu horario.');
    }
  });
};