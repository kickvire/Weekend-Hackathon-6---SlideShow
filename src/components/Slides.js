import React from "react";

export default function Slides(props) {
  const { title, text, onNext, onPrev, index, onRestart } = props;

  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="button-prev">{text}</p>
      <button data-testid="button-prev" onClick={() => onPrev(index)}>
        Prev
      </button>
      <button data-testid="button-next" onClick={() => onNext(index)}>
        Next
      </button>
      <button data-testid="button-restart" onClick={() => onRestart(index)}>
        Restart
      </button>
    </>
  );
}
