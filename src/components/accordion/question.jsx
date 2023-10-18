import React, { useState } from "react";

function Question({ title, info }) {
  const [showParagraph, setShowParagraph] = useState(false);
  return (
    <section className="question">
      <header className="question__header">
        <h6>{title}</h6>
        {/* if onClick={setShowParagraph(!showParagraph)}, 
        resault: 
        Too many re-renders. React limits the number of renders to prevent an infinite loop.
        solution:
        onClick={() => setShowParagraph(!showParagraph)} */}
        <button type="button" onClick={() => setShowParagraph(!showParagraph)}>
          button
        </button>
      </header>
      {showParagraph && (
        <section className="question__paragraph">{info}</section>
      )}
    </section>
  );
}

export default Question;
