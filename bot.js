//-----------------------------------------
// Simple codeing bot - To view the license, please visit the LICENSE file.
// Credits:
// - Dead4Now -
// Github: TheExplodingGiraffe
// Discord: Dead4Now#3348
//-----------------------------------------

// LATEST UPDATE: Edited the help command, so it edits to the prefix you set.

// P.S. When I use the doubles foward slashes that just makes the bot ignore that line.

const Discord = require('discord.js');
const client = new Discord.Client();

// Config (Token, prefix etc.)
const token = '' // The token of your bot,
prefix = '' // Prefix of your bot.
clientid = '' // Not required.
clientname = '' // The name of your bot, used for reference later on.
botgame = ''// What the bot game will show up as (Playing [yourinput])
// End of Config

// Custom command config
// - Custom command 1 -
command1 = '' // What you do to release the response (pie would make the command [prefix]pie )
command2text = '' // What you want it to reply with - You can use mardown (``` - `` - ** - * - __ - ~~ etc.)
// - Custom command 1 - END
// - Custom Command 2 -
command2 = 'peanuts' // What you do to release the response (pie would make the command [prefix]pie )
command2text = 'I LIKE PIZZA YEA I DO' // What you want it to reply with - You can use mardown (``` - `` - ** - * - __ - ~~ etc.)
// - Custom Command 2 - END
// - Custom command 3 -
command3 = '' // What you do to release the response (pie would make the command [prefix]pie )
command3text = '' // What you want it to reply with - You can use mardown (``` - `` - ** - * - __ - ~~ etc.)
// - Custom command 3 - END
// - Custom command 4 -
command4 = '' // What you do to release the response (pie would make the command [prefix]pie )
command4text = '' // What you want it to reply with - You can use mardown (``` - `` - ** - * - __ - ~~ etc.)
// - Custom command 4 - END

//This is what happens when the bot is ready.
client.on('ready', () => {
  console.log(`Bot is connected as ${client.user.tag}.`);
  client.user.setStatus(`online`);
  client.user.setGame(botgame) // Edit this in the config - You can also use ${client.guilds.size} for the ammount of guilds the bot is in. and ${client.users.size} to find out how many users the bot is working with.
})

//----------------------------------------------------------------
//Chat commands
//----------------------------------------------------------------


client.on('message', message => { // This is crucial, the bot won't work without this.

  if (message.content === (prefix + 'help')) { // This must be updated when adding new commands - Remember to remove commands here, if you remove the code from them.
    message.channel.send("```Help!\n\n" + prefix +"Help - Shows this message.\n" + prefix +"Ping - Shows the bots ping.\n" + prefix +"Roll - Role a random number\n" + prefix +"Flip - Flip a coin\n" + prefix +"8ball - Ask 8ball...\n" + prefix +"Avatar - Get your avatar.\n" + prefix +"Prefix - Get the bots current prefix.\n\nThe current prefix for this bot is " + prefix + "```")
  }

      if (message.content === prefix + 'ping') {
        if (message.channel.type === 'dm') return;
    const embed = new Discord.RichEmbed()
      .setColor("#FF0000")
      .setTitle("Pong!");
    let start = Date.now();
    message.channel.sendEmbed(embed, { disableEveryone: true })
      .then(m => {
        m.edit('', {
          embed: new Discord.RichEmbed()
            .setColor("#FF0000")
            .setDescription(`Pong!:ping_pong:\`${Date.now() - start}ms\``)
        })
      }).catch(console.error);
  }

    if (message.content === prefix + 'roll') {
      var result = Math.floor((Math.random() * 100) + 1);
      message.reply("You rolled a: " + result);
    };

    if (message.content === prefix + 'flip') {
      var result = Math.floor((Math.random() * 2) + 1);
      if (result == 1) {
        message.reply("The coin landed on heads");
      } else if (result == 2) {
        message.reply("The coin landed on tails");
      }
    };

    if (message.content === prefix + '8ball') {
      var sayings = ["It is certain",
                    "It is decidedly so",
                    "Without a doubt",
                    "Yes, definitely",
                    "You may rely on it",
                    "As I see it, yes",
                    "Most likely",
                    "Outlook good",
                    "Yes",
                    "Signs point to yes",
                    "Reply hazy try again",
                    "Ask again later",
                    "Better not tell you now",
                    "Cannot predict now",
                    "Concentrate and ask again",
                    "Don't count on it",
                    "My reply is no",
                    "My sources say no",
                    "Outlook not so good",
                    "Very doubtful"];

      var result = Math.floor((Math.random() * sayings.length) + 0);
      message.reply(sayings[result]);
    };

  if (message.content === (prefix + 'avatar')) {
    message.reply(message.author.avatarURL);
  }

  if (message.content === (prefix + 'prefix')) {
    message.channel.send('The prefix for this bot is ' + prefix);
  }


// Here you would make another command, I will leave examples etc. in a sperate file for you too view.
// Custom commands will be below this message.
// If you are choosing to reply to a command, and want new lines for example:
// I like
//
// Lots of cheese. You would use \n to make a new line.

//custom command 1
  if (message.content === (prefix + command1)) {
    message.channel.send()
  }

//custom command 2
if (message.content === (prefix + command2)) {
  message.channel.send(command2text)
}

//custom command 3
if (message.content === (prefix + command3)) {
  message.channel.send(command3text)
}

//custom command 4
if (message.content === (prefix + command4)) {
  message.channel.send(command4text)
}

// all commands must be done within the brackets and this line of code: client.on('message', message => { (which can be found above)
});

client.login(token); // Token config file maybe coming soon.

// Part of ArtGames101.
