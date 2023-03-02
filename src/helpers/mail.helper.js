// require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const GMAIL_EMAIL_ADDRESS = "faisalchakiki012018@gmail.com"; // masukkan email yang digunakan pada GCC
const GMAIL_CLIENT_ID =
  "755733741864-h9fk60be2r0b611v0669vl94so0nlj2h.apps.googleusercontent.com"; // masukkan client id disini
const GMAIL_CLIENT_SECRET = "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"; // masukkan client secret disini
const GMAIL_REFRESH_TOKEN =
  "1//04V5nqjY-nkewCgYIARAAGAQSNwF-L9Ird7YvRK5n7UYnMjEPH3k_px8E_fERgbQY8F_ZIxvtSiqXiVxmDamqT-5FPDhbYXYO3KA"; // masukkan refresh token disini
const GMAIL_CALLBACK_URI = "https://developers.google.com/oauthplayground";

const myOAuth2Client = new OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_CALLBACK_URI
);

myOAuth2Client.setCredentials({
  refresh_token: GMAIL_REFRESH_TOKEN,
});

// const myAccessToken = async () => {
//   const myAccessToken = await myOAuth2Client.getAccessToken();
//   return myAccessToken.token;
// };

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: "faisalchakiki99@gmail.com", //your gmail account you used to set the project up in google cloud console"
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     refreshToken: process.env.REFRESH_TOKEN,
//     accessToken: myAccessToken(), // access token variable we defined earlier
//   },
// });

const transport = async () => {
  const accessToken = await myOAuth2Client.getAccessToken();

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: GMAIL_EMAIL_ADDRESS,
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });
};

// const mailOptions = (sendTo, code) => {
//   return {
//     from: "faisalchakiki99@gmail.com", // sender
//     to: sendTo, // receiver
//     subject: "Authentication Code Reset Password Cinephile", // Subject
//     html: `<p>Here is your reset password code <b>${code}</b></p>`, // html body
//   };
// };

module.exports = {
  // mailOptions,
  transport,
};
