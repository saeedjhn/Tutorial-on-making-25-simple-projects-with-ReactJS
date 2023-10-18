import { useState } from "react";
import Question from "./question";
import accordionData from "./data";

import "./index.css";

function Index() {
  return (
    <section className="questions-wrapper">
      <h3 className="questions-wrapper__header">You Have A Question?</h3>
      <section className="questions-wrapper__info">
        {accordionData.map((question, index) => {
          return <Question key={index} {...question} />;
        })}
      </section>
    </section>
  );
}

// This function for Changing information(questions) by API
// function Index() {
//   const [questions, setQuestions] = useState(accordionData);
//   return (
//     <section className="questions-wrapper">
//       <h3 className="questions-wrapper__header">You Have A Question?</h3>
//       <section className="questions-wrapper__info">
//         {questions.map((question, index) => {
//           return <Question key={index} {...question} />;
//         })}
//       </section>
//     </section>
//   );
// }
export default Index;
