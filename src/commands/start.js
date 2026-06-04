module.exports = (bot) => {
    bot.start(async (ctx) => {

        ctx.session = {};
        ctx.session.loginStep = 'cedula';

        await ctx.reply(
            '🤖 Bienvenido a ANNI\n\n' +
            'Asistente Virtual Institucional del INAN.\n\n' +
            '🔐 Por favor ingresa tu número de cédula:'
        );

    });
};