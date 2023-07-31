module.exports = class {
	constructor(client) {
		this.client = client;
	}

	async run() {
		const client = this.client;
		client.readyAt = Date.now();
		client.logger.log(`Bot Version: ${process.env.VERSION}`, 'log');
		client.logger.log(`Prefix has been set to: ${process.env.PREFIX}`, 'setup');
		client.logger.log(`Logged in as ${client.username}`, 'ready');
	}
};