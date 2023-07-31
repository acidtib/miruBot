const Command = require('../../base/command');

class Clear extends Command {
	constructor(client) {
		super(client, {
			name: 'clear',
			usage: 'clear',
			description: 'Clears the chat.',
			dirname: __dirname,
			enabled: true,
			requireArgs: false,
			aliases: ['clearchat', 'purge', 'prune', 'clean', 'delete'],
			userLevel: ['MODERATOR'],
			cooldown: 3000,
		});
	}

	async run(client, channel, tags, message, args, self) {
		const isMod = client.isMod(channel, client.getUsername());
		if(!isMod) { return client.say(channel, `Sorry ${tags.username}, I don't have permission to use that command.`); }

		client.clear(channel).catch(() => client.say(channel, 'Whoops, an error occurred while trying to clear chat.'));
		return client.say(channel, `${tags.username} cleared the chat.`);
	}
}

module.exports = Clear;