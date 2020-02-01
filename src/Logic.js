import T from './Tokens.js';

export function getTweets(user, callback) {
    T.get("statuses/user_timeline", {screen_name: 'NASA', count: 10}, callback)
} 

