const { Markup } = require('telegraf');
const pool = require('../config/database');

module.exports = (bot) => {

    bot.action('calendario', async (ctx) => {

        try {

            await ctx.answerCbQuery();

            const [calendarios] = await pool.query(
                `
                SELECT
                    titulo,
                    url_archivo
                FROM calendario_academico
                WHERE estado = 'ACTIVO'
                LIMIT 1
                `
            );

            if (calendarios.length === 0) {

                return ctx.reply(
                    '❌ No existe un calendario académico registrado.'
                );
            }

            const calendario = calendarios[0];

            return ctx.reply(
                `🗓 ${calendario.titulo}`,
                Markup.inlineKeyboard([
                    [
                        Markup.button.url(
                            '📄 Ver Calendario Académico',
                            calendario.url_archivo
                        )
                    ]
                ])
            );

        } catch (error) {

            console.error(error);

            return ctx.reply(
                '❌ Error al consultar el calendario académico.'
            );
        }

    });

};