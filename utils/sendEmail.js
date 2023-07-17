import { createTransport } from "nodemailer";
// import { google } from "googleapis";

// const OAuth2 = google.auth.OAuth2;

// const createTransporter = async () => {
//   const oauth2Client = new OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https://developers.google.com/oauthplayground&prompt=consent&response_type=code&client_id=407408718192.apps.googleusercontent.com&scope=https://mail.google.com/&access_type=offline"
//   );

//   await oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN,
//   });

//   const accessToken = await new Promise((resolve, reject) => {
//     oauth2Client.getAccessToken((err, token) => {
//       if (err) {
//         reject("Failed to create access token :(",400);
//       }
//       resolve(token);
//     });
//   });

//   return accessToken;
// };


export const sendEmail = async (to, subject, text, from) => {
  // const accessToken = await createTransporter();
  const transporter = createTransport({
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    service: "Gmail",
    auth: {
      // type: "OAuth2",
      user: process.env.SMTP_USER,
      pass:process.env.SMTP_PASS,
      // clientId: process.env.CLIENT_ID,
      // clientSecret: process.env.CLIENT_SECRET,
      // refreshToken: process.env.REFRESH_TOKEN,
    },

  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
  });
};
