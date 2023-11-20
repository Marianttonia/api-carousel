import React, { useState } from 'react';
import styles from './carousel.module.css' 

const Carousel = ({ movies, imgPath, genre }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  return (
    <div className={styles.carousel}>
      <h3>{genre}</h3>
      <div className={styles.carousel-container}>
        <div className={styles.carousel-content} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={showPrevious} className="carousel-button prev">&#9665;</button>
      <button onClick={showNext} className="carousel-button next">&#9655;</button>
    </div>
  );
};

export default Carousel;
