const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "petar@nodejs-task.app",
    subject: "Wazaa, thanks for tasking app!",
    text: `I hope this will be send ${name}!`
  });
};

const sendFarewellEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "petar@nodejs-task.app",
      subject: "Dafaq r u leaving us for?!?",
      text: `Come back or we'll hunt you down ${name}!`
    })
    .then(res => console.log("MAIL CANCEL RES:", res))
    .catch(err => console.log("MAIL CANCEL ERR:", err));
};

module.exports = { sendWelcomeEmail, sendFarewellEmail };
