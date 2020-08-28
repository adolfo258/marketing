const functions = require('firebase-functions');
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'baenzcontact@gmail.com',
        pass: 'baenzforever'
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
        to: 'baenzmarketingdigital@gmail.com',
        subject: 'Mensaje de contacto',
        html:`
        <h1>Datos de Interesado</h1>
        <p><strong>Nombre:</strong>${name}</p>
        <p><strong>Cel:</strong> ${cel}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
        <p><strong>Email:</strong> ${email}</p>
    `
    })
    .then(r => r)
    .catch(e => e)
}
