import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollTopShow, setScrollTopShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop; //
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
    setScrollTopShow(!scrollTopShow);

    console.log(winScroll, height, scrolled);
  };

  useEffect(() => {
    console.log("inner useEffect");
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {scrollTopShow && (
        <section className="progressBar-container">
          <section className="progressBar__main">
            <section
              className="progressBar__relative"
              style={{ width: `${scrollTop}%` }}
            ></section>
          </section>
        </section>
      )}
    </>
  );
};

export default ScrollIndicator;
