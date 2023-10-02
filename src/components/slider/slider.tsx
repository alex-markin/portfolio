import React, { useState } from 'react';
import styles from './slider.module.css';


type SliderProps = {
  images: string[];
};

export default function Slider({ images }: SliderProps) {

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = images.length;
  const src = images[currentSlide];

  const handleSlideChange = (direction: string) => {
    if (direction === 'left') {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? length - 1 : prevSlide - 1));
    } else {
      setCurrentSlide((prevSlide) => (prevSlide === length - 1 ? 0 : prevSlide + 1));
    }
  };


  const leftKey = 'ArrowLeft';
  const rightKey = 'ArrowRight';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === leftKey) {
      handleSlideChange('left');
    }
    if (e.key === rightKey) {
      handleSlideChange('right');
    }
  };

  return (
    <div className={styles.sliderContainer} onKeyDown={handleKeyDown}>
      <img className={styles.sliderImg} src={src} alt={`project's screenshot`} />
      <div className={styles.sliderArrows}>
        <button className={styles.arrowLeft} onClick={() => handleSlideChange('left')} ></button>
        <button className={styles.arrowRight} onClick={() => handleSlideChange('right')}></button>
      </div>
    </div>
  );
}



