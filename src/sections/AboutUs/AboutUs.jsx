import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div id="about" className={styles.aboutUsContainer}>
      <div className={styles.aboutPresentation}>
        <div className={styles.aboutTitles}>
          <h2>WELT automotive</h2>
          <h3>Naša ponuda:</h3>
        </div>
        <p>
          Vršimo uslugu tehničkog pregleda svih vrsta 
          putničkih i teretnih vozila, kipera, tegljača,
           kao i teških prikolica i poluprikolica. 
           Registracija vozila, izrada polise osiguranja i izdavanje registracione nalepnice na licu mesta. Plaćanje kompletnog iznosa registracije gotovinom ili bilo kojom karticom (uz Generali polisu kupljenu kod nas). Odloženo plaćanje do 6 rata bez kamate, čekovima ili karticama Banca Intesa.
        </p>
      </div>

      <div className={styles.blinkAd}>
        <img src={require('../../assets/icons/header/logoWeltAuto1.png')} alt="" />
      </div>


      {/* <div className={styles.aboutPromotions}>
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

      </div> */}
    </div>
  );
};

export default AboutUs;
