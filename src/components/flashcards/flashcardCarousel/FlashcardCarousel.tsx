import "./FlashcardCarousel.css";
import CarouselOptions from "./CarouselOptions";
import { useSelector } from "react-redux";
import { PageState } from "../../../store/pagesReducer";

function FlashcardCarousel() {

    const drinks= useSelector<PageState, PageState["drinks"]>(state=>state.drinks);
  return (
    <div className={"fcCarousel"}>
      <div className={"cardHolder"}>
        
      </div>
      <CarouselOptions />
    </div>
  );
}

export default FlashcardCarousel;
