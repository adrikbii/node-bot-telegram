const { Markup } = require('telegraf');
const pool = require('../config/database');

module.exports = (bot) => {

    // Mostrar malla curricular por imagen
    bot.action('malla', async (ctx) => {

        try {

            await ctx.answerCbQuery();

            if (!ctx.session || !ctx.session.usuario) {
                return ctx.reply('❌ Debes iniciar sesión con /start.');
            }

            const usuario = ctx.session.usuario;

            // Si es ESTUDIANTE, muestra directamente la malla de su carrera asignada
            if (usuario.rol === 'ESTUDIANTE') {

                if (!usuario.carrera_id) {
                    return ctx.reply('❌ No tienes una carrera asignada.');
                }

                return enviarMallaPorCarrera(ctx, usuario.carrera_id);
            }

            // Si es ADMIN o DOCENTE, puede seleccionar carrera
            const [carreras] = await pool.query(
                "SELECT id, nombre FROM carreras WHERE estado = 'ACTIVO'"
            );

            if (carreras.length === 0) {
                return ctx.reply('❌ No existen carreras registradas.');
            }

            const botones = carreras.map(carrera => [
                Markup.button.callback(
                    carrera.nombre,
                    `malla_carrera_${carrera.id}`
                )
            ]);

            return ctx.reply(
                '📚 Selecciona una carrera para ver su malla curricular:',
                Markup.inlineKeyboard(botones)
            );

        } catch (error) {

            console.error(error);

            return ctx.reply('❌ Error al consultar la malla curricular.');
        }

    });

    // Mostrar malla después de seleccionar carrera
    bot.action(/^malla_carrera_(\d+)$/, async (ctx) => {

        try {

            await ctx.answerCbQuery();

            if (!ctx.session || !ctx.session.usuario) {
                return ctx.reply('❌ Debes iniciar sesión con /start.');
            }

            const carreraId = ctx.match[1];

            return enviarMallaPorCarrera(ctx, carreraId);

        } catch (error) {

            console.error(error);

            return ctx.reply('❌ Error al obtener la malla curricular.');
        }

    });

};

async function enviarMallaPorCarrera(ctx, carreraId) {

    const [mallas] = await pool.query(
        `
        SELECT
            m.titulo,
            m.url_imagen,
            c.nombre AS carrera
        FROM mallas_curriculares m
        INNER JOIN carreras c
            ON m.carrera_id = c.id
        WHERE m.carrera_id = ?
        AND m.estado = 'ACTIVO'
        `,
        [carreraId]
    );

    if (mallas.length === 0) {
        return ctx.reply('❌ No existe una malla curricular registrada para esta carrera.');
    }

    const malla = mallas[0];

    return ctx.reply(
    `📚 ${malla.titulo}\n\nCarrera: ${malla.carrera}`,
    Markup.inlineKeyboard([
        [
            Markup.button.url('🖼 Ver malla curricular', malla.url_imagen)
        ]
    ])
);
}