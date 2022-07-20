import "./MobileNavItems.css";
import { useDispatch } from "react-redux";
import { PageState } from "../../store/pagesReducer";
function MobileNavItems() {
    const dispatch  = useDispatch();
    const setPage = (page: string) => {
        dispatch({ type: "CHANGE_PAGE", payload: page });
      };
  return (
    <div className="mobileNavList">
      <ul>
        <li className="firstItem" onClick={()=>{
            setPage('Flashcards')
        }}>Flashcards</li>
        <li className="secondItem" onClick={()=>{
            setPage('History')
        }}>Cocktail History</li>
        <li  className="thirdItem" onClick={()=>{
            setPage('Quiz')
        }}>Quiz</li>
      </ul>
    </div>
  );
}
export default MobileNavItems;
