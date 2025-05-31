import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './home';
import Store from './Store';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './home.css'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
<Route
  path="/"
  element={
    <div className="home-background">
      <div className="home-container">
        <h1 className="home-title">Benvingut a Games&Co</h1>
        <p className="home-subtitle">La millor botiga d'entreteniment digital!</p>
      </div>


      <div className="parallax parallax-two">
  <div className="parallax-text">
    <h2>La teva destinació digital per a videojocs</h2>
    <p>A Games&Co, compartim la teva passió pels videojocs. Som una botiga en línia especialitzada en oferir-te el millor del món dels jocs digitals i físics, amb una selecció curosament triada per a jugadors de totes les edats i nivells d’experiència.

Tant si busques els últims llançaments per a PC, PlayStation, Xbox o Nintendo, com si ets un amant dels clàssics retro o les edicions col·leccionista més exclusives, a Games&Co trobaràs sempre alguna cosa per a tu. Treballem amb els principals distribuïdors i editors per garantir preus competitius, llicències oficials i accés immediat als teus títols preferits.</p>
  </div>
</div>

<div className="features-releases-wrapper">
  <div className="features">
    <h2 className="section-title">Aquí trobaras</h2>
    <div className="feature-card">
      <h2>Els jocs més novedosos</h2>
      <p>Exploreu la nostra llista seleccionada dels títols més populars per a totes les plataformes</p>
    </div>
    <div className="feature-card">
      <h2>Les millors ofertes</h2>
      <p>Aconsegueix descomptes interessants i ofertes especials als teus jocs preferits.</p>
    </div>
    <div className="feature-card">
      <h2>Llançaments constants</h2>
      <p>Estigueu al dia amb els últims llançaments i les reserves exclusives.</p>
    </div>
  </div>

<div className="game-releases-section">
  <h2 className="section-title">Próxims llançaments</h2>
  <div className="game-releases">
    <div className="release-card">
      <img src="/MKW.jpg" alt="Galaxy Raiders" className="release-image" />
      <h3>Mario kart World</h3>
      <p>La desena entrega d'un dels títols més venuts.</p>
    </div>
    <div className="release-card">
      <img src="/Deltarune.jpg" alt="Dragon Realm" className="release-image" />
      <h3>Deltarune 3 i 4</h3>
      <p>Dos nous capítols amb infinites possibilitats.</p>
    </div>
    <div className="release-card">
      <img src="/StreetFighter.jpg" alt="Nitro Blitz" className="release-image" />
      <h3>Street Fighter 6 Fighters Edition</h3>
      <p>Nova edició amb més contingut i escenaris</p>
    </div>
  </div>
</div>

</div>

      <div className="parallax parallax-two">
  <div className="parallax-text-2">
    <h2>Sobre nosaltres</h2>
    <p>Una comunitat de jugadors, apassionats com tu.
A Games&Co vivim el joc intensament, cada partida, cada repte.
Connectem mons, venem aventures, compartim emocions.
Aquí comença la teva propera gran història.</p>
  </div>
</div>

    </div>
    
  }
/>
        <Route path="/store" element={<Store />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>

  );
}

export default App;
