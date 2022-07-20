import "./SearchResults.css";
import Result from "./Result";
function SearchResults() {
  const DUMMY_DATA = new Array(60).fill("random");

  console.log(DUMMY_DATA);
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
