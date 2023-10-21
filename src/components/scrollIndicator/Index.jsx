import React from "react";
import data from "./data";
import "./index.css";
import ScrollIndicator from "./ScrollIndicator";

const Index = () => {
  return (
    <>
      <header className="header">
        <section className="header__links">
          <ul className="header__list">
            <li className="header__item">Home</li>
            <li className="header__item">Category</li>
            <li className="header__item">About</li>
            <li className="header__item">Content-Us</li>
          </ul>
        </section>
      </header>
      <ScrollIndicator />
      
      <section className="content-container">
        {data.map((content, index) => {
          return (
            <p key={index} className="content__paragraph">
              {content}
            </p>
          );
        })}
      </section>
    </>
  );
};

export default Index;
