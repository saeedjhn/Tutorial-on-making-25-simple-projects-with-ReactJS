import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { plusCircle, minusCircle } from "react-icons-kit/feather/";

function Question({ title, info }) {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleOnclick = () => setShowParagraph(!showParagraph);
  return (
    <section className="question">
      <header className="question__header">
        <h6>{title}</h6>
        {/* if onClick={setShowParagraph(!showParagraph)}, 
        resault: 
        Too many re-renders. React limits the number of renders to prevent an infinite loop.
        solution:
        onClick={() => setShowParagraph(!showParagraph)} */}
        <button className="question__button" onClick={handleOnclick}>
          {showParagraph ? (
            <Icon icon={minusCircle} size={34} />
          ) : (
            <Icon icon={plusCircle} size={34} />
          )}
        </button>
      </header>
      {showParagraph && (
        <section className="question__paragraph">{info}</section>
      )}
    </section>
  );
}

export default Question;
