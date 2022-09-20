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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          repudiandae eligendi quaerat nihil possimus repellat nam dolorem, hic
          voluptatum perspiciatis dignissimos tenetur beatae eius rerum ducimus.
          A quidem vel culpa! Dolorem impedit corporis similique veritatis!
          Officiis voluptas laborum magni deserunt dolores? Totam quaerat
          corporis quidem consequuntur adipisci eius repudiandae aperiam,
          veritatis eos harum nemo voluptates est atque dolorum, rem nobis.
        </p>
      </div>
      <div className={styles.aboutPromotions}>
        <div className={styles.blockSet1}>
            <div className={styles.promoBlock}>
              <div className={styles.iconDiv}>
                <img src={require('../../assets/icons/repair/automotive.png')} alt="" />
              </div>
              <div className={styles.serviceDiv}>
                <h3>Testiranje kvaliteta vozila</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className={styles.promoBlock}>
            <div className={styles.iconDiv}>
                <img src={require('../../assets/icons/repair/speedometer.png')} alt="" />
              </div>
              <div className={styles.serviceDiv}>
                <h3>Testiranje sigurnosti vozila</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
        </div>

        <div className={styles.blockSet2}>
            <div className={styles.promoBlock}>
            <div className={styles.iconDiv}>
                <img src={require('../../assets/icons/repair/bill.png')} alt="" />
              </div>
              <div className={styles.serviceDiv}>
                <h3>Plaćanje na čekove</h3>
                <p>6 meseic sa 0% kamate! <br/>
                  Kompletna registracija na čekove
                </p>
              </div>
            </div>
            <div className={styles.promoBlock}>
            <div className={styles.iconDiv}>
                <img src={require('../../assets/icons/repair/credit-card.png')} alt="" />
              </div>
              <div className={styles.serviceDiv}>
                <h3>Karticom Banca Intesa</h3>
                <p>Plaćanje registracija na 6 rata</p>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
