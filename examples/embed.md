```
if (message.content === (prefix + 'embed')) {
    message.channel.send("This is the message!", {
    embed: new Discord.RichEmbed()
    .setTitle("This is the title")
    .setDescription("This is the description")
    .setColor("#61FF00")
    .setFooter("This is the footer")
    });
  }
  ```
  
  This sends an embed, this is the newer version of javascript embed, as you an see "RichEmbed" this is the second way of making and embed, nad the cleanist, and easiest.
