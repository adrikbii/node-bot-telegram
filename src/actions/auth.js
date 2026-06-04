const pool = require('../config/database');
const { Markup } = require('telegraf');

module.exports = (bot) => {

    bot.on('text', async (ctx) => {

        try {

            if (!ctx.session || !ctx.session.loginStep) {
                return;
            }

            const texto = ctx.message.text.trim();

            // Paso 1: Cédula
            if (ctx.session.loginStep === 'cedula') {

                ctx.session.cedula = texto;
                ctx.session.loginStep = 'password';

                return ctx.reply(
                    '🔐 Ahora ingresa tu contraseña:'
                );
            }

            // Paso 2: Contraseña
            if (ctx.session.loginStep === 'password') {

                const password = texto;

                const [usuarios] = await pool.query(
                    `
                    SELECT *
                    FROM usuarios
                    WHERE cedula = ?
                    AND password = ?
                    AND estado = 'ACTIVO'
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
                    `✅ Bienvenido ${usuario.nombre}\n\nRol: ${usuario.rol}`,
                    Markup.inlineKeyboard([
                        [
                            Markup.button.callback('📅 Horarios', 'horarios')
                        ],
                        [
                            Markup.button.callback('🗓 Calendario', 'calendario')
                        ],
                        [
                            Markup.button.callback('📚 Malla Curricular', 'malla')
                        ],
                        [
                            Markup.button.callback('🏫 Información Institucional', 'institucion')
                        ],
                        [
                            Markup.button.callback('❓ Preguntas Frecuentes', 'faq')
                        ],
                        [
                            Markup.button.callback('📞 Contactos', 'contactos')
                        ]
                    ])
                );

            }

        } catch (error) {

            console.error(error);

            return ctx.reply(
                '❌ Error durante el inicio de sesión.'
            );
        }

    });

};