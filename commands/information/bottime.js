const Command = require('../../base/command')
const moment = require('moment')
const { botUptime } = require('../../helpers/functions')
require('moment-duration-format')

class BotTime extends Command {
	constructor(client) {
		super(client, {
			name: 'bottime',
			usage: 'bottime',
			description: 'Shows MiruBot\'s uptime.',
			enabled: true,
			requireArgs: false,
			aliases: [],
			userLevel: [],
			cooldown: 3000,
		});
	}

	async run(client, channel, tags, message, args, self) {
		const duration = moment.duration(botUptime(client)).format('Y [years] D [days], H [hours], m [minutes], s [seconds]');
		return client.say(channel, `${tags.username}, uptime: ${duration}`);
	}
}

module.exports = BotTime;