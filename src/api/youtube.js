import axios from 'axios';

const KEY ='AIzaSyCc8JRRurXWtu4h8gpjGlH3hLlUUNsbsqM';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part :'snippet',
        maxResults : 5,
        key: KEY
    }
});

