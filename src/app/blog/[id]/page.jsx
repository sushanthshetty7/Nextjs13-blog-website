import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function Blogpage() {
  return (
    <div className={styles.blogpost}>
      <div className={styles.top}>
        <div className={styles.topleft}>
        <h1 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem impedit et, aperiam optio perferendis quam quia?</h1>
        <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ea assumenda voluptatem! Vitae repellat dolore, dolorum possimus doloribus minima magnam eos a iure, nulla eius, sequi eum rerum illo. Excepturi molestias repellat fugiat tempore nesciunt quidem inventore ipsam eveniet quisquam officia rem doloremque fugit optio dolor, nam non vel? Id neque aperiam harum, magnam expedita sequi. Officiis doloribus reprehenderit culpa nam ipsam porro vero?</p>
        <div className={styles.author}>
        <Image src='/luffy.jpg' width={30} height={30} className={styles.autimg}/>
        <span className={styles.name}>Luffy</span>
        </div>
        </div>
        <div className={styles.topright}>
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" height={250} width={600} className={styles.img}/>

        </div>

      </div>
      <div className={styles.bottom}>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea voluptatem ipsa repudiandae voluptatum odio possimus ipsum ducimus nostrum velit exercitationem nesciunt quam ex, accusamus corporis sapiente, placeat totam praesentium tempora atque consequatur. Voluptatibus debitis cumque distinctio at rem minima cupiditate delectus laboriosam recusandae nulla magni non, sapiente voluptas iste optio. Sunt, hic, quam quis doloremque expedita eius sint laudantium reiciendis a id voluptatibus quaerat praesentium? Neque voluptas magni dolor, ex in inventore cupiditate sed, minima saepe distinctio ipsam ratione fugit iusto, dolorum quae non sapiente alias quos. Libero placeat labore expedita dolores, porro fugiat soluta accusantium enim temporibus explicabo minima sequi nisi sapiente, accusamus natus exercitationem quia dignissimos facere! Aliquid enim dicta illum, ea blanditiis aliquam maxime molestiae consequuntur doloremque magnam, soluta eligendi fugit cupiditate nihil? Amet dicta illo eos iure deleniti maxime ratione perspiciatis itaque. Vero itaque, accusamus commodi doloremque nulla architecto repellat amet earum pariatur molestias, consequatur atque adipisci esse voluptas, iusto doloribus excepturi soluta distinctio tenetur dolorem placeat magni? Explicabo sint quaerat quos voluptates nihil earum quod repudiandae nam dolorum itaque! Minus, tempora necessitatibus dignissimos corrupti illo ullam inventore quasi corporis voluptatum dolores voluptatibus voluptas quas reprehenderit est nisi dolorum natus repellat magnam ea neque nihil nemo suscipit harum quidem. Atque aperiam perferendis temporibus doloribus harum quas dicta voluptates quae sunt, ut dolorum ipsam facere quia cupiditate consequatur ratione unde! Repellendus nam cum molestiae praesentium natus, rerum aliquam vel aut sint, laborum vero perspiciatis nihil officiis eligendi. Illum inventore ullam dolores nulla in voluptate cum dolorum ducimus, blanditiis quibusdam accusamus, omnis commodi? Id tempore illo illum maxime non fugit delectus sequi.</p>
      </div>
    </div>
  )
}

export default Blogpage