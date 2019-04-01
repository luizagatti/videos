import axios from 'axios';

const KEY = 'AIzaSyAh2Pcx3a4Zmy-zWcQp38qXpux37J8zgqQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});