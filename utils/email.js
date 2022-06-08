const { Template } = require('ejs');
const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const pug = require('pug');


module.exports = class Email{
  constructor(user, url){
    this.to= user.email;
    this.firstName = user.name.split(' ')[0]
    this.url= url;
    this.from ='Felipe Zapata an-felipe@hotmail.es'

  }

  newTransport(){
    return nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "102ba0a5e53bf7",
        pass: "136732075f7242"
      }
  });

  }


  async send(template, subject){

    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`, 
      {
      firstName: this.firstName,
      url:this.url,
      subject
      } 
      )

    //2 define the email options
  
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html,
      text: htmlToText.fromString(html)
    };
    await this.newTransport().sendMail(mailOptions);

  }
  async sendWelcome(){
   await this.send('welcome', 'welcome to the trash family')
  }

  async sendPasswordReset(){
    await this.send('resetPassword', 'your password reset token (valid only for 10 minutes)')
  }

};



