const Discord = require('discord.js')
const Schema = require('../../../models/welcomeChannel')
const client = require('../../../index')
const { MessageEmbed } = require("discord.js")



client.on('guildMemberAdd', async (member) => {
  Schema.findOne({ Guild: member.guild.id }, async (e, data) => {
    if (!data) return
    let user = member.user;

    const welcomeembed = new Discord.MessageEmbed()
      .setColor("#36383e")
      .setTimestamp()
      .setThumbnail(`${member.displayAvatarURL()}`)
      .setFooter("ELITE DEVELOPMENT", member.guild.iconURL({ dynamic: true }))

   
     .setTitle(`Welcome To ELiTE DEVELOPMENT ™`) 
      .setDescription(`┈     ┈     ┈    ⋞ 〈 ⏣ 〉 ⋟     ┈     ┈   ┈   
₊˚ˑ ⊱┊<a:rules:1038677480137039986> **Check Out Rules **<#1052584570190577714> 
₊˚ˑ ⊱┊<:announce:1038677684261240872> **Server Updates**<#1052584617804300379> 
₊˚ˑ ⊱┊<:chat:1038677785964716152>  **Chat With Server Members** <#1052584579703242752> 
₊˚ˑ ⊱┊<:roles:1038677950377242637>  **Get Roles**  <#1052584573822840933>
┈     ┈     ┈    ⋞ 〈 ⏣ 〉 ⋟     ┈     ┈   ┈   
**Hope you enjoy the stay** <a:Star:1038680398860918896>`)

      .setImage (`https://media.discordapp.net/attachments/852966209376092212/973099219290320946/standard_3.gif`)

    //define the welcome channel
    const channel = member.guild.channels.cache.get(data.Channel)
    //send the welcome embed to there

    channel.send({content: `${member}` ,
      embeds: [welcomeembed]
    });
    const usersend = new MessageEmbed()
    .setTitle(`Welcome To ELiTE DEVELOPMENT ™`)
    .setDescription(`<:d_arrow:1034487788743168085> Hey ${member} Welcome To ELiTE DEVELOPMENT ™
<:d_arrow:1034487788743168085> Read & Follow Rules In <#1052584570190577714> 
<:d_arrow:1034487788743168085> Invite Our Bots To Your Server`)
   // .setThumbnail("https://cdn.discordapp.com/attachments/966933160816427009/1054341978185285672/df8aacd4-896e-4846-ae20-cdeb2a8f972f.png")
    .setFooter("Hope you enjoy the stay")
     user.send({content: `${member}`,
       embeds: [usersend]});
    })
  
});