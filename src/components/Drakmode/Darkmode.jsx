"use client";
import React, { useContext } from "react";
import styles from "./Darkmode.module.css";
import { ThemeContext } from "@/context/Theme";

const Darkmode = () => {
  const { Toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.main} onClick={Toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Darkmode;
