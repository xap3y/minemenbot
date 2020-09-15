const Discord = require('discord.js');
const bot = new Discord.Client();
const colours = require('./colours.json')

var prefix = '-'

bot.on("ready", () =>{
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity('minemen.serv.nu | -help', { type: 'LISTENING'}).catch(console.error);
});

bot.on('message', message => {
	if (message.content === `${prefix}ip`) {
        message.channel.send('IP serveru je: **minemen.serv.nu**');
	} else if (message.content.startsWith(`${prefix}verze`)) {
        message.channel.send('Verze: **1.7.10 až 1.16**');
    }
    if(message.content === `${prefix}help`) {
        const sEmbed = new Discord.MessageEmbed()
        .setColor(colours.cyan)
        .setTitle('Help')
        .addField('\nPříkazy:', '``-ip`` - Zobrazí IP serveru \n``-verze`` - Zobrazí verzy serveru\nComing soon')
        message.channel.send({embed: sEmbed});
    }

});

bot.login(process.env.token);