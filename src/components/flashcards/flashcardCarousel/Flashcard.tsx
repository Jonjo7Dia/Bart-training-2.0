import { useState } from "react";
import "./Flashcard.css";
import FlashcardBack from './FlashcardBack';


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
      <div className={"fcBack"}>
        <FlashcardBack drinkInfo={drink}/>
      </div>
    </div>
  );
}

export default Flashcard;
