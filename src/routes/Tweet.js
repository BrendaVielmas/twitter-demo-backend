module.exports.getTweetsByScreenName = (req, res) => {
  let screenName = req.params.screenName;
  T.get('statuses/user_timeline', { screen_name: screenName, count: 10 }, (err, data, response) => {
    res.status(200).send(data);
  });
};
