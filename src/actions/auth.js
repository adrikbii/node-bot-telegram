const pool = require('../config/database');
const { Markup } = require('telegraf');

function menuEstudiante() {
    return Markup.inlineKeyboard([
        [Markup.button.callback('📅 Horarios', 'horarios')],
        [Markup.button.callback('🗓 Calendario', 'calendario')],
        [Markup.button.callback('📚 Malla Curricular', 'malla')],
        [Markup.button.callback('🏫 Información Institucional', 'institucion')],
        [Markup.button.callback('❓ Preguntas Frecuentes', 'faq')],
        [Markup.button.callback('📞 Contactos', 'contactos')],
        [Markup.button.callback('🚪 Cerrar Sesión', 'logout')]
    ]);
}

function menuDocente() {
    return Markup.inlineKeyboard([
        [Markup.button.callback('📅 Horarios', 'horarios')],
        [Markup.button.callback('🗓 Calendario', 'calendario')],
        [Markup.button.callback('📚 Malla Curricular', 'malla')],
        [Markup.button.callback('🏫 Información Institucional', 'institucion')],
        [Markup.button.callback('❓ Preguntas Frecuentes', 'faq')],
        [Markup.button.callback('📞 Contactos', 'contactos')],
        [Markup.button.callback('🚪 Cerrar Sesión', 'logout')]
    ]);
}

function menuAdmin() {
    return Markup.inlineKeyboard([
        [Markup.button.callback('👥 Usuarios', 'admin_usuarios')],
        [Markup.button.callback('📚 Carreras y Materias', 'admin_academico')],
        [Markup.button.callback('❓ FAQ', 'faq')],
        [Markup.button.callback('🏫 Información Institucional', 'institucion')],
        [Markup.button.callback('📞 Contactos', 'contactos')],
        [Markup.button.callback('📊 Estadísticas', 'admin_estadisticas')],
        [Markup.button.callback('🚪 Cerrar Sesión', 'logout')]
    ]);
}

function obtenerMenuPorRol(rol) {
    if (rol === 'ADMIN') {
        return menuAdmin();
    }

    if (rol === 'DOCENTE') {
        return menuDocente();
    }

    return menuEstudiante();
}

module.exports = (bot) => {

    bot.on('text', async (ctx) => {

        try {

            if (!ctx.session || !ctx.session.loginStep) {
                return;
            }

            const texto = ctx.message.text.trim();

            if (ctx.session.loginStep === 'cedula') {

                ctx.session.cedula = texto;
                ctx.session.loginStep = 'password';

                return ctx.reply('🔐 Ahora ingresa tu contraseña:');
            }

            if (ctx.session.loginStep === 'password') {

                const password = texto;

                const [usuarios] = await pool.query(
                    `
                    SELECT
                        u.id,
                        u.nombre,
                        u.cedula,
                        r.nombre AS rol
                    FROM usuarios u
                    INNER JOIN roles r
                        ON u.rol_id = r.id
                    WHERE u.cedula = ?
                    AND u.password = ?
                    AND u.estado = 'ACTIVO'
                    `,
                    [ctx.session.cedula, password]
                );

                if (usuarios.length === 0) {
                    ctx.session = {};

                    return ctx.reply(
                        '❌ Credenciales incorrectas.\n\nUsa /start para intentarlo nuevamente.'
                    );
                }

                const usuario = usuarios[0];

                ctx.session.usuario = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    rol: usuario.rol
                };

                ctx.session.loginStep = null;

                return ctx.reply(
                    `✅ Bienvenido ${usuario.nombre}\n\nRol: ${usuario.rol}\n\nSeleccione una opción:`,
                    obtenerMenuPorRol(usuario.rol)
                );
            }

        } catch (error) {

            console.error(error);

            return ctx.reply('❌ Error durante el inicio de sesión.');
        }

    });

    bot.action('logout', async (ctx) => {
        await ctx.answerCbQuery();

        ctx.session = {};

        return ctx.reply(
            '🚪 Sesión cerrada correctamente.\n\nUsa /start para iniciar sesión nuevamente.'
        );
    });

    bot.action('admin_usuarios', async (ctx) => {
        await ctx.answerCbQuery();

        if (!ctx.session.usuario || ctx.session.usuario.rol !== 'ADMIN') {
            return ctx.reply('❌ No tienes permiso para acceder a esta opción.');
        }

        return ctx.reply('👥 Módulo de usuarios pendiente de implementación.');
    });

    bot.action('admin_academico', async (ctx) => {
        await ctx.answerCbQuery();

        if (!ctx.session.usuario || ctx.session.usuario.rol !== 'ADMIN') {
            return ctx.reply('❌ No tienes permiso para acceder a esta opción.');
        }

        return ctx.reply('📚 Módulo académico pendiente de implementación.');
    });

    bot.action('admin_estadisticas', async (ctx) => {
        await ctx.answerCbQuery();

        if (!ctx.session.usuario || ctx.session.usuario.rol !== 'ADMIN') {
            return ctx.reply('❌ No tienes permiso para acceder a esta opción.');
        }

        return ctx.reply('📊 Módulo de estadísticas pendiente de implementación.');
    });

};