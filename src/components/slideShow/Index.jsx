import React from "react";
import Review from "./Review";

import "./index.css";

const Index = () => {
  return (
    <section className="reviews-container">
      <section className="reviews__title">
        <h2>Colleagues' opinion</h2>
      </section>
      <section className="reviews__items">
        <Review />
      </section>
    </section>
  );
};

export default Index;
