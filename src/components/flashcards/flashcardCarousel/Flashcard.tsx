import { useState, KeyboardEvent } from "react";
import "./Flashcard.css";

interface Props {
  drink: {
    Name: string;
    Ingredients: string[];
    Recipe: string[];
    History: string;
  };
}

function Flashcard({ drink }: Props) {
  const [flip, setFlip] = useState(false);
  let Name = drink.Name;
  if (Name === "Martini Gin/Vodka 6:1") {
    Name = "Martini";
  }

  document.getElementById('fcCard0')?.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
      case 37:
        console.log("left");
        break;
      case 38:
        console.log("up");
        break;
      case 39:
        console.log("rigth");
        break;
      case 40:
        console.log("down");
        break;
    }
  });
  const source = require(`../../../images/${Name}.png`);
  return (
    <div
      className={`flashcard ${flip ? "frontToBack" : "backToFront"}`}
      onClick={() => {
        setFlip(!flip);
      }}
      onKeyUp={(e) => {
        console.log("hello");
      }}
    >
      <div className={"fcFront"}>
        <img src={source} alt={Name} />
      </div>
      <div className={"fcBack"}></div>
    </div>
  );
}

export default Flashcard;
