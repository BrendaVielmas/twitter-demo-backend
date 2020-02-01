
let Twit = require('twit')

let T = new Twit({
  consumer_key:         process.env.COSTUMERKEY,
  consumer_secret:      process.env.COSTUMERSECRET,
  access_token:         process.env.ACCESSTOKEN,
  access_token_secret:  process.env.ACCESSTOKENSECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

module.exports.getTweetsByScreenName = (req, res) => {
  let screenName = req.params.screenName;
  T.get('statuses/user_timeline', { screen_name: screenName, count: 10 }, (err, data, response) => {
    res.status(200).send(data);
  });
};
