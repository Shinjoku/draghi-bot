// Discord Bot
const Discord = require('discord.js');
const bot = new Discord.Client();
const token =  process.env.BOT_TOKEN;

// Local
const commands = require('./commands.js');


bot.on('message', async message => {

    // Variáveis
    let words;
    let op;
    let params;


    // Validações do bot
    if (message.author.bot) return;
    if (message.content.indexOf('!') !== 0) return;


    // Obtenção dos parâmetros
    params = message.content.split(' ');
    op = params[0];
    words = params.slice(1).join(' ');


    // Resposta ao server
    if (op === '!gif')
        commands.gif(message, words);
    else if (op === '!ping')
        commands.ping(message, bot);
    else if (op === '!translate') 
        commands.translate(params[1], params.slice(2).join(' '));
    else if (op === '!gimme')
        commands.gimme(message, words);
    else
        message.channel.send(`O comando ${op} nem existe, seu troxa!`);


    // Debug
    console.log('Comando:', op, 'Palavras:', (words ? words : 'Nenhuma'));

});

bot.login(token);
