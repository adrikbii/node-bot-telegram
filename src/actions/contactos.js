const { Markup } = require('telegraf');
const pool = require('../config/database');

module.exports = (bot) => {
  bot.action('contactos', async (ctx) => {
    try {
      await ctx.answerCbQuery();

      const [contactos] = await pool.query(
        "SELECT id, departamento FROM contactos WHERE estado = 'ACTIVO' ORDER BY departamento ASC"
      );

      if (contactos.length === 0) {
        return ctx.reply('📞 No hay contactos registrados.');
      }

      const botones = contactos.map((contacto) => [
        Markup.button.callback(
          `🏢 ${contacto.departamento}`,
          `contacto_${contacto.id}`
        )
      ]);

      return ctx.reply(
        '📞 Selecciona un departamento:',
        Markup.inlineKeyboard(botones)
      );

    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al consultar los contactos.');
    }
  });

  bot.action(/^contacto_(\d+)$/, async (ctx) => {
    try {
      await ctx.answerCbQuery();

      const contactoId = ctx.match[1];

      const [rows] = await pool.query(
        `SELECT departamento, responsable, telefono, correo, horario_atencion
         FROM contactos
         WHERE id = ? AND estado = 'ACTIVO'`,
        [contactoId]
      );

      if (rows.length === 0) {
        return ctx.reply('❌ El contacto seleccionado no está disponible.');
      }

      const contacto = rows[0];

      let mensaje = `🏢 ${contacto.departamento}\n\n`;

      if (contacto.responsable) {
        mensaje += `👤 Responsable:\n${contacto.responsable}\n\n`;
      }

      if (contacto.telefono) {
        mensaje += `📱 Teléfono:\n${contacto.telefono}\n\n`;
      }

      if (contacto.correo) {
        mensaje += `✉️ Correo:\n${contacto.correo}\n\n`;
      }

      if (contacto.horario_atencion) {
        mensaje += `🕒 Horario de atención:\n${contacto.horario_atencion}`;
      }

      return ctx.reply(mensaje);

    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al obtener el contacto.');
    }
  });
};