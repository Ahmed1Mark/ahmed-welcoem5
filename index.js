const { Client, Intents, MessageAttachment, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const { resolveImage, Canvas} = require("canvas-constructor/cairo")
const Keyv = require('keyv');
const { inviteTracker } = require("discord-inviter");
const rules = require('./rules.json');
const fs = require('fs');
const { startServer } = require("./alive.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const db = new Keyv('sqlite://./storage/database.sqlite');
db.on('error', err => console.log('Connection Error', err));

const {
    token,
    prefix
} = require('./config.json')
let canvax = require('canvas')
canvax.registerFont("./storage/Uni Sans Heavy.otf", { family: 'Discord' })
canvax.registerFont("./storage/DejaVuSansCondensed-Bold.ttf", { family: 'Discordx' })
const client = new Client({
    intents: ["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]
  }) // Declare client to be a new Discord Client (bot)
require('http').createServer((req, res) => res.end(`
Dveloper Bot : Ahmed Clipper
Server Support : https://dsc.gg/clipper-tv
`)).listen(3000) //Dont remove this 
  /*
  Code Below provides info about the bot 
  once it's ready
  */


const quotes = [
  " # **❤ الْحَمْدُ لِلَّهِ ❤** ",
  " # **❤ سُبْحَانَ اللَّهِ ❤** ",
  " # **❤ لَا إِلَهَ إِلَّا اللَّهُ ❤** ",
  " # **❤ أَسْتَغْفِرُ اللَّهَ العظيم ❤** ",
  " # **❤ سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ ❤** ",
  " # **❤ الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ ❤** ",
  " # **❤ لا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ ❤** ",
  " # **❤ سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ  ❤** ",
  " # **❤ اللهم أعنا على صيام رمضان ❤** ",
  " # **❤ الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ ❤** ",
  " # **❤ اللهم اغفر لي وارحمني في رمضان ❤** ",
  " # **❤ اللهم اجعل رمضان شهر خير وبركة ❤** ",
  " # **❤ اللهم بارك لنا في رمضان وفي أعمالنا ❤** ",
  " # **❤ اللهمَّ بَلِّغْنَا رَمَضَانَ وَنَحْنُ فِي أَفْضَلِ حَالٍ ❤** ",
  " # **❤ الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد ❤** ",
  " # **❤ سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ ❤** ",
  " # **❤ اللَّهُ أَكْبَرُ كَبِيرًا ، وَالْحَمْدُ لِلَّهِ كَثِيرًا ، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً ❤** ",
  " # **❤ اَللّهُمَّ اجْعَلْني فيهِ مِنَ عبادِكَ الصّالحينَ القانتين المُسْتَغْفِرينَ الْمُقَرَّبينَ ❤** ",
  // يمكنك إضافة المزيد من الأذكار هنا
];
const azkarList = [
  {
    text: "# ❤ **__سورة الناس__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216517282214314154/9ae254c363ccd7d0.png?ex=6600ad01&is=65ee3801&hm=2817963a67887949e5d33dd5b80d50e1cb0005733f26fccd62ae6e657c9f3cd0&",
  },
  {
    text: "# ❤ **__سورة الفلق__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216517443690958928/ba5f41c6b84d64d5.png?ex=6600ad28&is=65ee3828&hm=6b15409354a92e9383168646127367cf360b222f3f7cc1196b734f7175948d29&",
  },
  {
    text: "# ❤ **__سورة الإخلاص__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216517596862615593/a3db441964abb0eb.png?ex=6600ad4c&is=65ee384c&hm=ddf4872e9a648acf164cd2ee29aed2ac98ba8ab5b6b6c47406cf950b68918a42&",
  },
  {
    text: "# ❤ **__سورة المسد__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216519561738715286/27ce82ae2c65c265.png?ex=6600af21&is=65ee3a21&hm=9e8cc6ded504a206cdfbcde1cd587ac4bde974764a527cb4589027717d6e136d&",
  },
  {
    text: "# ❤ **__سورة النصر__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216519908641472553/6f7705072eaafbfc.png?ex=6600af74&is=65ee3a74&hm=1945f1c9c055a2f36332f2404209fc92270c727ebdc75270304c01b521bf62e2&",
  },
  {
    text: "# ❤ **__سورة الكافرون__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216520084156190730/6dbe8233a72a6ba5.png?ex=6600af9d&is=65ee3a9d&hm=348a07551bff376a2000f08da05558c59c90ea144e2ae7023682860fdb5f3b06&",
  },
  {
    text: "# ❤ **__سورة الكوثر__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216520340008734872/658db6f30bf97136.png?ex=6600afda&is=65ee3ada&hm=5d2f0b789acf9913cca36c056e24aa4a1d86435193893ffaa8a5e57887ffdb60&",
  },
  {
    text: "# ❤ **__سورة الماعون__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216520514512621578/10267233d5c30e3c.png?ex=6600b004&is=65ee3b04&hm=78ad03121f94177b2963e93078493341aac89eb04cffacd520cf9148e86f7fe5&",
  },
  {
    text: "# ❤ **__سورة قريش__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216520688425369770/0a7645262e645d49.png?ex=6600b02d&is=65ee3b2d&hm=f03d481b8ab00d44d63953350e43e2399c16a985ea34beb94ab9c85fa61c1edd&",
  },
  {
    text: "# ❤ **__سورة الفيل__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216520849050570852/854a3f00f063a0c3.png?ex=6600b054&is=65ee3b54&hm=fefe7d07bd6f9a334a7f001ea66736c0a861340d16cfb384aa0edc81c3ecc7cb&",
  },
  {
    text: "# ❤ **__سورة الهمزة__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216521249996541996/5d8d508c088e45eb.png?ex=6600b0b3&is=65ee3bb3&hm=e70701519786ec41e822422408d66ce1bf619eeaaa31d36d67034868ba0887e3&",
  },
  {
    text: "# ❤ **__سورة العصر__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216521384625438720/bc4fbbfb62189021.png?ex=6600b0d3&is=65ee3bd3&hm=f4fcb7ca33c80a82feae6cfb52015d998c04601ab4a410a6b070fda00712e571&",
  },
  {
    text: "# ❤ **__سورة التكاثر__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216521622807117874/b97cc4eb4db29265.png?ex=6600b10c&is=65ee3c0c&hm=6f328b6a12c4cd27c707f98685b247a06bcf73f40511d9655ba3da279acf60a0&",
  },
  {
    text: "# ❤ **__سورة القارعة__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216521754554667218/b06b5487fb269767.png?ex=6600b12c&is=65ee3c2c&hm=9d41bc7bd69af4e7684dbc2c8674930beb289c117f7d50cad9b31d6074a9390e&",
  },
  {
    text: "# ❤ **__سورة العاديات__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216521949149134928/87c179057f37188a.png?ex=6600b15a&is=65ee3c5a&hm=e87f4773cb8a61affd84f7bb2f1dfd8c4399feaa6ca5f7bbebb6f5544f67ae6f&",
  },
  {
    text: "# ❤ **__سورة الزلزلة__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216522207740690522/b96609e39b799c1c.png?ex=6600b198&is=65ee3c98&hm=cb7b0c15fc02d942f52bb6c7cb5ef76799bd299293d2b128732136c88d3cc2e3&",
  },
  {
    text: "# ❤ **__سورة البينة__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216522422824599573/5927e898aa40e558.png?ex=6600b1cb&is=65ee3ccb&hm=6a52febcc9701a3602dd414700b8f0e44bd424f840b1b1d6961fa6c98f0ead4a&",
  },
  {
    text: "# ❤ **__سورة القدر__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216522974002151585/7ac8bbe883827b65.png?ex=6600b24e&is=65ee3d4e&hm=24de45bd915062128546091f18287cc20003c8269dac41661b48bbbfb84d787a&",
  },
  {
    text: "# ❤ **__سورة العلق__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216523221520617662/e4bc3f977ef28b67.png?ex=6600b289&is=65ee3d89&hm=02f275c5043ab8d76ba38caf21da4ab8e42f9358c53a985f6a1c4fbc48204160&",
  },
  {
    text: "# ❤ **__سورة التين__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216523428148940944/9af7e32eaf0126ad.png?ex=6600b2bb&is=65ee3dbb&hm=a42ae81c8ca5b6d7ab48b030aa02dfa78362cba603bec68c4a5b4f60b1c8528d&",
  },
  {
    text: "# ❤ **__سورة الإنشراح__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216529006644564028/2742f38e890d8449.png?ex=6600b7ed&is=65ee42ed&hm=7699267bc9064247682eb72c6fd96d8f775d6e9076eb387ff7775fbfa741a8d0&",
  },
  {
    text: "# ❤ **__سورة الضحى__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216529333217267812/db923e1e7294a3db.png?ex=6600b83b&is=65ee433b&hm=3cd5063a0aa768b0733b9782c08bd354a61cf520b0c935465166161cf7047f29&",
  },
  {
    text: "# ❤ **__سورة الليل__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216529745248915496/4d14f4d15b763ad2.png?ex=6600b89d&is=65ee439d&hm=99e3fc7ced129bd1103c41239f224c48f1575bf0b5730c8c90e420ab716c495b&",
  },
  {
    text: "# ❤ **__سورة الشمس__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216529901742587914/385c837a508fecf9.png?ex=6600b8c2&is=65ee43c2&hm=46d5a6d956586a3223f5940ced7bd55bd75f6c093d35981babe651c3dcba040d&",
  },
  {
    text: "# ❤ **__سورة البلد__** ❤",
    image:
      "https://cdn.discordapp.com/attachments/1144347868220620950/1216530087495602327/0df60e9cc0ab6a34.png?ex=6600b8ee&is=65ee43ee&hm=ef6b36bac4429e15950ba0d33739f60d874c4c66364269018461628f9f8a8fff&",
  },
  // يمكنك إضافة المزيد من الأذكار هنا بالنص والصورة
];


let tracker = "10";

require("events").EventEmitter.defaultMaxListeners = 30;
  tracker = new inviteTracker(client);
	// "guildMemberAdd"  event to get full invite data
tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  // return when get error
  if(error) return console.error(error);
  // get the channel
  let channel = member.guild.channels.cache.get("1226527256462098442"),
    Msg = `${member.user} has been invited by <@!${inviter.id}> and has now ${invite.count} invites**.**`;
  // change welcome message when the member is bot
  if (member.user.bot)
    Msg = `${member.user} bot discord invited by <@!${inviter.id}>**.**`;
  // send welcome message
  channel.send(Msg);
});
//Fix Erorr Project
process.on("uncaughtException" , err => {
return;
})
 
process.on("unhandledRejection" , err => {
return;
})
 
process.on("rejectionHandled", error => {
  return;
});
client.on('ready', () => {
  console.log(``);
  console.log(`</> Logged in as : ${client.user.tag}!`);
  console.log(`</> Servers : ${client.guilds.cache.size}`);
  console.log(`</> Users : ${client.users.cache.size}`);
  console.log(`</> channels : ${client.channels.cache.size}`);
  console.log(`</> Name : ${client.user.username}`);
  client.user.setStatus('idle');///dnd/online/idle
  let status = [`By : Ahmed Clipper`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})

let nextAzkarIndex = 0;

client.on("ready", () => {

  setInterval(() => {
    const currentAzkar = azkarList[nextAzkarIndex];
    nextAzkarIndex = (nextAzkarIndex + 1) % azkarList.length;

    const embed = new MessageEmbed()
      .setDescription(currentAzkar.text)
      .setImage(currentAzkar.image);

    const channel1 = client.channels.cache.get("1216516708873801768");
    const channel2 = client.channels.cache.get("1217342444371316836");

    if (channel1 && channel2) {
      channel1
        .send({ embeds: [embed] })
        .then((sentMessage) => {
          sentMessage.react("✅"); // يمكنك استبدال '👍' بالرد فعل الذي تريد
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });

      channel2
        .send({ embeds: [embed] })
        .then((sentMessage) => {
          sentMessage.react("✅"); // يمكنك استبدال '👍' بالرد فعل الذي تريد
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    } else {
      console.error("One or both channels not found.");
    }
  }, 3000000);
});

client.on("messageCreate", async (black) => {
    if (black.content.startsWith(prefix + "ping")) {
        black.channel.send({
            embeds: [
                new MessageEmbed()
                    .setDescription(`> ⚙ **Please Wait...**`)
            ]
        }).then((m) => {
            setTimeout(() => {
                m.edit({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`> \`-\` **My Ping Is :** \`${client.ws.ping}\``)
                            .setTimestamp()
                    ]
                });
            }, 5000);
        });
    }
});

client.once("ready", () => {
  let index = 0;
  const serverChannelMap = {
    "1089614823374991520": "1216532519642599454",
    "1181253518242365470": "1217342606179303495",
    // يمكنك إضافة المزيد من الخريطة لمزيد من السيرفرات والقنوات
  };
  
/////////////////////////////////

client.on("messageCreate", async message => {
  if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);

  const command = args.shift().toLowerCase();

  if (command === 'tax') {
    const args2 = args.join(" ").toLowerCase().replace(/k/g, "000").replace(/m/g, "000000").replace(/b/g, "000000000").replace(/,/g, "").replace(/ /g, "");
    const tax = Math.floor(args2 * (20 / 19) + 1);
    const tax2 = Math.floor(tax - args2);
    const tax3 = Math.floor(tax2 * (20 / 19) + 1);
    const tax4 = Math.floor(tax2 + tax3 + args2);

    if (!args2 || isNaN(args2) || args2 < 1) {
      const errorEmbed = new MessageEmbed()
        .setColor("#2c2c34")
        .setDescription(`> **Error: Please write a valid number.**`)
        .setFooter(client.user.username);
      return message.reply({ embeds: [errorEmbed] });
    }

    const embed = new MessageEmbed()
      .setColor("#2c2c34")
      .setDescription(`> **Please wait...**`);
    const embedMsg = await message.reply({ embeds: [embed] });

    setTimeout(() => {
      const taxEmbed = new MessageEmbed()
        .setColor("#2c2c34")
        .setDescription(`> **Amount tax: \`$${tax}\`**\n> **Final number: \`$${tax2}\`**`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
      embedMsg.edit({ embeds: [taxEmbed] });
    }, 1500);
  }
});
  
///////////////////////////////////
client.on('messageCreate', async message => {
  if (message.content === '!rulee') {
    if (message.member.permissions.has("ADMINISTRATOR")) {
      const row = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('List of Laws')
            .addOptions(rules.map(rule => ({
              label: rule.title,
              description: rule.id,
              value: rule.id,
            }))),
        );
      const guild = message.guild;
      const embed = new MessageEmbed()
        .setColor('#2c2c34')
        .setThumbnail(guild.iconURL())
        .setTitle('<a:3_:1089615585232556204> Server Rules <a:12:1150947511146664017>')
        .setDescription(' <a:11:1150943009442107523> to read the laws, choose from the list below \n  <a:11:1150943009442107523> please do not violate server rules \n\n <:921703781027184660:1089615608154431579> **__Developer BOT__** <@803873969168973855> <:911751899324239902:1089615602471141416>')
        .setImage('https://cdn.discordapp.com/attachments/1223781002997141534/1223783415892021289/standard.gif?ex=6624569f&is=6611e19f&hm=bcc85adb107911bb05e6c03dc69b486426abc581373b97919c0625e5e6c1ea50&')

      const sentMessage = await message.channel.send({ embeds: [embed], components: [row] });
      await message.delete();
    } else {
      await message.reply({ content: "You need to be an administrator to use this command.", ephemeral: true });
    }
  }
});

client.on('interactionCreate', async (interaction) => {
  if (interaction.isSelectMenu()) {
    const rule = rules.find(r => r.id === interaction.values[0]);
    const text = fs.readFileSync(rule.description, 'utf-8');
    const ruleEmbed = new MessageEmbed()
      .setColor('#2c2c34')
      .setTitle(rule.title)
      .setDescription(text)

    await interaction.reply({ embeds: [ruleEmbed], ephemeral: true });
  }
});
  
//////////////////////////////////
client.on('messageCreate', async message => {
  const prefix = '+';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'server' || command === 'معلومات') {
    const onlineMembers = message.guild.members.cache.filter(m => m.presence?.status === 'online' || m.presence?.status === 'dnd' || m.presence?.status === 'idle').size;
    const textChannels = message.guild.channels.cache.filter(ch => ch.type === 'GUILD_TEXT').size;
    const voiceChannels = message.guild.channels.cache.filter(ch => ch.type === 'GUILD_VOICE').size;

    const serverEmbed = new MessageEmbed()
  .setColor('#2c2c34')
  .setTimestamp()
  .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
  .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
  .addFields(
    { name: '🆔 Server ID:', value: message.guild.id, inline: true },
    { name: '📆 Created On:', value: message.guild.createdAt.toDateString(), inline: true },
    { name: '👑 Owned by:', value: message.guild.owner.toString(), inline: true },
    { name: `👥 Members (${message.guild.memberCount})`, value: `${onlineMembers} online members\n${message.guild.premiumSubscriptionCount} boosts ✨`, inline: true },
    { name: '💬 Channels:', value: `${textChannels} Text | ${voiceChannels} Voice`, inline: true },
    { name: '🌍 Others:', value: `Region: ${message.guild.region}\nVerification Level: ${message.guild.verificationLevel}`, inline: true },
    { name: `🔐 Roles (${message.guild.roles.cache.size})`, value: 'To see a list with all roles use ', inline: true }
  )
  .setThumbnail(message.guild.iconURL({ dynamic: true }));



    message.lineReplyNoMention({ embeds: [serverEmbed] });
  }
});
///////////////////////////////////*
  /*
 client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'dm') {
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                        .setColor("#2c2c34")
                        .setTitle(`> \`#\` **You do not have the __ADMINISTRATOR__ permission in your role**`)
                        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
                        .setTimestamp()
                ]
            });
        }

        if (!message.guild.me.permissions.has('ADMINISTRATOR')) {
            return message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                        .setColor("#2c2c34")
                        .setTitle(`> \`#\` **I do not have the __ADMINISTRATOR__ permission in my role**`)
                        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
                        .setTimestamp()
                ]
            });
        }

        const content = args.join(" ");
        if (!content) return message.channel.send(`Please provide the message you want to send.`);

        const user = message.mentions.users.first();
        if (!user) return message.channel.send(`Please mention the user.`);

        user.send({
            embeds: [
                new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                    .setColor("#2c2c34")
                    .setDescription(`> \`#\` **From: ${message.author}**\n\n> \`#\` **DM Message: ${content}**`)
                    .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
                    .setTimestamp()
            ]
        }).then(() => {
            message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setColor("#2c2c34")
                        .setDescription(`> \`#\` **Message sent successfully**\n> \`#\` **Recipient: <@${user.id}>**\n> \`#\` **Sender: ${message.author}**`)
                ]
            }).then(msg => msg.delete({ timeout: 2000 }));
        }).catch(error => {
            message.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                        .setColor("#2c2c34")
                        .setDescription(`> \`/\` **The user's DM is closed**\n> \`#\` **Error User: <@${user.id}>**\n> \`!\` **User Message: ${message.author}**`)
                        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
                        .setTimestamp()
                ]
            });
        });
    }
});

/*/
/////////////////////////////////
  
  
  
  
//كود منع روابط
const allowedRoles = ['Role1', 'Role2']; // قائمة الرتب المسموح بها لإرسال الروابط
const forbiddenChannels = ['1222072214279684177', '1130945893995130960']; // قائمة ID للرومات التي يتم منع الروابط فيها

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // تجنب الرد على رسائل البوت
  if (forbiddenChannels.includes(message.channelId)) { // التحقق من أن الرسالة في الروم الصحيح
  
    if (message.content.includes('http://') || message.content.includes('https://')) {
      const member = message.guild.members.cache.get(message.author.id); // الحصول على عضو الرسالة
      if (member.roles.cache.some(role => allowedRoles.includes(role.name))) {
        // إذا كان لديه إحدى الرتب المسموح بها للإرسال
        message.delete(); // حذف الرسالة
        message.reply('عذرًا، لا يُسمح بإرسال الروابط هنا.');
      }
    }
  }
});

  const sendQuote = () => {
    if (index >= quotes.length) {
      index = 0;
    }

    for (const serverID in serverChannelMap) {
      const channelID = serverChannelMap[serverID];
      const server = client.guilds.cache.get(serverID);

      if (server) {
        const channel = server.channels.cache.get(channelID);

        if (channel) {
          channel.send(quotes[index]);
        } else {
          console.log(
            `Channel with ID ${channelID} not found in server ${serverID}`
          );
        }
      } else {
        console.log(`Server with ID ${serverID} not found`);
      }
    }

    index++;
  };

  setInterval(sendQuote, 1800000); // وقت الانتظار بالمللي ثانية (خمس ثواني)
});

