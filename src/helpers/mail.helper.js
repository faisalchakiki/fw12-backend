require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const myOAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

myOAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

const myAccessToken = async () => {
  const myAccessToken = await myOAuth2Client.getAccessToken();
  return myAccessToken.token
}

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "faisalchakiki012018@gmail.com", //your gmail account you used to set the project up in google cloud console"
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: myAccessToken(), // access token variable we defined earlier
  },
});

const mailOptions = (sendTo, code) => {
  return {
    from: "faisalchakiki012018@gmail.com", // sender
    to: sendTo, // receiver
    subject: "Authentication Code Reset Password Cinephile", // Subject
    html: `<p>Here is your reset password code <b>${code}</b></p>`, // html body
  };
};

module.exports = {
  mailOptions,
  transport,
};
