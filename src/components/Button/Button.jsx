import React from "react";
import Link from "next/link";
import styles from "./Button.module.css"

const Button=({url, text}) =>{
  return (
    <Link href={url}>
      <button className={styles.btn}>{text}</button>
    </Link>
  );
}

export default Button;
