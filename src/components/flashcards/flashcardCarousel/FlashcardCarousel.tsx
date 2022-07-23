import "./FlashcardCarousel.css";
import CarouselOptions from "./CarouselOptions";
import { useSelector } from "react-redux";
import { PageState } from "../../../store/pagesReducer";
import Flashcard from "./Flashcard";
import { useState } from "react";
function FlashcardCarousel() {
  const [card, setCard] = useState(0);
  let items: any = [];
  const drinks = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
  drinks.map((drink, index) => {
    return items.push(
      <div key={index} className={"fcCard"} id={`fcCard${index}`}>
        <Flashcard drink={drink} />
      </div>
    );
  });
  function nextCard() {
    const currentElement = document.getElementById(`fcCard${card}`);
    const nextElement = document.getElementById(`fcCard${card + 1}`);

    nextElement?.classList.add("next");
    currentElement?.classList.add('back');
    if (card === 18) {
      setCard(0);
    } else {
      setCard((prevstate) => {
        return prevstate + 1;
      });
    }
  }
  function lastCard() {
    if (card === 0) {
      setCard(drinks.length - 1);
    } else {
      setCard((prevstate) => {
        return prevstate - 1;
      });
    }
  }
  return (
    <div className={"fcCarousel"}>
      <div className={"cardHolder"}>
        {items}
      </div>
      <CarouselOptions next={nextCard} back={lastCard} />
    </div>
  );
}

export default FlashcardCarousel;
