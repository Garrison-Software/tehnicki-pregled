import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle1}>Tehniči pregled vozila</h1>
        <h1 className={styles.heroTitle2}>Registracija vozila</h1>
    </div>
  )
}

export default Hero