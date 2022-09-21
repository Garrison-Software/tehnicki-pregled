import React from 'react'
import styles from './Promo.module.css'

const Promo = () => {
  return (
    <div id="promocije" className={styles.promoDiv}>
        <img src={require('../../assets/imgs/cek.jpg')} alt="" />
        <img src={require('../../assets/imgs/credit.jpg')} alt="" />
        <img src={require('../../assets/imgs/nalepnica.jpg')} alt="" />
    </div>
  )
}

export default Promo