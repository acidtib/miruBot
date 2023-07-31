# miruBot

twitch chat bot

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

---
## Install

    $ git clone https://github.com/acidtib/miruBot
    $ cd miruBot
    $ npm install

## Configure bot

Generate tokens for use with the Twitch API using [twitchapps.com/tmi](https://twitchapps.com/tmi/)

Create `.env` then edit it with your settings. 

    $ cp .env.example .env

## Running in development

    $ npm run dev

## Running in production

    $ npm start