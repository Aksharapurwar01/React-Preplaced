import React, { useState } from "react";
import questions from "./data";

export default function Accordion() {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [multiple, setMultiple] = useState(false);

  const handleOpen = (id) => {
    // setShow(true);
    if (multiple) {
      if (openAccordions.includes(id)) {
        setOpenAccordions(openAccordions.filter((idd) => idd !== id));
      } else {
        setOpenAccordions([...openAccordions, id]);
      }
    } else {
      setOpenAccordions(openAccordions.includes(id) ? [] : [id]);
    }
  };

  return (
    <>
      <h1>Accordion</h1>
      <p>
        Is multiple open accordion allowed?
        <input
          type="checkbox"
          checked={multiple}
          onChange={(e) => setMultiple(e.target.checked)}
        />
      </p>
      {questions.map((ques, index) => {
        const isOpen = openAccordions.includes(ques.id);
        return (
          <>
            <div key={ques.id}>
              {ques.title}
              <button onClick={() => handleOpen(ques.id)}>
                {" "}
                {isOpen ? "+" : "-"}
              </button>
            </div>

            <p style={{ backgroundColor: "beige" }}>{isOpen && ques.info}</p>
          </>
        );
      })}
    </>
  );
}
