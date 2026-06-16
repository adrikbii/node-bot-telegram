const { Markup } = require('telegraf');
const pool = require('../config/database');

module.exports = (bot) => {
  bot.action('horarios', async (ctx) => {
    try {
      await ctx.answerCbQuery();

      if (!ctx.session || !ctx.session.usuario) {
        return ctx.reply('🔐 Debes iniciar sesión con /start.');
      }

      const usuario = ctx.session.usuario;

      // ESTUDIANTE: horario por carrera
      if (usuario.rol === 'ESTUDIANTE') {
        if (!usuario.carrera_id) {
          return ctx.reply('❌ No tienes una carrera asignada.');
        }

        const [rows] = await pool.query(
          `
          SELECT h.titulo, h.url_imagen, c.nombre AS carrera
          FROM horarios_imagenes h
          INNER JOIN carreras c ON h.carrera_id = c.id
          WHERE h.carrera_id = ?
          AND h.estado = 'ACTIVO'
          LIMIT 1
          `,
          [usuario.carrera_id]
        );

        if (rows.length === 0) {
          return ctx.reply('📅 No existe un horario registrado para tu carrera.');
        }

        const horario = rows[0];

        return ctx.reply(
          `📅 ${horario.titulo}\n\n` +
          `🎓 Carrera: ${horario.carrera}\n\n` +
          `🔗 Ver horario:\n${horario.url_imagen}`
        );
      }

      // DOCENTE: horario propio
      if (usuario.rol === 'DOCENTE') {
        const [rows] = await pool.query(
          `
          SELECT titulo, url_imagen
          FROM horarios_docentes
          WHERE usuario_id = ?
          AND estado = 'ACTIVO'
          LIMIT 1
          `,
          [usuario.id]
        );

        if (rows.length === 0) {
          return ctx.reply('📅 No tienes un horario docente registrado.');
        }

        const horario = rows[0];

        return ctx.reply(
          `📅 ${horario.titulo}\n\n` +
          `👨‍🏫 Horario docente\n\n` +
          `🔗 Ver horario:\n${horario.url_imagen}`
        );
      }

      // ADMIN: lista todos los horarios por carrera
      if (usuario.rol === 'ADMIN') {
        const [horarios] = await pool.query(
          `
          SELECT h.id, h.titulo, c.nombre AS carrera
          FROM horarios_imagenes h
          INNER JOIN carreras c ON h.carrera_id = c.id
          WHERE h.estado = 'ACTIVO'
          ORDER BY c.nombre ASC
          `
        );

        if (horarios.length === 0) {
          return ctx.reply('📅 No hay horarios registrados.');
        }

        const botones = horarios.map((horario) => [
          Markup.button.callback(
            `📅 ${horario.carrera}`,
            `horario_admin_${horario.id}`
          )
        ]);

        return ctx.reply(
          '📅 Selecciona un horario:',
          Markup.inlineKeyboard(botones)
        );
      }

    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al consultar horarios.');
    }
  });

  bot.action(/^horario_admin_(\d+)$/, async (ctx) => {
    try {
      await ctx.answerCbQuery();

      const horarioId = ctx.match[1];

      const [rows] = await pool.query(
        `
        SELECT h.titulo, h.url_imagen, c.nombre AS carrera
        FROM horarios_imagenes h
        INNER JOIN carreras c ON h.carrera_id = c.id
        WHERE h.id = ?
        AND h.estado = 'ACTIVO'
        `,
        [horarioId]
      );

      if (rows.length === 0) {
        return ctx.reply('❌ Horario no encontrado.');
      }

      const horario = rows[0];

      return ctx.reply(
        `📅 ${horario.titulo}\n\n` +
        `🎓 Carrera: ${horario.carrera}\n\n` +
        `🔗 Ver horario:\n${horario.url_imagen}`
      );

    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Error al obtener horario.');
    }
  });
};