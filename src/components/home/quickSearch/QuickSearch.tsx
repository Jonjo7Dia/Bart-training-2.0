import "./QuickSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./SearchResults";
import { useState } from "react";
function QuickSearch() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  
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
              placeholder="Search a Cocktail Recipe"
              onFocus={() => {
                setIsSearching(true);
              }}
              onBlur ={()=>{
                  setIsSearching(false);
              }}
              onChange={(e)=>{
                  setSearchWord(e.target.value)
              }}
            />
          </form>
        </div>
      </div>
     { isSearching && <SearchResults word ={searchWord} />}
    </div>
  );
}

export default QuickSearch;
