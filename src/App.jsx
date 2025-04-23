import React, { useState } from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import myPhoto from "./assets/my_photo.jpg"; // Ensure the image is in src/assets/

const App = () => {
  // State for controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <p>Current student at the Oulu University of Applied Sciences.</p>
        </section>

        {/* About Me Section */}
        <section id="about" className="section about-section fade-section">
          <div className="about-container">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Right now I'm studying my second year of Information Technology. I am very interested in 
                web development and programming. Before the school I had little experience in HTML and CSS. I made 
                my first website when I was 12 years old. I remember reading <b>"HTML for Dummies"</b> and learned making 
                websites with it. 
              </p>
              <button onClick={openModal} className="btn-show-more">Education and workhistory</button>
              <p>
                Right now I'm very interested programming with React and React Native. I wish that someday I could get
                a job as a web developer. I look forward to next year, when we have internships. 
              </p>
            </div>
            <div className="about-image">
              <img src={myPhoto} alt="My portrait" className="profile-pic" />
            </div>
          </div>
        </section>

        {/* Socials Section */}
        <section id="socials" className="section fade-section">
          <h2>My Socials</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/mikko-ker%C3%A4nen-3a05952aa/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/mikholi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </section>
      </div>

      {/* Modal for Additional Information */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Work History & Education</h3>
            <p>
              Here will come all my work and education.
            </p>
            <button onClick={closeModal} className="btn-close-modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
