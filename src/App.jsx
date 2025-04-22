import React from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import myPhoto from "./assets/my_photo.jpg"; // Fixed import

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#socials">Socials</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <h1>Hello, my name is Mikko Keränen.</h1>
        <p>Welcome to my portfolio!</p>
      </section>

      <section id="about" className="section about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
      <p>
        I'm currently learning web development, focusing on React, JavaScript, HTML, and CSS.
        Passionate about building clean, user-friendly websites.
      </p>
        </div>
          <div className="about-image">
            <img src={myPhoto} alt="My portrait" className="profile-pic" />
        </div>
      </div>
    </section>


      {/* Socials Section */}
      <section id="socials" className="section">
        <h2>Connect with Me</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mikko-ker%C3%A4nen-3a05952aa/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
