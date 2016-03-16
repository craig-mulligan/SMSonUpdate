var resin = require("resin-sdk"),
twilio = require('twilio'),
config = require("./config.json"),
client = twilio(config.TWILLIO_SID, config.TWILLIO_AUTHTOKEN),
credentials = { email: config.RESIN_EMAIL, password:config.RESIN_PASS };
app = config.RESIN_APP;

var prevCommit;

resin.auth.login(credentials, function(error) {
  if (error != null) {
    throw error;
  }

  console.log("Successfully authenticated with resin API")
  setInterval(function(){

    resin.models.application.get(app).then(function(application) {
        if (prevCommit != application.commit && prevCommit != null) {
          sendText("Hey! A new update was pushed to your resin.io application. commit:" + application.commit);
        }
        prevCommit = application.commit
    });

  }, config.INTERVAL);
});

function sendText(content) {
  console.log(content);
  client.sendMessage( { to: config.TO, from: config.FROM, body: content}, function( err, data ) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message Sent');
    }
  });
}
