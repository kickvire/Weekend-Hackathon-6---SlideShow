import React, { useState } from "react";
import "../styles/App.css";
export default function App(props) {
  const [index, setIndex] = useState(0);
  const { slides } = props;
  const n = slides.length;
  const handleNext = (index) => {
    if (index === n - 1) {
      return;
    }
    setIndex((prev) => prev + 1);
  };
  const handleprev = (index) => {
    if (index === 0) {
      return;
    }
    setIndex((prev) => prev - 1);
  };
  const handleReset = () => {
    if (index === 0) {
      return;
    }
    let first = 0;
    setIndex(first);
  };

  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      <button data-testid="button-prev" onClick={() => handleprev(index)}>
        Prev
      </button>
      <button data-testid="button-next" onClick={() => handleNext(index)}>
        Next
      </button>
      <button data-testid="button-restart" onClick={() => handleReset(index)}>
        Restart
      </button>
    </>
  );
}
