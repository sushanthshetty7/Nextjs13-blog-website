import React from 'react'
import styles from './Page.module.css'
import Link from 'next/link'

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.title}>Choose a gallery</h1>
      <div className={styles.content}>
       <Link href='/portfolio/illustrations' className={styles.item}>
        <span className={styles.itemtitle}>Illustrations</span>
       </Link>
       <Link href='/portfolio/Websites' className={styles.item}>
        <span className={styles.itemtitle}>Websites</span>
       </Link>
       <Link href='/portfolio/applications' className={styles.item}>
        <span className={styles.itemtitle}>Application</span>
       </Link>
      </div>
    </div>
  )
}

export default Portfolio