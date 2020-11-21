import React, { useState } from "react";
import "../styles/App.css";
import slides from "./../data";
import Slides from "./Slides";
export default function App() {
  const [index, setIndex] = useState(0);

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
    <div className="App">
      <Slides
        index={index}
        onRestart={handleReset}
        onPrev={handleprev}
        onNext={handleNext}
        text={slides[index].text}
        title={slides[index].title}
      />
    </div>
  );
}
