import nodemailer from "nodemailer";

const { NEXT_PUBLIC_PASSWORD, NEXT_PUBLIC_MAIL_FROM, NEXT_PUBLIC_HOST } = process.env;

const config = {
  host: NEXT_PUBLIC_HOST,
  port: 465,
  secure: true,

  auth: {
    user: NEXT_PUBLIC_MAIL_FROM,
    pass: NEXT_PUBLIC_PASSWORD,
  },
};

export const transporter = nodemailer.createTransport(config);
