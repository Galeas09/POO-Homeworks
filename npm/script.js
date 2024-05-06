document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const recipient = document.getElementById("recipient").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;

    const email = new Email(recipient, subject, body);
    email.send();
});

class Email {
    constructor(recipient, subject, body) {
        this.recipient = recipient;
        this.subject = subject;
        this.body = body;
    }

    send() {
        const nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'carluxtor97@gmail.com',
                pass: 'Megamanleo77'
            }
        });

        const mailOptions = {
            from: 'carluxtor97@gmail.com',
            to: this.recipient,
            subject: this.subject,
            text: this.body
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}