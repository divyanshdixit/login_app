import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import { configDotenv } from "dotenv";
import fs from "fs";


/**
 * POST: http://localhost:8080/api/sendmail
 * @param:{
 *  userName: "",
 * userEmail: "",
 * text: "",
 * subject:""
 * }
 */

export const sendMail = async (req, res) => {
  try {
    const { userEmail, userName, text, subject } = req.body;
    const { USERNAME, PASSWORD } = process.env;

    let nodeMailConfig = {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465 port and false for other ports
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: USERNAME,
        pass: PASSWORD,
      },
    };

    // crating a transporter for sending the mail
    const transport = nodemailer.createTransport(nodeMailConfig);

    // configuration of mailgen
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Mailgen",
        link: "http://localhost:3000",
      },
    });

    // generate an email:
    var emailText = {
      body: {
        name: userName,
        intro: "welcome to party!" || text,
        outro: "Nee help? Do it yourself!",
      },
    };
    // generate the html email with the provided contents
    var emailBody = mailGenerator.generate(emailText);
    // Optionally, preview the generated HTML e-mail by writing it to a local file
    fs.writeFileSync("preview.html", emailBody, "utf8");
    var message = {
        from: USERNAME,
        to: userEmail,
        subject: subject || "Message title",
        html: emailBody
      };
    
    const isSendMail =  await transport.sendMail(message);
    console.log(isSendMail);
    if(isSendMail){
        res.status(200).send({message: 'Email sent successfully'});
    }else{
        res.status(401).send({error: 'Email can not be sent'});
    }
  } catch (err) {
    res.status(500).send({ error: `Soemthing went wrong! ${err}` });
  }
};
