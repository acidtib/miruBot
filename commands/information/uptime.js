const Command = require('../../base/command')
const moment = require('moment')
require('moment-duration-format')

class Uptime extends Command {
	constructor(client) {
		super(client, {
			name: 'uptime',
			usage: 'uptime',
			description: 'Shows the stream uptime.',
			dirname: __dirname,
			enabled: true,
			requireArgs: false,
			aliases: [],
			userLevel: [],
			cooldown: 3000,
		});
	}

	async run(client, channel, tags, message, args, self) {
		const stream = await client.api.getStream(tags['room-id']);
		if(stream.data.length === 0) { return client.say(channel, `${tags.username}, they are offline.`); }

		let results;
		stream.data.map(x => {
			results = { name: x.user_name, startedAt: x.started_at };
		});

		const streamUptime = moment.utc(moment.utc() - moment.utc(results.startedAt));
		const duration = moment.duration(streamUptime).format('Y [years] D [days], H [hours], m [minutes], s [seconds]');
		return client.say(channel, `${tags.username}, ${results.name} has been live for ${duration}.`);
	}
}

module.exports = Uptime;