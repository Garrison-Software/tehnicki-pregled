import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div id="about" className={styles.aboutUsContainer}>
      <div className={styles.aboutPresentation}>
        <div className={styles.aboutTitles}>
          <h2>WELT automotive</h2>
          <h3>Pogledajte naše ponude i pogodnosti</h3>
        </div>
        <p>
        Vršimo usluge tehničkog pregleda svih vrsta putničkih I teretnih vozila, tegljača, poluprikolica I prikolica.
        Mi vam omogućavamo da ukoliko želite odloženo plaćanje, moguće je plaćanje čekovima do 6 rata bez kamate, kao I karticama banka Intese, takođe do 6 rata bez kamate.
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
                <p>Provera kvaliteta <br/> pre tehničkog pregleda</p>
              </div>
            </div>
            <div className={styles.promoBlock}>
            <div className={styles.iconDiv}>
                <img src={require('../../assets/icons/repair/speedometer.png')} alt="" />
              </div>
              <div className={styles.serviceDiv}>
                <h3>Testiranje sigurnosti vozila</h3>
                <p>Provera sigurnosti</p>
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
