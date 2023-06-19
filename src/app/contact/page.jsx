import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imageContent}>
          <Image src='/contact.png' alt='img' className={styles.img} fill={true}/>
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="NAME" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea placeholder="Message" className={styles.textarea} cols="30" rows="10">
            
          </textarea>
          <Button url={""} text={"Send"} />
        </form>
      </div>
    </div>
  )
}

export default Contact