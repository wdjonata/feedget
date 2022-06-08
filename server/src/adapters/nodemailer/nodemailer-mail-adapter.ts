import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "672649eab8eedd",
      pass: "8a45788d8a1b51"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail(data: SendMailData) {
        const { subject, body} = data

        transport.sendMail({
            from: 'Equipe Feedget <teste@feedget.com>',
            to: 'Djonata Webber <wdjonata@gmail.com>',
            subject,
            html: body
        })
    }
}