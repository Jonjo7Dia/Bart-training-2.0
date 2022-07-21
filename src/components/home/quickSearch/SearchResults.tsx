import "./SearchResults.css";
import Result from "./Result";
import { useSelector } from "react-redux";
import { PageState } from "../../../store/pagesReducer";
interface Props {
  word: string;
}

function SearchResults({ word }: Props) {

     const drinksArray = useSelector<PageState>((state) => state.drinks);
  //   const DATA = drinksArray.filter((drink:object) => {
  //     return drink.name.includes(word);
  //   });
  console.log(drinksArray);

  return (
    <div className={"searchResults"}>
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
    </div>
  );
}

export default SearchResults;
