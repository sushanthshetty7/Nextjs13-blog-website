import React from 'react'
import styles from "./Page.module.css"
import Button from '@/components/Button/Button'
import Image from 'next/image'
import {items} from './data'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'

const getdata = (cat)=>{
  const data = items[cat]
  if(data){
    return data
  }

  return PageNotFoundError
}

function Category({params}) {
  const data = getdata(params.category)

  return (

    <div className={styles.catogary}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(item=>(
        <div className={styles.item} key={item.id}>
        <div className={styles.textContainer}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <Button text={"see more"} url={""}/>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img} fill={true} src={item.image}/>
        </div>
      </div>
      ))}
      
    </div>
  )
}                        

export default Category  