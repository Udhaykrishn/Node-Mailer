
const nodeMailer = require("nodemailer");

module.exports = function (req, res) {
  const { message, title, email } = req.body;
  const trans = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOpition = {
    from: process.env.EMAIL,
    to: email,
    subject: title,
    text: message,
  };

  trans.sendMail(mailOpition, (err, info) => {
    if (err) {
      throw err;
    } else {
        res.json({
            message:"Mail Sended Successfull"
        })
      console.log(`Email send: ${info.response}`);
    }
  });
};
