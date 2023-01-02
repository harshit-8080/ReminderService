const sender = require("../config/email.Config");

const sendMail = (from, to, subject, body) => {

    sender.sendMail({
        from,
        to,
        subject,
        text:body
    })
}

module.exports = sendMail;