client.on("messageCreate", (message) => {
  if (message.channel.id != "1156620658969694229") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤍");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420062545027113") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤍");
});

client.on("messageCreate", (message) => {
  if (message.channel.id != "1156620658969694229") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤲");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420062545027113") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤲");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1151010498951782450") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤣");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420208901070888") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("🤣");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1151010498951782450") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("😹");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420208901070888") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("😹");
});
client.on("messageCreate", (message) => {
  if (message.channel.id != "1181420005284380725") return; ///// ايدي الروم
  if (message.author.id === client.user.id) return;
  message.react("✅");
});

client.on("messageCreate", (message) => {
  if (message.content === "مرحبا") {
    message.reply("مرحبا بك!");
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "السلام عليكم") {
    message.reply("❤ عليكم السلام ياجميل منور السيرفر والله ❤");
  }
});
client.on("messageCreate", (message) => {
  if (message.content === "صلي علي النبي") {
    message.reply("❤ **عليه الصلاة والسلام** ❤");
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "تيست") {
    message.reply("الحمدلله انا كا بوت شايف شغلي تمام انت بقي عامل ايه");
  }
});
client.on("messageCreate", (message) => {
  if (message.content === "هلا") {
    message.reply("❤ هلا بيك شلونك حبيبي منور السيرفر ❤");
  }
});
client.on("messageCreate", (message) => {
  if (message.content === "Kraken System") {
    message.reply("اتفضل يانجم انا تحت أمرك");
  }
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "saym")) {
    const args = message.content.slice(prefix.length + "saym".length).trim();
    const user = message.author;
    if (!args) return message.reply("Please provide me a message! ⚠️");
    message.channel.send(args);
  }
});




  /* Client when detects a message 
  then execute the code */
  client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "help") {
        message.reply({
          embeds: [ new MessageEmbed()
            .setDescription(`> **__All  Commands__** 
\n **!add** \n **!ping** \n **!channel** \n **!background** \n **!setchannel** \n **!setbackground**`)
            .setColor("#2F3136")
          ]
        })
    }
    if(command === "ping02") {
      message.reply(`> \`-\` **My Ping Is :** \`${client.ws.ping}\``)
    }
    if(command === "add") {
     client.emit("guildMemberAdd", message.member)
    }
    if(command === "setchannel") {
      if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply(":x: | Missing permissions, require `MANAGE_GUILD`")
      let channel = message.mentions.channels.first()
      if(!channel) return message.reply(`:x: | Missing arguments, required \`<channel>\`\n __Example__: ${prefix}setchannel ${message.channel}`)
      await db.set(`${message.guild.id}`, channel.id)
      message.reply({
        embeds: [ new MessageEmbed()
          .setDescription(`👍 | Successfully set the welcome channel to ${channel}`)
          .setColor("#2F3136")
          .setTimestamp()
        ]
      })
    }
    if(command === "channel") {
      let channel = await db.get(`${message.guild.id}`)
      if(channel) {
        message.reply({
          embeds: [ new MessageEmbed()
            .setDescription(`📝 | The welcome channel is set to ${message.guild.channels.cache.get(channel)}`)
            .setColor("#2F3136")
            .setTimestamp()
          ]
        })
      }
    }
    if(command === "setbackground"){
      if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply(":x: | Missing permissions, require `MANAGE_GUILD`")
      if(args[0] && !args[0].startsWith("http")) return message.reply("Please provide a valid URL for an image **or** upload an image to set as background.")
      let background = message.attachments.first() ? message.attachments.first().url : args[0]
      if(!background) return message.reply(`:x: | Missing arguments, required \`<background>\`\n __Example__: ${prefix}setbackground <attachment> [ Can be URL or an uploaded image ]`)
      await db.set(`bg_${message.guild.id}`, background)
      message.reply({
        embeds: [ new MessageEmbed()
          .setDescription(`👍 | Successfully set the background to [this image](${background})`)
          .setImage(background)
          .setColor("#2F3136")
          .setTimestamp()
        ]
      })
    }
    if(command === "background") {
    let background = await db.get(`bg_${message.guild.id}`)
    if(background) {
      message.reply({
        embeds: [ new MessageEmbed()
          .setDescription(`📝 | The background is set to [this image](${background})`)
          .setImage(background)
          .setColor("#2F3136")
          .setTimestamp()
        ]
      })
    }
  }
