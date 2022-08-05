import "./QuickSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./SearchResults";
import { useState } from "react";
import e from "express";
interface Props {
  close: () => void;
  setDrink: (params: any) => void;
  isSearching: boolean;
  setIsSearching: (params: any) => void;
}

function QuickSearch({ close, setDrink, isSearching, setIsSearching }: Props) {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div
      className={"search"}
    >
      {isSearching &&  <div className={'blurClick'} onClick={()=>{
        setIsSearching(false);
      }}></div>}
      <div className={`searchBar ${isSearching ? "squareEdge" : ""}`}>
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
              value={isSearching ? searchWord : ''}
              onFocus={() => {
                setIsSearching(true);
              }}
              
              onChange={(e) => {
                  setSearchWord(e.target.value);

              }}
            />
          </form>
        </div>
      </div>
      {isSearching && (
        <SearchResults word={searchWord} close={close} setDrink={setDrink} />
      )}
    </div>
  );
}

export default QuickSearch;
