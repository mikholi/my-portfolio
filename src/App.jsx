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
          <h1><span className="highlight">Hello, I'm Mikko Keränen!</span></h1>
          <p>My studies in Oulu University of Applied Sciences began in autumn 2023. In the first year we learned basics of Python, SQL,  HTML and CSS. 
            HTML was familiar to me from before, I did my first website when I was 12 years old, or something like that. First year was quite tough, there were many
            new things to learn which I never had heard of before. We also had our first project, which was quite interesting.
            But in the end, I learned a lot and I am looked forward to this year.

          </p>
        </section>

        {/* About Me Section */}
        <section id="about" className="section about-section fade-section">
          <div className="about-container">
            <div className="about-text">
              <h2>Where I am now?</h2>
              <p>
                Right now we are nearing the end of the second year. So far this year has been lots of work. Fun too. 
                We've studied React and React Native which were both new to me and they have been very interesting. I already 
                planned making my own projects with both of them when I have time. Now the school takes most of my time. Hopefully at the
                summer I have some spare time even though  I have a summer job.
              </p>
              <h2>Where I am going?</h2>
              <p>
                Right now I am still  thinking about the future, what I might to do after I graduate. I'm still think that web design and development
                is something what I would love to do most. Still I have to keep my mind open for other options too. I'm looking forward for next year,
                when we will have more projects and internships. I hope that I will find a job that I will like.
              </p>
              <button onClick={openModal} className="btn-show-more">Education and workhistory</button>
              
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
