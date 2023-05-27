import { SliderData } from "./imagies";
import { name, containerstyle } from "./getclass";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect } from "react";

const ImageCarousel = ({ slides }) => {
    useEffect(() => {
      const carousel = document.querySelector('.carousel');
      const scrollStep = 200;
  
      const scrollLeft = () => {
        carousel.scrollBy({
          left: -scrollStep,
          behavior: 'smooth',
        });
      };
  
      const scrollRight = () => {
        carousel.scrollBy({
          left: scrollStep,
          behavior: 'smooth',
        });
      };

      const handleScroll = () => {
        const scrollPosition = carousel.scrollLeft;
        const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
  
        if (scrollPosition >= maxScroll) {
          carousel.removeEventListener('scroll', handleScroll);
        }
      };
  
      const leftArrow = document.querySelector('.arrow-icon.left');
      const rightArrow = document.querySelector('.arrow-icon.right');
  
      leftArrow.addEventListener('click', scrollLeft);
      rightArrow.addEventListener('click', scrollRight);
  
      return () => {
        leftArrow.removeEventListener('click', scrollLeft);
        rightArrow.removeEventListener('click', scrollRight);
      };
    }, []);
  
    return (
      <div className="carousel-container">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div key={index} className="carousel-item">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <div className="arrow-icon left">
            <ArrowBackIcon />
          </div>
          <div className="arrow-icon right">
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    );
  };
  export default function Photos() {
    return (
      <div className={name} style={containerstyle}>
        <ImageCarousel slides={SliderData} />
      </div>
    );
  }