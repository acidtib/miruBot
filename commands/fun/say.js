/* eslint-disable no-unused-vars */
const Command = require('../../base/command');

class Say extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			usage: 'say <message>',
			description: 'Says whatever you wish in chat.',
			enabled: true,
			requireArgs: true,
			aliases: ['echo'],
			userLevel: [],
			cooldown: 3000,
		});
	}

	async run(client, channel, tags, message, args, self) {
		const msg = args.join(' ');
		return client.action (channel, `says: ${msg}`);
	}
}

module.exports = Say;