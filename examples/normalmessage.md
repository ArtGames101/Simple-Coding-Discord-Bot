```
if (message.content === (prefix + 'Command would go here')) { // e.g. help
  message.channel.send('Reply text would go here') // Commands: !help - !ban
}
```

This would send a message in the channel the command was performed like this:

```
User: !help

Bot: Commands: !help - !ban
```
