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
$ docker run -d moontography-telegram-bot
```

### Deploy

#### Heroku

```
$ heroku container:push worker
$ heroku container:release --recursive
```
