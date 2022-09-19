import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutPresentation}>
        <div className={styles.aboutTitles}>
          <h2>Zašto izabrati baš nas?</h2>
          <h3>Pogledajte naše ponude i pogodnosti</h3>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae eligendi quaerat nihil possimus repellat nam dolorem, hic voluptatum perspiciatis dignissimos tenetur beatae eius rerum ducimus. A quidem vel culpa!
        Dolorem impedit corporis similique veritatis! Officiis voluptas laborum magni deserunt dolores? Totam quaerat corporis quidem consequuntur adipisci eius repudiandae aperiam, veritatis eos harum nemo voluptates est atque dolorum, rem nobis.</p>
      </div>
      <div className={styles.aboutPromotions}></div>
    </div>
  );
};

export default AboutUs;
