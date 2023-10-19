import { useState } from "react";
import data from "./data";

import "./index.css";

function Index() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [error, setError] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  const handleOnChange = (e, count) => {
    const countInt = Number(count);
    console.log(typeof count);
    if (countInt <= -1) {
      setError("The Type Count is Integer, Try Again");
    }

    if (countInt >= 0) {
      setError("");
    }

    setCount(countInt);
  };

  return (
    <section className="lorem-container">
      <h2 className="lorem__header">Lorem Ipsum</h2>
      <form action="lorem__form" onSubmit={handleOnSubmit}>
        <section className="lorem__input-fields mt-2">
          <input
            type="number"
            name="number"
            value={count}
            onChange={(e) => handleOnChange(e, e.target.value)}
            className="lorem__input input-fields"
          />
          <button
            className="lorem__button input-fields ml-2"
            disabled={count <= 0 ? true : false}
          >
            Build
          </button>
        </section>
      </form>
      <section className="lorem__error text-sm mt-2">{error}</section>
      <section className="lorem__paragraph text-sm mt-2">
        {text.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}
      </section>
    </section>
  );
}

export default Index;
