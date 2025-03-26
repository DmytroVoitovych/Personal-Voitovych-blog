"use server";

import { transporter } from "./nodemailer";
const { NEXT_MAIL_FROM } = process.env;

export const sendMail = async (email: string) => {
  try {
    const isVerified = await transporter.verify();
    if(!isVerified) throw new Error('Not verified');   
  } catch (error) {
    console.error("Something Went Wrong", error);
    return;
  }
  
  const data = await transporter.sendMail({
    from: NEXT_MAIL_FROM,
    to: email,
    subject: "BLOG SUBSCRIBING",
    text: "Hello Guest",
    html: "<h1>Hi</h1>",
  });
  

  return data;
};
