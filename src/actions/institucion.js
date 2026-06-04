const { Markup } = require('telegraf');
const pool = require('../config/database');

module.exports = (bot) => {

    bot.action('institucion', async (ctx) => {

        try {

            await ctx.answerCbQuery();

            const [datos] = await pool.query(
                "SELECT id, titulo FROM informacion_institucional WHERE estado='ACTIVO'"
            );

            if (datos.length === 0) {
                return ctx.reply('🏫 No existe información institucional registrada.');
            }

            const botones = datos.map(item => [
                Markup.button.callback(
                    item.titulo,
                    `institucion_${item.id}`
                )
            ]);

            await ctx.reply(
                '🏫 Información Institucional',
                Markup.inlineKeyboard(botones)
            );

        } catch (error) {

            console.error(error);

            await ctx.reply(
                '❌ Error al consultar la información institucional.'
            );
        }

    });

    bot.action(/^institucion_(\d+)$/, async (ctx) => {

        try {

            await ctx.answerCbQuery();

            const id = ctx.match[1];

            const [resultado] = await pool.query(
                "SELECT titulo, contenido FROM informacion_institucional WHERE id = ?",
                [id]
            );

            if (resultado.length === 0) {
                return ctx.reply('❌ Información no encontrada.');
            }

            const info = resultado[0];

            await ctx.reply(
                `🏫 ${info.titulo}\n\n${info.contenido}`
            );

        } catch (error) {

            console.error(error);

            await ctx.reply(
                '❌ Error al obtener la información.'
            );
        }

    });

};