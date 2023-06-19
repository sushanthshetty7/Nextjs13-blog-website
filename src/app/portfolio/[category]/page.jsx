import React from 'react'
import styles from "./Page.module.css"
import Button from '@/components/Button/Button'
import Image from 'next/image'

function Category({params}) {
  console.log(params)
  return (

    <div className={styles.catogary}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1>Test</h1>
          <p>desc</p>
          <Button text={"see more"} url={""}/>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img} fill={true} src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"/>
        </div>
        
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1>Test</h1>
          <p>desc</p>
          <Button text={"see more"} url={""}/>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img} fill={true} src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"/>
        </div>
        
      </div>
      <div className={styles.item}>
        <div className={styles.textContainer}>
          <h1>Test</h1>
          <p>desc</p>
          <Button text={"see more"} url={""}/>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img} fill={true} src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"/>
        </div>
        
      </div>
    </div>
  )
}                        

export default Category  