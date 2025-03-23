'use client';
import Form from 'next/form'
import styles from './FormComponent.module.css';
 
export default function NewsForm() {

const subscribeByEmail = ()=>{

};

  return (
    <Form action={subscribeByEmail} className={styles.form}>
      <label htmlFor="email" className='text-preset-7'>
      Email Address  
      <input type='email' id='email' name="email" placeholder='email@example.com' />
      </label>
      <button className='text-preset-6' type="submit">Stay updated</button>
      <p className='text-preset-8'>Unsubscribe anytime. No spam, I promise 🙂</p>
    </Form>
  )
}