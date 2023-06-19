import React from 'react'
import styles from "./Page.module.css"

function Layout({children}) {
  return (
    <div>
        <h1 className={styles.maintitle}>Our Works</h1>
        {children}
    </div>
  )
}

export default Layout