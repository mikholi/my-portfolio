import React from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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

      {/* About Me Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am currently a student in the Oulu University of Applied Sciences, stydying
          Bachelor of Business Administration, Business Information Technology.
        </p>
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
