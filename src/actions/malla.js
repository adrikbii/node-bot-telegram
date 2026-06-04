const { Markup } = require('telegraf');
const pool = require('../config/database');

module.exports = (bot) => {

    // Mostrar carreras
    bot.action('malla', async (ctx) => {

        try {

            await ctx.answerCbQuery();

            const [carreras] = await pool.query(
                "SELECT id, nombre FROM carreras WHERE estado = 'ACTIVO'"
            );

            const botones = carreras.map(carrera => [
                Markup.button.callback(
                    carrera.nombre,
                    `carrera_${carrera.id}`
                )
            ]);

            await ctx.reply(
                '📚 Selecciona una carrera:',
                Markup.inlineKeyboard(botones)
            );

        } catch (error) {

            console.error(error);

            await ctx.reply(
                '❌ Error al consultar carreras.'
            );
        }

    });

    // Mostrar ciclos
    bot.action(/^carrera_(\d+)$/, async (ctx) => {

        try {

            await ctx.answerCbQuery();

            const carreraId = ctx.match[1];

            const [ciclos] = await pool.query(
                "SELECT id, nombre FROM ciclos"
            );

            const botones = ciclos.map(ciclo => [
                Markup.button.callback(
                    ciclo.nombre,
                    `materias_${carreraId}_${ciclo.id}`
                )
            ]);

            await ctx.reply(
                '📖 Selecciona un ciclo:',
                Markup.inlineKeyboard(botones)
            );

        } catch (error) {

            console.error(error);

            await ctx.reply(
                '❌ Error al consultar ciclos.'
            );
        }

    });

    // Mostrar materias
    bot.action(/^materias_(\d+)_(\d+)$/, async (ctx) => {

        try {

            await ctx.answerCbQuery();

            const carreraId = ctx.match[1];
            const cicloId = ctx.match[2];

            const [carrera] = await pool.query(
                "SELECT nombre FROM carreras WHERE id = ?",
                [carreraId]
            );

            const [ciclo] = await pool.query(
                "SELECT nombre FROM ciclos WHERE id = ?",
                [cicloId]
            );

            const [materias] = await pool.query(
                `
                SELECT nombre
                FROM materias
                WHERE carrera_id = ?
                AND ciclo_id = ?
                AND estado = 'ACTIVO'
                `,
                [carreraId, cicloId]
            );

            if (materias.length === 0) {

                return ctx.reply(
                    '❌ No existen materias registradas.'
                );
            }

            let mensaje =
                `📚 ${carrera[0].nombre}\n\n` +
                `📖 ${ciclo[0].nombre}\n\n`;

            materias.forEach(materia => {
                mensaje += `• ${materia.nombre}\n`;
            });

            await ctx.reply(mensaje);

        } catch (error) {

            console.error(error);

            await ctx.reply(
                '❌ Error al consultar materias.'
            );
        }

    });

};