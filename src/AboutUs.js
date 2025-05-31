import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-background">
      <div className="parallax-section">
        <div className="parallax-text-AU">
          <h1>Sobre Nosaltres</h1>
          <p>La passió pel joc ens mou</p>
        </div>
      </div>

      <div className="aboutus-content">
        <h2>Qui som?</h2>
        <p>
          A <strong>Games&Co</strong>, vivim i respirem videojocs. Som un equip apassionat format per jugadors, creadors i experts del sector que vol oferir-te el millor del món gamer.
        </p>

        <h2>La nostra missió</h2>
        <p>
          Connectar els jugadors amb les millors experiències, jocs i ofertes, tant clàssics com les últimes novetats. Creiem que jugar és més que un hobby — és una forma de vida.
        </p>

        <h2>Per què escollir-nos?</h2>
        <ul>
          <li> - Àmplia selecció de títols</li>
          <li> - Servei al client proper i ràpid</li>
          <li> - Ofertes especials cada setmana</li>
          <li> - Compromís amb la qualitat</li>
        </ul>

        <h2>Ens encanta escoltar-te</h2>
        <p>
          Si tens suggeriments, preguntes o simplement vols saludar, posa't en contacte amb nosaltres a través de la nostra <strong>Pàgina de Contacte</strong>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
