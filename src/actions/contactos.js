const pool = require('../config/database');

module.exports = (bot) => {
  bot.action('contactos', async (ctx) => {
    try {
      await ctx.answerCbQuery();

      const [contactos] = await pool.query(
        "SELECT departamento, responsable, telefono, correo, horario_atencion FROM contactos WHERE estado = 'ACTIVO'"
      );

      if (contactos.length === 0) {
        return ctx.reply('📞 No hay contactos registrados.');
      }

      let mensaje = '📞 Contactos institucionales:\n\n';

      contactos.forEach((contacto, index) => {
        mensaje += `${index + 1}. ${contacto.departamento}\n`;

        if (contacto.responsable) {
          mensaje += `👤 Responsable: ${contacto.responsable}\n`;
        }

        if (contacto.telefono) {
          mensaje += `📱 Teléfono: ${contacto.telefono}\n`;
        }

        if (contacto.correo) {
          mensaje += `✉️ Correo: ${contacto.correo}\n`;
        }

        if (contacto.horario_atencion) {
          mensaje += `🕒 Horario: ${contacto.horario_atencion}\n`;
        }

        mensaje += '\n';
      });

      return ctx.reply(mensaje);
    } catch (error) {
      console.error(error);
      return ctx.reply('❌ Ocurrió un error al consultar los contactos.');
    }
  });
};