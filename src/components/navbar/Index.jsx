import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.png";
import { links, btnIcon } from "./data";

import "./index.css";

const Index = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const getAttributes = linksRef.current.getBoundingClientRect();
    if (showLinks) {
      linksContainer.current.style.height = `${getAttributes.height}px`;
    } else {
      linksContainer.current.style.height = "0";
    }
  }, [showLinks]);

  const handleSetShowLinks = (e) => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <nav className="navigation">
        <section className="navigation__toggle">
          <button className="navigation__menu" onClick={handleSetShowLinks}>
            {btnIcon}
          </button>
        </section>
        <section className="navigation__logo">
          <img className="navigation__img" src={logo} width="90" alt="" />
        </section>
      </nav>

      <section className="navigation__links" ref={linksContainer}>
        <ul className="navigation__list" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li className="navigation__item" key={id}>
                <a className="navigation-links" href={url}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Index;
