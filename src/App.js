import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './home';
import About from './About';
import Store from './Store';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './home.css'; // Make sure this includes the .home-background style

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-background">
              <h1>Home Page</h1>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
