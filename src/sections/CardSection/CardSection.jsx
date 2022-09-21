import React from 'react'
import Card from '../../components/card/Card';
import card from "./cardSecrion.module.css"
import img1 from "../../assets/icons/repair/pexels-malte-luk-2244746.jpg";


const cards =[{
    id:0,
    src:img1,
    alt:"pexels-malte-luk-2244746.jpg",
    price:"Cena ",
    title:"Tehnički Pregled",
    href1:"#",
    href2:"#",
    linkText1: "Rezervisite",
    linkText2:"Pročitajte više",
    overlayTitle:"Tehnički pregled",
    overlaySubtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis hic eaque a sed consequatur unde repellendus quis ex error, omnis esse ad aut veniam. Voluptatum, sunt unde? Ut, odio sapiente!",
    overlayHref:"#",
    overlayLinkText:"pročitajte više",

},
{
    id:1,
    src:img1,
    alt:"pexels-malte-luk-2244746.jpg",
    price:"Cena ",
    title:"Servis vozila",
    href1:"#",
    href2:"#",
    linkText1: "Rezervisite",
    linkText2:"Pročitajte više",
    overlayTitle:"Servis vozila",
    overlaySubtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis hic eaque a sed consequatur unde repellendus quis ex error, omnis esse ad aut veniam. Voluptatum, sunt unde? Ut, odio sapiente!",
    overlayHref:"#",
    overlayLinkText:"pročitajte više",

},
{
    id:2,
    src:img1,
    alt:"pexels-malte-luk-2244746.jpg",
    price:"Cena ",
    title:"Prodaja pneumatika",
    href1:"#",
    href2:"#",
    linkText1: "Rezervisite",
    linkText2:"Pročitajte više",
    overlayTitle:"Prodaja pneumatika",
    overlaySubtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis hic eaque a sed consequatur unde repellendus quis ex error, omnis esse ad aut veniam. Voluptatum, sunt unde? Ut, odio sapiente!",
    overlayHref:"#",
    overlayLinkText:"Pročitajte više",

},

]

const CardSection = () => {
  return (
    <div >
        <h1>NAŠE PONUDE</h1>
        <div className={card.wraper}>
                {cards.map(card => (
                    <Card
                    key={card.id}
                    src={card.src}
                    alt={card.alt}
                    price={card.price}
                    title={card.title}
                    href1={card.href1}
                    href2={card.href2}
                    Link1Text={card.linkText1}
                    Link2Text={card.linkText2}
                    overlayTitle={card.overlayTitle}
                    overlaySubtitle={card.overlaySubtitle}
                    overlayHref={card.overlayHref}
                    overlayLinkText={card.overlayLinkText}
                    />
                ))}
        </div>
    </div>
  )
}

export default CardSection