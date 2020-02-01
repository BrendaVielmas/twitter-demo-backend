
let Twit = require('twit')

let T = new Twit({
  consumer_key:         process.env.COSTUMERKEY,
  consumer_secret:      process.env.COSTUMERSECRET,
  access_token:         process.env.ACCESSTOKEN,
  access_token_secret:  process.env.ACCESSTOKENSECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

export default T;