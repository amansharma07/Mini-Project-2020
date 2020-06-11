const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
     "673847395248-2tfc3d9amctll715u2tp8ivm3et9v7oq.apps.googleusercontent.com", // ClientID
     "yPEACQ9LnOaYryKpt0JrDyKx", // Client Secret
     "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
     refresh_token: "1//04A7U8JW8viFHCgYIARAAGAQSNwF-L9IreirjfFboSH8YijLDKeFd5OvqHrtTi4tTP3_F9Vs9krjFYE4lPmB29Lm6IvF2_tCK1-I"
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
     service: "gmail",
     auth: {
          type: "OAuth2",
          user: "amansharma1829@gmail.com", 
          clientId: "673847395248-2tfc3d9amctll715u2tp8ivm3et9v7oq.apps.googleusercontent.com",
          clientSecret: "yPEACQ9LnOaYryKpt0JrDyKx",
          refreshToken: "1//04A7U8JW8viFHCgYIARAAGAQSNwF-L9IreirjfFboSH8YijLDKeFd5OvqHrtTi4tTP3_F9Vs9krjFYE4lPmB29Lm6IvF2_tCK1-I",
          accessToken: accessToken
     }
});


const mailOptions = {
     from: "amansharma1829@gmail.com",
     to: "aman.sharma.jan2000@gmail.com",
     subject: "Node.js Email with Secure OAuth",
     generateTextFromHTML: true,
     html: "<b>Testing mail</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
     error ? console.log(error) : console.log(response);
     smtpTransport.close();
});
