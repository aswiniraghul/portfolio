import React from "react";

import styles from "./Description.css";


export const Description = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aswini</h1>
        <p className={styles.description}>
        Computer Science graduate with expertise in Java, JavaScript, React, Spring Boot, and MySQL. 
        Skilled in developing and managing full-stack applications. 
        Recognized for rapid learning and technology adaptation, aiming to contribute to a dynamic team, applying technical skills to innovation and growth in software development.

        </p>
        <a href="mailto:" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("")}
        alt="Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
