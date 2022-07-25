import "./FlashcardCarousel.css";
import CarouselOptions from "./CarouselOptions";
import { useSelector } from "react-redux";
import { PageState } from "../../../store/pagesReducer";
import Flashcard from "./Flashcard";
import { useState } from "react";
function FlashcardCarousel() {
  const [card, setCard] = useState(0);
  const [showFront, setShowFront] = useState(true);
  const [clicked, setClicked] = useState(false);
  let items: any = [];

  const drinks = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
  drinks.map((drink, index) => {
    return items.push(
      <div key={index} className={"fcCard"} id={`fcCard${index}`}>
        <Flashcard
          drink={drink}
          cardNumber={card}
          frontShower={showFront}
          flip={flip}
          clicked={setIsClicked}
        />
      </div>
    );
  });
  function nextCard() {
    const currentElement = document.getElementById(`fcCard${card}`);
    currentElement?.classList.remove("back", "next", "backRight", "nextRight");
    currentElement?.classList.add("back");
    if (card === 18) {
      const nextElement = document.getElementById(`fcCard0`);
      nextElement?.classList.remove("back", "next", "backRight", "nextRight");
      nextElement?.classList.add("next");
      setCard(0);
    } else {
      const nextElement = document.getElementById(`fcCard${card + 1}`);
      nextElement?.classList.remove("back", "next", "backRight", "nextRight");
      nextElement?.classList.add("next");
      setCard((prevstate) => {
        return prevstate + 1;
      });
    }
  }

  function lastCard() {
    const currentElement = document.getElementById(`fcCard${card}`);
    currentElement?.classList.remove("back", "next", "backRight", "nextRight");

    currentElement?.classList.add("backRight");
    if (card === 0) {
      const nextElement = document.getElementById(`fcCard18`);
      nextElement?.classList.remove("back", "next", "backRight", "nextRight");
      nextElement?.classList.add("nextRight");
      setCard(18);
    } else {
      const nextElement = document.getElementById(`fcCard${card - 1}`);
      nextElement?.classList.remove("back", "next", "backRight", "nextRight");
      nextElement?.classList.add("nextRight");

      setCard((prevstate) => {
        return prevstate - 1;
      });
    }
  }
  function setIsClicked() {
    setClicked(true);
  }
console.log(clicked);
  function flip() {
    if (clicked) {
      setShowFront(!showFront);
      setClicked(false);
    }
  }
  return (
    <div className={"fcCarousel"}>
      <div className={"cardHolder"}>{items}</div>
      <CarouselOptions
        next={nextCard}
        back={lastCard}
        current={card}
        flip={flip}
      />
    </div>
  );
}

export default FlashcardCarousel;
