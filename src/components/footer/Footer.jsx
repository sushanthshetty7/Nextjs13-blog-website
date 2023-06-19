import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
        <div>All rights reserved</div>
        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt='img'/>
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt='img'/>
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt='img'/>
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt='img'/>
        </div>
    </div>
  )
}

export default Footer