"use client";
import Form from "next/form";
import styles from "./FormComponent.module.css";
import { sendMail } from "./mailer/sendMail";
import { Submit } from "./SubmitComponent";
import { useState } from "react";

export default function NewsForm() {
 const [err,showErr] = useState<boolean>(false);   

 const emailValidation = (e)=> {
    if(!e.target.value)return;
    showErr(!e.target.checkValidity());}

  const subscribeByEmail = (formData: FormData) => {
    const email = formData.get("email") as string | null;
    if (email)
      sendMail(email.trim())
        .then(() => console.log("Success"))
        .catch((err) => console.log("Subscription failure", err));
    else return;
  };

  return (
    <Form action={subscribeByEmail} className={styles.form}>
      <label htmlFor="email" className="text-preset-7">
        Email Address
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          pattern="^\S+@\S+\.\S+$"
          required
          onBlur={emailValidation}
          onChange={(e)=> !e.target.value && showErr(false)}
        />
      </label>
      {err?<p>Error</p>:<></>}
      <Submit />
      <p className="text-preset-8">Unsubscribe anytime. No spam, I promise 🙂</p>
    </Form>
  );
}
