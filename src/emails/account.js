const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bhanuka.17@itfac.mrt.ac.lk',
        subject: 'Thanks for join in!',
        text: `Welcome to the app, ${name}. Let you welcome!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bhanuka.17@itfac.mrt.ac.lk',
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}. Please come back soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}