// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.calls.create({
  url: "http://demo.twilio.com/docs/voice.xml",
  to: "+14373884985",
  from: "+14158013970",
})
.then(call => console.log(call.sid))
.catch(error => console.error(error))