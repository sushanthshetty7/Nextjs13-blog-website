import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.imgcontainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="img"
          className={styles.img}
        />
        <div className={styles.imageText}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <h2 className={styles.Imagedesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.item}>
          <h1 className={styles.texttitle}>Who Are We?</h1>
          <p className={styles.textDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
            provident veritatis saepe vitae nihil iste minus. Fugit non
            excepturi, error ipsa velit quia in facere temporibus quas nobis
            fuga iste fugiat repudiandae.
          </p>
         
          <p className={styles.textDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
            provident veritatis saepe vitae nihil iste minus. Fugit non
            excepturi, error ipsa velit quia in facere temporibus quas nobis
            fuga iste fugiat repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim alias blanditiis molestiae, quibusdam omnis at molestias autem possimus consequuntur voluptate nemo quidem officia rem incidunt quia repellendus animi expedita libero. Ipsum!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.texttitle}>What We Do?</h1>
          <p className={styles.textDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
            provident veritatis saepe vitae nihil iste minus. Fugit non
            excepturi, error ipsa velit quia in facere temporibus quas nobis
            fuga iste fugiat repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eum. Minima, deserunt possimus iure voluptatibus esse eveniet nisi totam vero sequi quae molestiae. Eos incidunt rerum illum facere, aspernatur eaque.
            ctreative illustrations
            <br />
            <br />- Dynamic Websites
            <br />
            <br />- Fast and handy 
            <br />
            <br />- Mobile Apps
          </p>
          <Button text="Contact" url="/contact"/> 
        </div>
      </div>
    </div>
  );
}

export default About;
