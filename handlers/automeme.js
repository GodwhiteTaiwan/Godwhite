const Discord = require("discord.js");
const {MessageEmbed, MessageAttachment} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const canvacord = require("canvacord");
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const request = require("request");
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { dbEnsure, dbKeys, dbRemove, delay } = require("./functions")
const axios = require("axios");
var CronJob = require('cron').CronJob;
const path = require("path");
//starting the module
module.exports = async (client) => {
    //Loop through every setupped guild every single minute (30 second delay) and call the automeme command
    client.Jobautomeme = new CronJob('30 * * * * *', async function() {
        //Loop through all guilds and send a random auto-generated-meme setup
            //console.log("AUTOMEME :: Get keys".cyan.dim)
        const guilds = await dbKeys(client.settings, d => d.data?.automeme && d.data?.automeme != "no").then(gs => gs.filter(g => client.guilds.cache.has(g)))
            //console.log("AUTOMEME :: GUILDS:".cyan.dim, guilds)
        //Loop through all guilds and send a random auto-generated-meme setup
        for await (const guildid of guilds){
            await automeme(guildid)
        }
    }, null, true, 'Europe/Berlin');
    
    client.on("ready", () => {
        client.Jobautomeme.start();
    })

    //function for sending automatic nsfw
    async function automeme(guildid){
        return new Promise(async (res) => {
            try{
                //get the Guild
                var guild = client.guilds.cache.get(guildid);
                //if no guild, return
                if(!guild) return;
                //define a variable for the channel
                var channel;
                //get the settings 
                let set = await client.settings.get(guild.id+".automeme");
                //If no settings found, or defined on "no" return
                if(!set || set == "no") return
                //try to fetch the channel if no channel found throw error and return
                try{
                    channel = await client.channels.fetch(set).catch(() => null)
                    if(!channel || channel == null || channel == undefined || !channel.name || channel.name == null || channel.name == undefined) throw "Channel not found"
                }catch (e){
                    return;
                }
                axios.get("https://memes.tw/wtf/api")
                    .then((res) => {
                        channel.send(res.data[Math.floor(Math.random() * res.data.length)]?res.data[Math.floor(Math.random() * res.data.length)].src:null);
                    })
                    .catch(() => {
                        console.error("ERR: ", err);
                    })
            }catch (e){
                console.error(e)
            }
        })
    }


}