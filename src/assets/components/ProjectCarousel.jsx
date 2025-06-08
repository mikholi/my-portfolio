import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProjectCarousel.module.css";

const projects = [
  {
    id: 1,
    title: "Exercise App",
    description: "Simple exercise app built using React and Node.js. It allows user to input their exercises and store them in the database.",
    videoUrl: "https://youtube.com/embed/s4QFAfFRAU8",
    repoUrl: "https://github.com/mikholi/exercise-app",
  },
  {
    id: 2,
    title: "Map Application",
    description: "Map Application that displays various locations on a map and enables users to review them. Uses Firebase for data storage.",
    videoUrl: "https://youtube.com/embed/0l3UE3ctBWU",
    repoUrl: "https://github.com/mikholi/map-app",
  },
  // Add more as needed
];

const ProjectsCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Force Slick to re-render and fix layout issues
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <section id="projects" className={`${styles.section} section`}>
      <h2 className={styles.heading}>My Projects</h2>

      {/* WRAPPER: Ensures layout does not overflow and centers carousel */}
      <div style={{ maxWidth: "900px", margin: "0 auto", width: "90%", justifyContent: "center" }}>
        <Slider ref={sliderRef} {...settings}>
          {projects.map(({ id, title, description, videoUrl, repoUrl }) => (
            <div key={id} className={styles.projectCard}>
               <h3>{title}</h3>

              <div className={styles.videoWrapper}>
                <iframe
                  src={videoUrl}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p>{description}</p>

              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewButton}
              >
                View Code
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
