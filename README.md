# moontography-telegram-bot
Telegram Bot for Moontography

## Development

```
$ git clone https://github.com/moontography/moontography-telegram-bot
$ cd moontography-telegram-bot
```

### Enviornment Vars
`TELEGRAM_BOT_TOKEN` - Telegram Bot Token (set in `.env` or pass as `-e` in `docker run` command)

### Docker
```
# build docker image 
$ docker build -t moontography-telegram-bot .

# run docker container
$ docker run moontography-telegram-bot -d
```

### Manual
```
# install dependencies
$ npm install

# start server
$ npm start
```

