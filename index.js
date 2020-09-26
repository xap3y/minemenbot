const Discord = require('discord.js');
const bot = new Discord.Client();
const colours = require('./colours.json')

const prefix = '-'

bot.on("ready", () =>{
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity('minemen.serv.nu | -help', { type: 'LISTENING'}).catch(console.error);
});

bot.on('message', message =>{
 
    let args = message.content.substring(prefix.length).split(' ')
 
    switch(args[0]){
        case 'mc':
 
            if(!args[1]) return message.channel.send('You must type a minecraft server ip')
            if(!args[2]) return message.channel.send('You must type a minecraft server port')
 
            ping(args[1], parseInt(args[2]), (error, reponse) =>{
                if(error) throw error
                const Embed = new RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                
                message.channel.send(Embed)
            })
        break
 
    }
 
})

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
        .addField('\nPříkazy:', '``-ip`` - Zobrazí IP serveru \n``-verze`` - Zobrazí verzy serveru \n``-status`` - Zobrazí status serveru')
        message.channel.send({embed: sEmbed});
    }
    if(message.content === `${prefix}status`) {
        const sEmbed = new Discord.MessageEmbed()
        .setColor(colours.cyan)
        .setTitle('Help')
        .addField('\nMinihry:', '``Creative`` - online \n``Survival`` - online \n``parkour`` - offline \n``Skyblock`` - online \n``Village Defense`` - online \n``Build Battle`` - online \n``murder`` - online \n``Prison`` - online \n``KitPvP`` - online \n``SkyWars`` - online \n``1vs1`` - online \n``TnTRun`` - online \n``Eggwars`` - připravujeme.')
    }    
});

bot.login(process.env.token);