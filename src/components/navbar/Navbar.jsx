'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Darkmode from '../Drakmode/Darkmode'


const links =[
  {
    id:1,
    title:"Home",
    url:'/'
  },
  {
    id:2,
    title:"Portfolio",
    url:"/portfolio"
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashbord",
  },
]



function Navbar() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">Blog</Link>
      <div className={styles.links}>
        <Darkmode/>
        {links.map(link=>{
          return(
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
          )
         
        })}
        <button className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
    
  )
}

export default Navbar