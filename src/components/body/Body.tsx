import "./Body.css";
import Background from "./Background";
import Home from '../home/Home';
import Flashcards from '../flashcards/Flashcards';
import History from '../cocktailStories/History';
import Quiz from '../quiz/Quiz';
import {useSelector} from 'react-redux';
import {PageState} from '../../store/pagesReducer';

function Body(props: any) {
  const isActive = useSelector<PageState>((state) => state.page);
  const drinks = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
  console.log(drinks);
  return (
    <div className={"Body"}>
      <Background />

      {props.children}
     {isActive === 'Home' && <Home />}
     {isActive === 'Flashcards' && <Flashcards/>}
     {isActive === 'History' && <History drinks={drinks}/>}
     {isActive === 'Quiz' && <Quiz drinks={drinks}/>}
    </div>
  );
}

export default Body;