if(command === "setrules"){
  if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply(":x: | Missing permissions, require `MANAGE_GUILD`")
  if(!args[0]) return message.reply("Please provide a description to set.")

  let description = args.join(" ")
  
  // Save the description text instead of the image URL
  await db.set(`description_${message.guild.id}`, description)
  
  message.reply({
    embeds: [ new MessageEmbed()
      .setDescription(`👍 | Successfully set the description to: **${description}**`)
      .setColor("#2F3136")
      .setTimestamp()
    ]
  })
}

if(command === "rules") {
  let description = await db.get(`description_${message.guild.id}`)
  if(description) {
    message.reply({
      embeds: [ new MessageEmbed()
        .setDescription(`📝 | The description is set to: **${description}**`)
        .setColor("#2F3136")
        .setTimestamp()
      ]
    })
  }
}

}

);
/* Client when detects 
a new member join */
  tracker = new inviteTracker(client);
// "guildMemberAdd"  event to get full invite data
tracker.on('guildMemberAdd', async (member, inviter, invite, error) => {
  let channelwelc = await db.get(`${member.guild.id}`)
  if(error) return console.error(error);
  if(!channelwelc) return;
  let channel = member.guild.channels.cache.get(channelwelc)
   let buffer_attach =  await generareCanvas(member)
   const attachment = new MessageAttachment(buffer_attach, 'welcome.png')
   const memberCount = member.guild.memberCount;


   // Fetch the description from the database
   let description = await db.get(`description_${member.guild.id}`);

   let embed = new MessageEmbed()
      .setTitle(`> <:TAG:1226019707522383932> Welcome to ${member.guild.name} Community`)
      .addFields(
        { name: '<:WELCOME:1226013126408015942> Welcome', value: `${member.user}`, inline: true },
        { name: '<:INVITED:1226013134276530206> Invited By', value: `<@!${inviter.id}>`, inline: true },
        { name: '<:READ:1226013136977526876> Rules', value: `${description}`, inline: true }, // Using the fetched description here
        { name: '<:USER_ID:1226013131382456453> User ID', value: `**__${member.user.id}__**`, inline: true },
        { name: '<:NUMPER:1226014852649320468> Member Count', value: `**__${memberCount}__**`, inline: true },
        { name: '<:LINK2:1226039636913295401> Invite Number', value: `**__${invite.count}__**`, inline: true },
        { name: '<:TIME:1226034289963958415> Message Since', value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true },
        { name: '<:JOINED:1226013128739786834> Joined Discord', value: `<t:${Math.floor(member.user.createdAt / 1000)}:R>`, inline: true },
        { name: '<:SHARDS:1226039084829511791> Member User', value: `**${member.user.username}**`, inline: true },
        { name: '<:API:1226286011009597541> Node.js Version', value: `**__v21.7.2__**`, inline: true },
        { name: '<:PING:1226286013379514368> PING BOT', value: `**__${client.ws.ping}__ms**`, inline: true },
        { name: '<:DEVELOPER:1226013123916599437> Developer BOT ', value: `<@803873969168973855>`, inline: true },
        { name: '<:SUPPORT:1226013120674136144> Server Support ', value: `**[Click Here](https://dsc.gg/kn-server)**`, inline: true },
        { name: '<:LINK:1226015186436100178> Instagram ', value: `**[Click Here](https://www.instagram.com/ahm.depression)**`, inline: true },
        { name: '<:LINK2:1226039636913295401> Twitter', value: `**[Click Here](https://twitter.com/ahm_depression)**`, inline: true }
      )
    .setColor('#2F3136')
    .setImage("attachment://welcome.png")
    member.send(`Welcome to the server, ${member}!`);

    channel.send({ content: `||${member.user}||`, embeds: [embed], files: [attachment] })
})


