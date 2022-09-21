import React, {useState, useRef} from 'react';
import card from './card.module.css';

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const innerCard = useRef("")
    const handleMouseEnter = (e)=>{
    e.preventDefault();
    if(!isFlipped){
        setIsFlipped(true)

        innerCard.current.setAttribute("style", "display: flex") 
    }
        
    }
    const handleMouseLeave = (e) => {
        e.preventDefault()
        innerCard.current.setAttribute("style", "display: none")
        setIsFlipped(false)
        
    }

  return (
    <div id="cenovnik" className={card.cardWraper}  >
        <div className={card.cardImgWraper}onMouseEnter={handleMouseEnter}><img src={props.src} alt={props.alt} /> <span className={card.cardPrice}>{props.price}din</span></div>
        <div className={card.cardTitle}><span className={card.cardTitleLogo}></span><span className={card.cardTitleText}>{props.title}</span> </div>
        <div className={card.cardSubtitle}><a href={props.href1} className={card.cardQuote}>{props.Link1Text}</a> <a href={props.href2} className={card.cardReadMore}>{props.Link2Text}</a></div>

        <div className={card.overlayWraper}ref={innerCard} onMouseLeave={handleMouseLeave}>
            <h1 className={card.ovelayTitle}>{props.overlayTitle}</h1>
            <p className={card.overlaySubtitle}>{props.overlaySubtitle}</p>
            <a className={card.overlayLink} href={props.overlayHref}>{props.overlayLinkText}</a>
        </div>
    </div>

  )
}

export default Card;