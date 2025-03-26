import nodemailer from 'nodemailer';

const { NEXT_PASSWORD, NEXT_MAIL_FROM, NEXT_HOST } = process.env;

const config = {  
  host: NEXT_HOST, 
  port: 465,  
  secure: true,
  
  auth: {  
    user: NEXT_MAIL_FROM,
    pass: NEXT_PASSWORD,
  },

};

export const transporter = nodemailer.createTransport(config);