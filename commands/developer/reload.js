const Command = require('../../base/command');

class Reload extends Command {
	constructor(client) {
		super(client, {
			name: 'reload',
			usage: 'reload <command>',
			description: 'Reloads a command.',
			enabled: true,
			requireArgs: true,
			aliases: ['rl'],
			userLevel: ['OWNER'],
			cooldown: 3000,
		});
	}

	async run(client, channel, tags, message, args, self) {
		const command = args[0];
		const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
		if(!cmd) { return client.say(channel, `${tags.username}, that command does not exist.`); }

		delete require.cache[cmd.config.location];
		client.unloadCommand(cmd.config.location, cmd.help.name).then(() => {
			client.loadCommand(cmd.config.location, cmd.help.name);
		});

		return client.say(channel, `${cmd.help.name} has been reloaded.`);
	}
}

module.exports = Reload;