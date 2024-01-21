require('dotenv').config()

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_TOKEN;
const authToken = process.env.TWILIO_ACCOUNT_SID;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is a reminder to take your medication, medication_name with a dosage of medication_dosage!',
     from: '+13612736216',
     to: '+17789289556'
   })
  .then(message => console.log(message.sid));