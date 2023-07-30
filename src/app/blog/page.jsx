"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Error from 'next/error'


const  getdata=async()=>{
  const resp = await fetch("http://localhost:3000/api/posts")
  
  if(!resp.ok){
    throw new Error("failed to fetch data")
  }

  return resp.json()

}

const Blog = async()=> {
  const data = await getdata()
  return (
    <div className={styles.blog}>
      {data.map(item=>
        (
          <Link href={`/blog/${item._id}`} className={styles.items} key={item.id}>
          <div className={styles.item}>
            <Image src={''} height={250} width={400} className={styles.img}/>
            <h1>{item.title}</h1>
          </div>
          </Link> 
        )
      )}
     
    </div>
  )
}

export default Blog  