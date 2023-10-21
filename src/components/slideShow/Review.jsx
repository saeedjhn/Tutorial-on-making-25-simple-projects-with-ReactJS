import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { chevronRight, chevronLeft, search } from "react-icons-kit/feather/";
import img from "./download.png";
import data from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text } = data[index];
  const dataLength = data.length;

  const checkIndex = (number) => {
    if (number > dataLength - 1) {
      return 0;
    }
    if (number < 0) {
      return dataLength - 1;
    }
    return number;
  };

  const handleNextSlide = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkIndex(newIndex);
    });
  };
  const handlePrevSlide = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const handleRandomSlide = () => {
    let random = Math.floor(Math.random() * data.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkIndex(random));
  };
  return (
    <section className="review">
      <section className="review__img">
        <img src={img} width="50" alt="" />
      </section>
      <section className="review__author mt-2">{name}</section>
      <section className="review__job mt-2">{job}</section>
      <section className="review__info mt-2">{text}</section>
      <section className="review__footer">
        <section className="review__button">
          <button onClick={handlePrevSlide}>
            <Icon icon={chevronLeft} />
          </button>
          <button onClick={handleNextSlide}>
            <Icon icon={chevronRight} />
          </button>
        </section>
        <section onClick={handleRandomSlide} className="review__random">
          <Icon icon={search} />
        </section>
      </section>
    </section>
  );
};

export default Review;
