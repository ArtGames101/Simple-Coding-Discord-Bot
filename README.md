# Simple-Coding-Discord-Bot
A Discord bot which allows any normal user to created. - easy and fun. (No knowledge needed.)

#### Contents:

[Bot Installtion and First Run](https://github.com/ArtGames101/Simple-Coding-Discord-Bot#installation)

[Bot Requirements](https://github.com/ArtGames101/Simple-Coding-Discord-Bot#requirements)

[Custom command adding](https://github.com/ArtGames101/Simple-Coding-Discord-Bot#custom-command-installation)

# Installation

How to get the bot online, and to your specifications:

1. Make a bot user. (https://discordapp.com/developers/applications/me)
2. Find the token.
3. Put the token in the required section on the bot.js file.
4. Change the prefix.
5. Change the clientname to the name of your bot, and add the client ID if so wished for.
6. Make sure all requirements are installed (list below)
7. Open command prompt (CMD) and go to the location of the bot.js file; You can do this with the command "cd directory"
8. Once you are in the directory which has the bot.js file you can type in node bot.js
9. The bot should then run, you can make an invite link using this permissions calculator: https://discordapi.com/permissions.html
10. Play around with the bot, maybe even add some custom commands.

# Requirements

node.js
npm
discord.js

# Custom command installation

**This will show you how to add custom commands, if you have already used the presets.**

1. Find an old preset (one you've already used, example below:)

```
  if (message.content === (prefix + command3)) {
 message.channel.send(command3text)
}
```

2. Go underneath that preset and copy it again, so know you have to copies. e.g.

```
if (message.content === (prefix + command3)) {
  message.channel.send(command3text)
}

if (message.content === (prefix + command3)) {
  message.channel.send(command3text)
}
```

3. Create the configuration for the custom commands. e.g.

![alt text](https://i.imgur.com/wtwQuZr.jpg "Example Image")

4. Make a copy of one set of the config. e.g.

```
command3 = ''
command3text = ''
```

5. And re-paste it below where you copied it from - so you have this:

```
command3 = ''
command3text = ''

command3 = ''
command3text = ''
```

6. Edit the new command code sets:

If you have already had custom command 1, 2, 3 you will use 4 for this next bit:

```
  if (message.content === (prefix + command3)) { // Change custom to command4 (Depends what you've already used it could be 10)
 message.channel.send(command3text) // Change command3text to command4text (Depends what you've already used it could be 10)
}
```

7. Go back to your new bit of configuration and change it to this: (dependant on the number you used for the last step)

```
command3 = '' // Old one - the one you copied from
command3text = ''

command4 = '' // New one - the one you recently pasted
command4text = '' // Change both 3's to your new number (in my case 4)
```

8. Change the values to what you want it to use, and what you want it to say.

9. Test it!
