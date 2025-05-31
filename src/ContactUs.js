import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contactus-background">
      <div className="contactus-container">
        
        <div className="socials-section">
          <h3>Les nostres xarxes</h3>
          <div className="social-icons">
            <a href="https://www.Linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/Linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/Instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.Youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/Youtube.png" alt="YouTube" />
            </a>
            <a href="https://www.Twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="/Twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/Facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>

        <h1 className="contactus-title">Contacta amb nosaltres</h1>
        <p className="contactus-subtitle">Estem aquí per ajudar-te! Omple el formulari i et respondrem tan aviat com puguem.</p>



        <form className="contactus-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Nom complet</label>
          <input type="text" id="name" name="name" placeholder="El teu nom" required />

          <label htmlFor="email">Correu electrònic</label>
          <input type="email" id="email" name="email" placeholder="exemple@correu.com" required />

          <label htmlFor="message">Missatge</label>
          <textarea id="message" name="message" rows="6" placeholder="Escriu aquí el teu missatge..." required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
