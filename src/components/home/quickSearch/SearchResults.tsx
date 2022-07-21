import "./SearchResults.css";
import Result from "./Result";
import { useSelector } from "react-redux";
import { PageState } from "../../../store/pagesReducer";
interface Props {
  word: string;
}

interface drinkObject {
  Name: string;
  Ingredients: string[];
  Recipe: string[];
  History: string;
}
function SearchResults({ word }: Props) {
  const drinksArray = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
  const data = drinksArray.filter((drink) =>
    drink.Name.trim().toUpperCase().includes(word.trim().toUpperCase())
  );
  const nullDrink = {
      Name: 'Null',
      Ingredients: ['null'],
      Recipe: ['null'],
      History: 'null'

  }
  return (
    <div className={"searchResults"}>
      {data.length > 0 && data.map((drink: drinkObject, index) => (
        <Result key={index} drink={drink} result={true} />
      ))}
      {data.length === 0 && <Result key={1} drink={nullDrink} result={false}/>}
    </div>
  );
}

export default SearchResults;
