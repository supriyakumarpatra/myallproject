const nodemailer = require('nodemailer');

const { mail } = require('../config/adaptor');

exports.sendEmail = async (fromEmail,toEmail,mailHost,mailPort,mailUser,mailPassword,mailSecure)=> {
    let mailOptions = {
      from: fromEmail,
      to: toEmail,
      subject: mail.mailSubject,
      priority:'high',
      text: 'Hi user',
    //   html: mailBody
    };
    // console.log(mailOptions);
    let TransportObj = {
      host: mailHost,
      port: Number(mailPort),
      secure: Boolean(mailSecure),
      auth: {
        user: mailUser,
        pass: mailPassword,
      },
      tls: {
        rejectUnauthorized: mail.mailUnauthorized,
      },
    };
    // console.log(TransportObj);
    let transporter = nodemailer.createTransport(TransportObj);

    try {
      await transporter.sendMail(mailOptions);
      
      console.log(`Email sent to ${toEmail}`);
      return true;
    } catch (error) {
      console.log(`Error while sending email : ${error}`);
      return false;
    }
  }