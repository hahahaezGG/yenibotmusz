const Discord = require('discord.js');qwewq
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()qewqewq
.setDescription(`Avatarınız:`qwewqeqwe)
.setImage(`${message.author.avatarURL} `)
.setColor(0xf7dc46));qweqwew
   }

qweqwwqe
exports.conf = {
 enabled: true,
 guildOnly: false,qwwq
 aliases: [],eq
};wqe
ee
 description: 'Avatarınızı Atar 'qwqe
