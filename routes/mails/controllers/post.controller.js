const sgMail = require("@sendgrid/mail");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const message = {
      to: email,
      from: { name: "SomosMas", email: "somosmasot241@gmail.com" },
      subject: `Gracias por su apoyo`,
      text: "Hola",
      html: `
      <h2>Gracias por su apoyo a la fundación.</h2>
      <hr/><br/>
      <h3>Por favor no dude en consultarnos por cualquier consulta o duda que pueda surgirle, contactenos en <a href="google.com">SomosMas</a><br/>
      ó simplemente envienos su consulta por este medio y le estaremos respondiendo a la brevedad.<br/> Gracias, Fundación Somos Más.</h3>
        `,
    };
    sgMail
      .send(message)
      .then((response) => {
        console.log("Email has been send");
        res.status(200).json({ msg: "Email sended succesfully" });
      })
      .catch((error) => {
        console.log(error, "err1");
        res.status(400).json({ msg: "Could not send email, an error has occurred" });
      });
  } catch (error) {
    console.log(error, "err2");
    res.json({ msg: "Could not send email, an error has occurred" });
  }
};

module.exports = { sendMail };
