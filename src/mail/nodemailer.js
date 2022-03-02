require('dotenv').config()
const nodemailer = require('nodemailer')

async function nodeMailer(receiver) {
    let transporter = nodemailer.createTransport({
        port: 587,
        service: 'gmail',
        auth: {
          user: process.env.E_USERNAME, // generated ethereal user
          pass: process.env.E_PASSWORD, // generated ethereal password
        }
    })

    let info = await transporter.sendMail({
        from: process.env.E_USERNAME, // sender address
        to: receiver, // list of receivers
        subject: "zakaz ✔️", // Subject line
        text: `zakazingiz 30 daqiqada yetkazib beriladi`, // plain text body
        html: `<b>zakazingiz 30 daqiqada yetkazib beriladi</b>`, // html body
    })

    console.log("Message sent: %s", info.messageId);
}

module.exports = nodeMailer