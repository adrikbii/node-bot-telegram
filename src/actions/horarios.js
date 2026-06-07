const { Markup } = require('telegraf');
const pool = require('../config/database');

module.exports = (bot) => {

    // Mostrar horarios
    bot.action('horarios', async (ctx) => {

        try {

            await ctx.answerCbQuery();

            if (!ctx.session || !ctx.session.usuario) {
                return ctx.reply('❌ Debes iniciar sesión con /start.');
            }

            const usuario = ctx.session.usuario;

            // ESTUDIANTE → ve directamente el horario de su carrera
            if (usuario.rol === 'ESTUDIANTE') {

                if (!usuario.carrera_id) {
                    return ctx.reply('❌ No tienes una carrera asignada.');
                }

                return enviarHorarioPorCarrera(
                    ctx,
                    usuario.carrera_id
                );
            }

            // ADMIN y DOCENTE → seleccionan carrera
            const [carreras] = await pool.query(
                "SELECT id, nombre FROM carreras WHERE estado = 'ACTIVO'"
            );

            const botones = carreras.map(carrera => [
                Markup.button.callback(
                    carrera.nombre,
                    `horario_carrera_${carrera.id}`
                )
            ]);

            return ctx.reply(
                '📅 Selecciona una carrera:',
                Markup.inlineKeyboard(botones)
            );

        } catch (error) {

            console.error(error);

            return ctx.reply(
                '❌ Error al consultar horarios.'
            );
        }

    });

    // Mostrar horario de una carrera
    bot.action(/^horario_carrera_(\d+)$/, async (ctx) => {

        try {

            await ctx.answerCbQuery();

            const carreraId = ctx.match[1];

            return enviarHorarioPorCarrera(
                ctx,
                carreraId
            );

        } catch (error) {

            console.error(error);

            return ctx.reply(
                '❌ Error al consultar horarios.'
            );
        }

    });

};

async function enviarHorarioPorCarrera(ctx, carreraId) {

    const [horarios] = await pool.query(
        `
        SELECT
            h.titulo,
            h.url_imagen,
            c.nombre AS carrera
        FROM horarios_imagenes h
        INNER JOIN carreras c
            ON h.carrera_id = c.id
        WHERE h.carrera_id = ?
        AND h.estado = 'ACTIVO'
        `,
        [carreraId]
    );

    if (horarios.length === 0) {

        return ctx.reply(
            '❌ No existe un horario registrado para esta carrera.'
        );
    }

    const horario = horarios[0];

    return ctx.reply(
        `📅 ${horario.titulo}\n\nCarrera: ${horario.carrera}`,
        Markup.inlineKeyboard([
            [
                Markup.button.url(
                    '🖼 Ver Horario',
                    horario.url_imagen
                )
            ]
        ])
    );
}