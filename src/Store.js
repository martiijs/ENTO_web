import React from 'react';
import './store.css';

const Store = () => {
  return (
    <div className="store-background">
      <div className="store-container">
        <div className="store-head">
          <h1 className="store-title">La nostra botiga</h1>
          <p className="store-subtitle">Descobreix les últimes novetats i ofertes</p>
        </div>

        <h2 className="carousel-title">Jocs de PlayStation</h2>
        <div className="product-carousel">
          <div className="product-card">
            <img src="/GOW.jpg" alt="God of War" />
            <h3>God of War</h3>
            <p>Lluita èpica entre déus i monstres.</p>
            <p><strong>Preu:</strong> 49,99 €</p>
          </div>
          <div className="product-card">
            <img src="/GTA.jpg" alt="GTA V" />
            <h3>GTA V</h3>
            <p>Acció i llibertat en un món obert massiu.</p>
            <p><strong>Preu:</strong> 29,99 €</p>
          </div>
          <div className="product-card">
            <img src="/Horizon.jpg" alt="Horizon Forbidden West" />
            <h3>Horizon Forbidden West</h3>
            <p>Explora terres salvatges futuristes.</p>
            <p><strong>Preu:</strong> 59,99 €</p>
          </div>
          <div className="product-card">
            <img src="/RDR2.jpg" alt="Red Dead Redemption 2" />
            <h3>Red Dead Redemption 2</h3>
            <p>Una aventura western amb història immersiva.</p>
            <p><strong>Preu:</strong> 39,99 €</p>
          </div>
          <div className="product-card">
            <img src="/TheLastOfUs.jpg" alt="The Last of Us" />
            <h3>The Last of Us</h3>
            <p>Drama i supervivència en un món postapocalíptic.</p>
            <p><strong>Preu:</strong> 44,99 €</p>
          </div>
          <div className="product-card">
            <img src="/TakesTwo.jpg" alt="It Takes Two" />
            <h3>It Takes Two</h3>
            <p>Cooperació creativa i divertida per a dos jugadors.</p>
            <p><strong>Preu:</strong> 34,99 €</p>
          </div>
          <div className="product-card">
            <img src="/Spiderman2.jpg" alt="Spider-Man 2" />
            <h3>Spider-Man 2</h3>
            <p>Acció trepidant amb Peter Parker i Miles Morales.</p>
            <p><strong>Preu:</strong> 59,99 €</p>
          </div>
        </div>

        <h2 className="carousel-title">Jocs de Nintendo Switch</h2>
        <div className="product-carousel">
          <div className="product-card">
            <img src="/Smash.jpg" alt="Smash Bros Ultimate" />
            <h3>Smash Bros Ultimate</h3>
            <p>Combats intensos amb els teus personatges favorits.</p>
            <p><strong>Preu:</strong> 54,99 €</p>
          </div>
          <div className="product-card">
            <img src="/S3.jpg" alt="Splatoon 3" />
            <h3>Splatoon 3</h3>
            <p>Batalletes de pintura competitives i divertides.</p>
            <p><strong>Preu:</strong> 49,99 €</p>
          </div>
          <div className="product-card">
            <img src="/PK4.jpg" alt="Pikmin 4" />
            <h3>Pikmin 4</h3>
            <p>Explora i resol trencaclosques amb criatures adorables.</p>
            <p><strong>Preu:</strong> 39,99 €</p>
          </div>
          <div className="product-card">
            <img src="/ACNH.jpg" alt="Animal Crossing" />
            <h3>Animal Crossing: New Horizons</h3>
            <p>Construeix una vida relaxada en una illa paradisíaca.</p>
            <p><strong>Preu:</strong> 49,99 €</p>
          </div>
          <div className="product-card">
            <img src="/BOTW.jpg" alt="Breath of the Wild" />
            <h3>Zelda: Breath of the Wild</h3>
            <p>Un món obert d'aventura i llibertat.</p>
            <p><strong>Preu:</strong> 59,99 €</p>
          </div>
          <div className="product-card">
            <img src="/TOTK.jpg" alt="Tears of the Kingdom" />
            <h3>Zelda: Tears of the Kingdom</h3>
            <p>Continua l'epopeia de Link en un nou cel i terra.</p>
            <p><strong>Preu:</strong> 69,99 €</p>
          </div>
          <div className="product-card">
            <img src="/MetroidPrime.jpeg" alt="Metroid Prime 4" />
            <h3>Metroid Prime 4</h3>
            <p>L'aventura espacial de Samus continua.</p>
            <p><strong>Preu:</strong> 59,99 €</p>
          </div>
        </div>

        <h2 className="carousel-title">Jocs de XBOX</h2>
        <div className="product-carousel">
          <div className="product-card">
            <img src="/Cyberpunk.jpg" alt="Cyberpunk 2077" />
            <h3>Cyberpunk 2077</h3>
            <p>Un futur distòpic ple d'opcions i acció.</p>
            <p><strong>Preu:</strong> 29,99 €</p>
          </div>
          <div className="product-card">
            <img src="/EldenRing.jpg" alt="Elden Ring" />
            <h3>Elden Ring</h3>
            <p>Un món fosc i fascinant d'aventura i desafiament.</p>
            <p><strong>Preu:</strong> 59,99 €</p>
          </div>
          <div className="product-card">
            <img src="/Fallout.jpg" alt="Fallout 4" />
            <h3>Fallout 4</h3>
            <p>Supervivència i exploració després de l'apocalipsi.</p>
            <p><strong>Preu:</strong> 24,99 €</p>
          </div>
          <div className="product-card">
            <img src="/FC25.jpg" alt="FC 25" />
            <h3>FC 25</h3>
            <p>El futbol com mai abans.</p>
            <p><strong>Preu:</strong> 69,99 €</p>
          </div>
          <div className="product-card">
            <img src="/MinecraftLegends.jpg" alt="Minecraft Legends" />
            <h3>Minecraft Legends</h3>
            <p>Una nova forma d'experimentar Minecraft.</p>
            <p><strong>Preu:</strong> 39,99 €</p>
          </div>
          <div className="product-card">
            <img src="/TheWitcher.jpg" alt="The Witcher" />
            <h3>The Witcher</h3>
            <p>Un món ric amb monstres i decisions morals.</p>
            <p><strong>Preu:</strong> 19,99 €</p>
          </div>
          <div className="product-card">
            <img src="/Wolfestein.jpg" alt="Wolfenstein" />
            <h3>Wolfenstein</h3>
            <p>Acció contra un règim alternatiu fosc i violent.</p>
            <p><strong>Preu:</strong> 29,99 €</p>
          </div>
        </div>

        <h2 className="carousel-title">Jocs en Oferta</h2>
        <div className="product-carousel">
          <div className="product-card">
            <img src="/Hades.jpg" alt="Hades" />
            <h3>Hades</h3>
            <p>Escapa de l'infern en aquest roguelike premiat.</p>
            <p><strong>Preu:</strong> 2̶4̶,̶9̶9̶  14,99 €</p>
          </div>
          <div className="product-card">
            <img src="/HollowKnight.jpg" alt="Hollow Knight" />
            <h3>Hollow Knight</h3>
            <p>Un món subterrani bell i perillós t'espera.</p>
            <p><strong>Preu:</strong> 2̶4̶,̶9̶9̶   9,99 €</p>
          </div>
          <div className="product-card">
            <img src="/minecraft.jpg" alt="Minecraft" />
            <h3>Minecraft</h3>
            <p>Crea, explora i sobreviu en infinites possibilitats.</p>
            <p><strong>Preu:</strong> 1̶9̶,̶9̶9̶ € 12,99€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
