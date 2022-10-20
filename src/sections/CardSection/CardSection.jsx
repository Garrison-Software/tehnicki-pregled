import React from "react";
import Card from "../../components/card/Card";
import card from "./cardSecrion.module.css";
import img1 from "../../assets/icons/repair/pexels-malte-luk-2244746.jpg";
import headlamp from "../../assets/imgs/headlamp.jpg";
import carCheckout from "../../assets/imgs/carCheckout.jpg";
import cash from "../../assets/imgs/cashBuisness.jpg";

const cards = [
  {
    id: 0,
    src: img1,
    alt: "pexels-malte-luk-2244746.jpg",
    price: "Cena ",
    title: "Tehnički Pregled",
    href1: "tel:+381 62 472 000",
    href2: "#",
    linkText1: "Pozovite",
    linkText2: "Pročitajte više",
    overlayTitle: "Tehnički pregled",
    exampleText: `Vršimo usluge tehničkog pregleda svih vrsta putničkih I teretnih vozila, tegljača...`,
    overlaySubtitle: `Vršimo usluge tehničkog pregleda svih vrsta putničkih I teretnih vozila, tegljača, poluprikolica I prikolica.
    Tehnički pregled predstavlja skup zakonom propisanih operacija, na osnovu kojih se ocenjuje ispravnost
    vozila. Sve operacije se vrše na opremi koja ispunjava zakonom propisane uslove i koja se redovno
    etalonira. Tehnički pregled putničkih I lakih teretnih vozila (do 3,5 t ukupne mase) traje minimalno 25
    minuta, teretnih vozila do 12 t ukupne mase sa pneumtskim sistemom kočenja 30minuta, dok je za teška
    teretna vozila I velike prikolice I poluprikolice neophodno minimum 40 minuta.`,
    overlayHref: "#",
    overlayLinkText: "pročitajte više",
  },
  {
    id: 1,
    src: carCheckout,
    alt: "pexels-malte-luk-2244746.jpg",
    price: "Cena ",
    title: "Priprema vozila za tehnički pregled",
    href1: "tel:+381 62 472 000",
    href2: "#",
    linkText1: "Pozovite",
    linkText2: "Pročitajte više",
    overlayTitle: "Priprema vozila za tehnički pregled",
    exampleText: `Osnovni uslov koje treba biti ispunjen da bi se otpočelo sa vršenjem tehničkog pregleda je... `,
    overlaySubtitle: `Osnovni uslov koje treba biti ispunjen da bi se otpočelo sa vršenjem tehničkog pregleda je da vozilo
    bude čisto. Iz unutrašnjosti vozila treba ukloniti stvari, alate I slično, dok dečija sedišta nije potrebno
    skidati. Prtljažni prostor mora biti prazan, samo sa obaveznom opremom koja je neophodna u vozilu
    (rezervni točak ili set za reparaciju guma, uže ili sajla za vuču, trougao i prva pomoć).`,
    overlayHref: "#",
    overlayLinkText: "pročitajte više",
  },
  {
    id: 2,
    src: headlamp,
    alt: "pexels-malte-luk-2244746.jpg",
    price: "Cena ",
    title: "Otklanjanje vidljivih neispravnosti",
    href1: "tel:+381 62 472 000",
    href2: "#",
    linkText1: "Pozovite",
    linkText2: "Pročitajte više",
    overlayTitle: "Otklanjanje vidljivih neispravnosti",
    exampleText: `Signalizacija je bitan element u oceni ispravnosti vozila, pa je preporuka da vlasnik...`,
    overlaySubtitle: `Signalizacija je bitan element u oceni ispravnosti vozila, pa je preporuka da vlasnik pregleda svoje vozilo
    kako bi još pre vršenja tehničkog pregleda lako otklonio eventualne neispravnosti. Sva signalizacija na
    vozilu mora biti ispravna – kratka I duga svetla, prednja svetla za maglu ukoliko postoje, svi pokazivači
    pravca (prednji, bočni I zadnji) , zadnja poziciona svetla, stop svetla, zadnje svetlo za maglu, svetlo za
    vožnju unazad I svetla registarske tablice. Prepravka svetala nije dozvoljena tako da je potrebno ukloniti
    eventualno ugrađena led ili xenon svetla I vratiti fabrički predviđene sijalice.
    Manja oštećenja na karoseriji - udubljenja ,ogrebotine, oštećenje laka, nedostatak ukrasne lajsne I slično
    ne predstavljaju neispravnosti na vozilu`,
    overlayHref: "#",
    overlayLinkText: "Pročitajte više",
  },
  {
    id: 3,
    src: cash,
    alt: "pexels-malte-luk-2244746.jpg",
    price: "Cena ",
    title: "Registracija vozila I plaćanje",
    href1: "tel:+381 62 472 000",
    href2: "#",
    linkText1: "Pozovite",
    linkText2: "Pročitajte više",
    overlayTitle: "Registracija vozila I plaćanje",
    exampleText: `Nakon izvršenog tehničkog pregleda može se izvršiti produženje registracije i...`,
    overlaySubtitle: `Nakon izvršenog tehničkog pregleda može se izvršiti produženje registracije I štampanje nalepnice na
    licu mesta bez odlaska u Mup. Kompletnu regsitraciju možete platiti gotovinom ili bilo kojom platnom ili
    kreditnom karticom. Ukoliko želite odloženo plaćanje, moguće je plaćanje čekovima do 6 rata bez
    kamate, kao I karticama banka Intese, takođe do 6 rata bez kamate.`,
    overlayHref: "#",
    overlayLinkText: "Pročitajte više",
  },
];

const CardSection = () => {
  return (
    <div className={card.sectionWrapper}>
      <h1>INFORMACIJE</h1>
      <div className={card.wraper}>
        {cards.map((card) => (
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
            exampleText={card.exampleText}
            overlaySubtitle={card.overlaySubtitle}
            overlayHref={card.overlayHref}
            overlayLinkText={card.overlayLinkText}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
