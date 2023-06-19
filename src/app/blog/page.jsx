import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Blog() {
  return (
    <div className={styles.blog}>
      <Link href='/blog/testId' className={styles.items}>
      <div className={styles.item}>
        <Image src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"} height={250} width={400} className={styles.img}/>
        <h1>Test</h1>
      </div>
      </Link>
      <Link href='/blog/testId' className={styles.items}>
      <div className={styles.item}>
        <Image src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"} height={250} width={400} className={styles.img}/>
        <h1>Test</h1>
      </div>
      </Link>
      <Link href='/blog/testId' className={styles.items}>
      <div className={styles.item}>
        <Image src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"} height={250} width={400} className={styles.img}/>
        <h1>Test</h1>
      </div>
      </Link>
      <Link href='/blog/testId' className={styles.items}>
      <div className={styles.item}>
        <Image src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"} height={250} width={400} className={styles.img}/>
        <h1>Test</h1>
      </div>
      </Link>
      
     
     
      
    </div>
  )
}

export default Blog