client.on('guildMemberAdd', member => {
    const embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome to the server!')
        .setDescription(`We are happy to have you, ${member}! Welcome to our community.`)
        .setThumbnail(member.user.displayAvatarURL());

    member.send({ embeds: [embed] });
});


async function generareCanvas(member) {
  const avatar = await resolveImage(member.user.displayAvatarURL({ 'size': 2048, 'format': "png" }))
  const background = await resolveImage(await db.get(`bg_${member.guild.id}`)) ?? await resolveImage("https://cdn.discordapp.com/attachments/910400703862833192/910426253947994112/121177.png")
  const { weirdToNormalChars } = require('weird-to-normal-chars')
  const name = weirdToNormalChars(member.user.username)
  let canvas = new Canvas(1024, 450)
    .printImage(background, 0, 0, 1024, 450)
    .setColor("#FFFFFF")
    .printCircle(512, 155, 120)
    .printCircularImage(avatar, 512, 155, 115)
    .setTextAlign('center')
    .setTextFont('70px Discord')
    .printText(`Welcome`, 512, 355)
    .setTextAlign("center")
    .setColor("#FFFFFF")
    .setTextFont('45px Discordx')
    .printText(`${name}`, 512, 395)
    .setTextAlign("center")
    .setColor("#FFFFFF")
    .setTextFont('30px Discord')
    .printText(`To ${member.guild.name}`, 512, 430)
    // Adding "bot by ahmed" text above the image
    .setTextAlign('center')
    .setTextFont('bold 15px Arial')
    .setColor("#FFFFFF")
    .printText('</> Developer BOT Ahmed Clipper', 160, 25);
    // Adding "insta" text below the line
  canvas.setTextAlign('center')
    .setTextFont('bold 15px Arial')
    .setColor("#FFFFFF")
    .printText('</> instagram : ahm.depression', 150, 60);
  return canvas.toBufferAsync()
}



client.login(token)
