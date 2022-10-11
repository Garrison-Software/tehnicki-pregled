import React, { useState, useRef } from "react";
import CardModal from "../modal/CardModal";
import Button from "react-bootstrap/Button";
import card from "./card.module.css";
import { useEffect } from "react";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const innerCard = useRef("");
  const handleMouseEnter = (e) => {
    e.preventDefault();
    if (!isFlipped) {
      setIsFlipped(true);

      innerCard.current.setAttribute("style", "display: flex");
    }
  };
  const handleMouseLeave = (e) => {
    e.preventDefault();
    innerCard.current.setAttribute("style", "display: none");
    setIsFlipped(false);
  };


  return (
    <div id='cenovnik' className={card.cardWraper}>
      <div className={card.cardImgWraper} onMouseEnter={handleMouseEnter}>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className={card.cardTitle}>
        <span className={card.cardTitleLogo}></span>
        <span className={card.cardTitleText}>{props.title}</span>{" "}
      </div>
      <div className={card.cardSubtitle}>
        <a href={props.href1} className={card.cardQuote}>
          {props.Link1Text}
        </a>{" "}
        <Button
          onClick={() => setModalShow(true)}
          className={card.cardReadMore}>
          Pročitajte više
        </Button>
        <CardModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          bodyText={props.overlaySubtitle}
          heading={props.overlayTitle}
        />
      </div>

      <div
        className={card.overlayWraper}
        ref={innerCard}
        onMouseLeave={handleMouseLeave}>
        <h1 className={card.ovelayTitle}>{props.overlayTitle}</h1>
        <p className={card.overlaySubtitle}>{props.exampleText}</p>
        <Button onClick={() => setModalShow(true)} className={card.overlayLink}>
          Pročitajte više
        </Button>
      </div>
    </div>
  );
};

export default Card;
