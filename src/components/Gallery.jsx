import { useEffect, useState } from "react";
import "../styles/Gallery.css";

import graduation1 from "../assets/images/graduation-1.jpg";
import graduation2 from "../assets/images/graduation-2.jpg";
import graduation3 from "../assets/images/graduation-3.jpg";
import graduation4 from "../assets/images/graduation-4.jpg";
import graduation5 from "../assets/images/graduation-5.jpg";

import competition1 from "../assets/images/competition-1.jpg";
import competition2 from "../assets/images/competition-2.jpg";
import competition3 from "../assets/images/competition-3.jpg";
import competition4 from "../assets/images/competition-4.jpg";
import competition5 from "../assets/images/competition-5.jpg";

import teaching1 from "../assets/images/teaching-1.jpg";

import healthcareAI from "../assets/images/health.png";
import fireDetection from "../assets/images/fire.png";
import solyQuiz from "../assets/images/soly.png";

import certificate1 from "../assets/images/certificate-1.PNG";
import certificate2 from "../assets/images/certificate-2.jpg";
import certificate3 from "../assets/images/certificate-3.jpg";
import certificate4 from "../assets/images/certificate_4.jpg";


import professional1 from "../assets/images/professional-1.jpg";
import professional2 from "../assets/images/professional-2.jpg";
import professional3 from "../assets/images/professional-3.jpg";
import professional4 from "../assets/images/professional-4.jpg";

import flyer1 from "../assets/images/flyer-1.jpg";
import flyer2 from "../assets/images/flyer-2.jpg";
import flyer3 from "../assets/images/flyer-3.png";
import flyer4 from "../assets/images/flyer-4.jpg";
import flyer5 from "../assets/images/flyer-5.jpg";
import flyer6 from "../assets/images/flyer-6.jpg";
import flyer7 from "../assets/images/flyer-7.jpg";
import flyer8 from "../assets/images/flyer-8.jpg";

import defense1 from "../assets/images/defense-1.jpg";
import defense2 from "../assets/images/defense-2.jpg";

import Business1 from "../assets/images/Business-1.jpg";
import Business2 from "../assets/images/Business-2.png";



function Gallery() {
  const galleryData = [
    {
      title: "Graduation",
      images: [
        graduation1,
        graduation2,
        graduation3,
        graduation4,
        graduation5,
      ],
    },
    {
      title: "Teaching",
      images: [
        teaching1,
      ],
    },
    {
      title: "Competition",
      images: [
        competition1,
        competition2,
        competition3,
        competition4,
        competition5,
      ],
    },
    {
      title: "Projects",
      images: [
        fireDetection,
        solyQuiz,
        healthcareAI,
      ],
    },
    {
      title: "AWARD & CERTIFICATIONS",
      images: [
        certificate4,
        certificate1,
        certificate2,
        certificate3,
        competition4,
      ],
    },
    {
      title: "Flyers & Designs",
      images: [
        flyer1,
        flyer2,
        flyer3,
        flyer4,
        flyer5,
        flyer6,
        flyer7,
        flyer8,
      ],
    },

    {
      title: "DEFENSE",
      images: [
        defense1,
        defense2,
      ],
    },

    {
    title: "Entrepreneur",
      images: [
        Business1,
        Business2,
        
      ],
    },

    {
    title: "Professional",
      images: [
        professional1,
        professional2,
        professional3,
        professional4,
      ],
    },

  ];

  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Open gallery
  const openGallery = (galleryIndex) => {
    setSelectedGallery(galleryIndex);
    setCurrentImage(0);
    setIsPaused(false);
  };

  // Close gallery
  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImage(0);
  };

  // Next image
  const nextImage = () => {
    if (selectedGallery === null) return;

    const images = galleryData[selectedGallery].images;

    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Previous image
  const previousImage = () => {
    if (selectedGallery === null) return;

    const images = galleryData[selectedGallery].images;

    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  // Automatic slideshow
  useEffect(() => {
    if (selectedGallery === null || isPaused) return;

    const images = galleryData[selectedGallery].images;

    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [selectedGallery, isPaused]);

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <section id="gallery">

      <div className="gallery-container">

        <h2 className="section-title">
          Gallery
        </h2>

        <p className="gallery-text">
          A glimpse into my journey, achievements, professional experiences,
          projects and memorable moments.
        </p>

        <div className="gallery-grid">

          {galleryData.map((gallery, index) => (
            <div
              className="gallery-card"
              key={gallery.title}
              onClick={() => openGallery(index)}
            >

              <img
                src={gallery.images[0]}
                alt={gallery.title}
                className="gallery-card-image"
              />

              <div className="gallery-card-overlay">
                <h3>{gallery.title}</h3>
                <span>Click to view</span>
              </div>

            </div>
          ))}

        </div>

      </div>


      {/* IMAGE CAROUSEL / LIGHTBOX */}

      {selectedGallery !== null && (
        <div
          className="gallery-modal"
          onClick={closeGallery}
        >

          <div
            className="gallery-viewer"
            onClick={(event) => event.stopPropagation()}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* Close button */}
            <button
              className="gallery-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              ×
            </button>


            {/* Gallery title */}
            <h3 className="gallery-viewer-title">
              {galleryData[selectedGallery].title}
            </h3>


            {/* Main image */}
            <div className="gallery-image-wrapper">

              <img
                src={
                  galleryData[selectedGallery].images[currentImage]
                }
                alt={`${galleryData[selectedGallery].title} ${currentImage + 1}`}
                className="gallery-main-image"
              />

            </div>


            {/* Previous button */}
            <button
              className="gallery-arrow gallery-arrow-left"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ‹
            </button>


            {/* Next button */}
            <button
              className="gallery-arrow gallery-arrow-right"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>


            {/* Dots */}
            <div className="gallery-dots">

              {galleryData[selectedGallery].images.map(
                (_, index) => (
                  <button
                    key={index}
                    className={`gallery-dot ${
                      currentImage === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`View image ${index + 1}`}
                  />
                )
              )}

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Gallery;
