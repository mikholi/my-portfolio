import React from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import myPhoto from "./assets/my_photo.jpg"; // Ensure the image is in src/assets/

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

      {/* Main Content Container */}
      <div className="content-container">
        {/* Home Section */}
        <section id="home" className="section fade-section">
          <h1><span className="highlight">Hi, I'm Mikko Keränen.</span></h1>
          <p>Aspiring Web Developer | Frontend Enthusiast</p>
        </section>

        {/* About Me Section */}
        <section id="about" className="section about-section fade-section">
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
        <section id="socials" className="section fade-section">
          <h2>Connect with Me</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/mikko-ker%C3%A4nen-3a05952aa/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
