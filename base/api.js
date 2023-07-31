const fetch = require('node-fetch');

class API {
	async getStream(id) {
		return new Promise((resolve, reject) => {
			fetch(`https://api.twitch.tv/helix/streams?user_id=${id}`, {
				headers: { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`, 'Client-ID': `${process.env.CLIENT_ID}` },
			}).then(res => res.json()).then(result => {
				resolve(result);
			}).catch(reject);
		});
	}
}

module.exports = API;