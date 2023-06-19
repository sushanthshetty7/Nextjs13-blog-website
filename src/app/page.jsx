import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

import Button from '@/components/Button/Button'


export default function Home() {
  return (
   <div className={styles.home}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better design<br/> for your digital<br/> products.</h1>
      <p className={styles.desc}>turning your idea into reality, we bring together the terms from the global tech industry</p>
      <Button text='See Our Works' url="/portfolio"/>
    </div>
    <div className={styles.item}>
    <Image src={Hero} alt='img' className={styles.img}/>
    </div>
   
   </div>
  )
}
