require('dotenv').config()

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_TOKEN;
const authToken = process.env.TWILIO_ACCOUNT_SID;

const client = require('twilio')(accountSid, authToken, phone_number);

client.messages
  .create({
     body: 'This is a reminder to take your Lipitor medication with a dosage of 20mg!',
     messagingServiceSid: 'MG0277b73b3d0af82d0a8c4cb91180f0e1',
     sendAt: new Date(Date.UTC(2023, 12, 21, 19, 49, 0)),
     scheduleType: 'fixed',
     to: '${phone_number}'
   })
  .then(message => console.log(message.sid));