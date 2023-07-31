module.exports = class Command {
	constructor(client, {
		name = '',
		usage = 'No usage set.',
		description = 'No description set.',
		enabled = true,
		requireArgs = false,
		aliases = new Array(),
		userLevel = new Array(),
		cooldown = 3000,
	}) {
		this.client = client;
		this.help = { name, usage, description, aliases };
		this.config = { enabled, requireArgs, userLevel, cooldown };
	}
};