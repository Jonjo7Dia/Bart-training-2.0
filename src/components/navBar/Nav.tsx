import { useState } from "react";
import "./Nav.css";
function Nav() {
  const [isActive, setIsActive] = useState("Home");
  console.log(isActive);
  return (
    <div className={"nav"}>
      <div
        className={"navHeading"}
        onClick={() => {
          setIsActive("Home");
        }}
      >
        <div className={"title"}>
          <h1>Bar Training</h1>
        </div>
        <span className={"underline"} style={{width: isActive === 'Home' ? '98%' : '0%'}}></span>
      </div>
      <div className={"navLinks"}>
        <ul>
          <li>
            <div
              className={"navItem"}
              onClick={() => {
                setIsActive("Flashcards");
              }}
            >
              <div className={"title"}>
                <h3>Flashcards</h3>
              </div>
              <span className={"underline"} style={{width: isActive === 'Flashcards' ? '98%' : '0%',}}></span>
            </div>
          </li>
          <li>
            <div
              className={"navItem"}
              onClick={() => {
                setIsActive("History");
              }}
            >
              <div className={"title"}>
                <h3>Cocktail History</h3>
              </div>

              <span className={"underline"}  style={{width: isActive === 'History' ? '98%' : '0%'}}></span>
            </div>
          </li>
          <li>
            <div
              className={"navItem"}
              onClick={() => {
                setIsActive("Quiz");
              }}
            >
              <div className={"title"}>
                <h3>Quiz</h3>
              </div>

              <span className={"underline"} style={{width: isActive === 'Quiz' ? '98%' : '0%'}}></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
