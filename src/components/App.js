import React, { useState } from "react";
import "../styles/App.css";
export default function App(props) {
  const [index, setIndex] = useState(0);
  const { slides } = props;
  const n = slides.length;
  const handleNext = (index) => {
    setIndex((prev) => prev + 1);
  };
  const handleprev = (index) => {
    setIndex((prev) => prev - 1);
  };
  const handleReset = () => {
    let first = 0;
    setIndex(first);
  };

  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      <button
        disabled={index === 0 ? true : false}
        data-testid="button-prev"
        onClick={() => handleprev(index)}
      >
        Prev
      </button>
      <button
        disabled={index === n - 1 ? true : false}
        data-testid="button-next"
        onClick={() => handleNext(index)}
      >
        Next
      </button>
      <button
        disabled={index === 0 ? true : false}
        data-testid="button-restart"
        onClick={() => handleReset(index)}
      >
        Restart
      </button>
    </>
  );
}
