import "./SearchResults.css";
import Result from "./Result";
import { useSelector } from "react-redux";
import { PageState } from "../../../store/pagesReducer";
interface Props {
  word: string;

  close: () => void;
  setDrink: (params: any) => void;
}

interface drinkObject {
  Name: string;
  Ingredients: string[];
  Recipe: string[];
  History: string;
}
function SearchResults({ word, close, setDrink }: Props) {
  const drinksArray = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
  const data = drinksArray.filter((drink) =>
    drink.Name.trim().toUpperCase().includes(word.trim().toUpperCase())
  );
  const nullDrink = {
    Name: "Null",
    Ingredients: ["null"],
    Recipe: ["null"],
    History: "null",
  };
  return (
    <div className={"searchResults"}>
      {data.length > 0 &&
        data.map((drink: drinkObject, index) => (
          <Result key={index} drink={drink} result={true} close={close} setDrink={setDrink}/>
        ))}
      {data.length === 0 && <Result key={1} drink={nullDrink} result={false} close={close} setDrink={setDrink}/>}
    </div>
  );
}

export default SearchResults;
