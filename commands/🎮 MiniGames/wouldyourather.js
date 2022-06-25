const { WillYouPressTheButton } = require('weky')
const { MessageEmbed } = require("discord.js");
const config = require(`../../botconfig/config.json`);
var ee = require(`../../botconfig/embed.json`);

module.exports = {
    name: "wouldyourather",
    aliases: ["wyr"],
    category: "🎮 MiniGames",
    description: "Would you Rather?",
    usage: "wouldyourather --> Play the Game",
    type: "buttons",
     run: async (client, message, args, cmduser, text, prefix, player, es, ls, GuildSettings) => {
        
        if(GuildSettings.FUN === false){
          return message.reply(new MessageEmbed()
            .setColor(es.wrongcolor)
            .setFooter(client.getFooter(es))
            .setTitle(client.la[ls].common.disabled.title)
            .setDescription(require(`../../handlers/functions`).handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
          );
        }
        await WillYouPressTheButton({
          message: message,
          embed: {
            title: 'Will you press the button?',
            description: '```{{statement1}}```\n**but**\n\n```{{statement2}}```',
            color: es.color,
            footer: es.footertext,
            timestamp: true,
          },
          button: { yes: 'Yes', no: 'No' },
          thinkMessage: 'I am thinking',
          othersMessage: 'Only <@{{author}}> can use the buttons!',
        });
        
    }
  }