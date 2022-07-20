import "./QuickSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./SearchResults";
import { useState } from "react";
function QuickSearch() {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <div className={"search"}>
      <div className={`searchBar ${isSearching ? 'squareEdge' : ''}`}>
        <div className={"searchIcon"}>
          <FontAwesomeIcon icon={faMartiniGlass} className={"drinkIcon"} />
        </div>
        <div className={"searchInput"}>
          <form
            action="null"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={"userSearch"}
          >
            <input
              type="text"
              placeholder="Quick Search a Cocktail Recipe"
              onFocus={() => {
                setIsSearching(true);
              }}
              onBlur ={()=>{
                  setIsSearching(false);
              }}
            />
          </form>
        </div>
      </div>
     { isSearching && <SearchResults />}
    </div>
  );
}

export default QuickSearch;
