import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { slides } from "./slides";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { Zoom } from "react-reveal";
import Jump from "react-reveal/Jump";
import Link from "next/link";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlider = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlider, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlider = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlider = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        {slides.map((slide, index) => (
          <div className={styles.carouselSlide} key={index}>
            {index === current && (
              <div className={styles.carouselSlider}>
                <Image
                  src={slide?.imageUrl}
                  alt={slide?.title}
                  className={styles.carouselImage}
                />
                <div className={styles.carouselContent}>
                  <Zoom top>
                    <h1>{slide?.title}</h1>
                  </Zoom>
                  <Jump>
                    <p>{slide?.content}</p>
                    <div className="btnContainer">
                      <Link href={slide?.docs} className="btn btnYellow">
                        Learn More
                      </Link>
                    </div>
                  </Jump>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className={styles.carouselControls}>
          <span onClick={prevSlider}>
            <AiOutlineDoubleLeft /> Previous
          </span>
          <span onClick={nextSlider}>
            Next <AiOutlineDoubleRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;