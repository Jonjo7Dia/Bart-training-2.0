import "./Body.css";
import Background from "./Background";
import Home from '../home/Home';
import Flashcards from '../flashcards/Flashcards';
import History from '../cocktailStories/History';
import Quiz from '../quiz/Quiz';
import {useSelector} from 'react-redux';
import {PageState} from '../../store/pagesReducer';
import { useState } from "react";
import { useDispatch} from "react-redux";


function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function Body(props: any) {
  const isActive = useSelector<PageState>((state) => state.page);
  const drinks = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
  const dispatch = useDispatch();

  const setPage = (page: string) => {
      dispatch({ type: "CHANGE_PAGE", payload: page });
    };
  const [shuffledDrinks, setShuffledDrinks] = useState(shuffleArray([...drinks]));
  function goPage(){
    setPage('Quiz');
  }
  function reset(){
    setShuffledDrinks(shuffleArray(shuffledDrinks));
    setPage('History');
    setTimeout(goPage, 0.5);
  }
  return (
    <div className={"Body"}>
      <Background />

      {props.children}
     {isActive === 'Home' && <Home />}
     {isActive === 'Flashcards' && <Flashcards/>}
     {isActive === 'History' && <History drinks={drinks}/>}
     {isActive === 'Quiz' && <Quiz drinks={shuffledDrinks} reset={reset}/>}
    </div>
  );
}

export default Body;
