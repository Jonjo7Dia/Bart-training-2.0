import "./FlashcardCarousel.css";
import CarouselOptions from "./CarouselOptions";
import { useSelector } from "react-redux";
import { PageState } from "../../../store/pagesReducer";
import Flashcard from "./Flashcard";
import { useState } from "react";
function FlashcardCarousel() {
  const [card, setCard] = useState(0);
  const [showFront, setShowFront] = useState(false);
  let items: any = [];

  const drinks = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
  drinks.map((drink, index) => {
    return items.push(
      <div key={index} className={"fcCard"} id={`fcCard${index}`}>
        <Flashcard
          drink={drink}
          showFront={showFront}
          flip={flip}
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
    setShowFront(false);

  }
  document.onkeydown = checkKey;

  function checkKey(e:any) {
  
      e = e || window.event;
  
      if (e.keyCode == '38') {
        flip();

      }
      else if (e.keyCode == '40') {
        flip();
      }
      else if (e.keyCode == '37') {
        setShowFront(false);

        lastCard();

      }
      else if (e.keyCode == '39') {
        setShowFront(false);

        nextCard();

      }
  
  }
  function flip(){
    setShowFront(!showFront);
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
    setShowFront(false);
  }
 
  return (
    <div className={"fcCarousel"}>
      <div className={"cardHolder"}>{items}</div>
      <CarouselOptions
        next={nextCard}
        back={lastCard}
        current={card}

      />
    </div>
  );
}

export default FlashcardCarousel;
