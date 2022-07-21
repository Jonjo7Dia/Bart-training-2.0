import "./Body.css";
import Background from "./Background";
import Home from '../home/Home';
import Flashcards from '../flashcards/Flashcards';
import {useSelector} from 'react-redux';
import {PageState} from '../../store/pagesReducer';
function Body(props: any) {
  const isActive = useSelector<PageState>((state) => state.page);

  return (
    <div className={"Body"}>
      <Background />

      {props.children}
     {isActive === 'Home' && <Home />}
     {isActive === 'Flashcards' && <Flashcards/>}
    </div>
  );
}

export default Body;
