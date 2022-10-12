import React from 'react'
import {motion} from 'framer-motion'
import styles from './Hero.module.css'



const Hero = () => {
  const res = window.matchMedia(`(max-width:726px)`)
  console.log(res.matches);
  return (
    <motion.div 
    initial={{opacity:0}}  
    animate={{opacity:1}} 
    transition={{ duration: 1 }} 
    className={styles.heroContainer}
    >
      
      {/* <NavMenu/> */}
        <motion.h1 
       
        initial={{x:"-150px",opacity:0}} 
        animate={!res.matches
          ?
          {translateX:"75px",opacity:1}
          :
          {x:"15px",opacity:1}}
        transition={{ duration: 1.5 }} 
        className={styles.heroTitle1}
        >
          Tehniči pregled vozila
        </motion.h1>

        <motion.h1 
         initial={{x:"150px",opacity:0}} 
         animate={!res.matches?
          {translateX:"-75px",opacity:1}
          :
          {x:"-15px",opacity:1}}
         transition={{ duration: 1.5 }} 
        className={styles.heroTitle2}
        >
          Registracija vozila
        </motion.h1>
    </motion.div>
  )
}

export default Hero