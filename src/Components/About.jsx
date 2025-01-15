import React from "react";

import styles from "./About.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("")}
          alt=""
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
            
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Freelance Software professional and Tutor</h3>
              <p>
                
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
