const functions = require('firebase-functions');
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'adolfotesting@gmail.com',
        pass: '37525727asd'
    }
}) 

exports.contactEmail = functions.database.ref('marketing-digital-2c3b5/{id}').onCreate((snap, context) => {
    const name = snap.val().name
    const email = snap.val().email
    const cel = snap.val().cel
    const message = snap.val().message

    return sendContactEmail(name, email, cel, message)
})

const sendContactEmail = (name, email, cel, message) => {
    return transport.sendMail({
        from: name,
        to: 'baenzcontact@gmail.com',
        subject: 'Mensaje de contacto',
        html:`
        <h1>Datos de Interesado</h1>
        <p>${name}</p>
        <p>cel: ${cel}</p>
        <p>mensage: ${message}</p>
        <p>email: ${email}</p>
    `
    })
    .then(r => r)
    .catch(e => e)
}
