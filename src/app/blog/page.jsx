import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


async function getdata(){
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:'no-store'})
  if(!resp.ok){
    throw new Error("failed to fetch data")
  }

  return resp.json()

}

const Blog = async()=> {
  const data = await getdata()
  return (
    <div className={styles.blog}>
      {data.map((item)=>
        (
          <Link href='/blog/testId' className={styles.items} key={item.id}>
          <div className={styles.item}>
            <Image src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"} height={250} width={400} className={styles.img}/>
            <h1>{item.title}</h1>
          </div>
          </Link>
        )
      )}
     
    </div>
  )
}

export default Blog