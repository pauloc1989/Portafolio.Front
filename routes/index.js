require('dotenv').config()
const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const handlebars = require('handlebars')
const fs = require('fs')

const readHtml = (path, cb) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
        if (err) {
            console.log(`Error al leer template (email) :: ${JSON.stringify(err)}`)
            throw err
        }
        cb(null, html)
    })
}

router.post('/sendEmail', (req, res) => {
    readHtml(process.env.TEMPLATE, (err, html) => {
        const template = handlebars.compile(html)
        const toSend = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }
        const mailOptions = {
            from: req.body.from,
            to: process.env.TO,
            subject: process.env.SUBJECT,
            html: template(toSend)
        }

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        })
        transport.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(`Error en envío de correo, ${JSON.stringify(err)}`)
                res.send({ success: false, data: err }).status(500)
            }
            else {
                console.log(`Se envió correo, ${JSON.stringify(info)}`)
                res.send({ success: true, data: info }).status(200)
            }
        })
    })
})

module.exports = router