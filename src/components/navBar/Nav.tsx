import { useState } from "react";
import "./Nav.css";
import Hamburger from "./Hamburger";
function Nav() {
  const [isActive, setIsActive] = useState("Home");
  console.log(isActive);
  return (
    <div className={"nav"}>
      <div
        className={`navHeading ${isActive !== 'Home' ? 'unactive' : 'active'}`}
        onClick={() => {
          setIsActive("Home");
        }}
      >
        <div className={`title`}>
          <h1>Bar Training</h1>
        </div>
        <span
          className={"underline"}
          style={{ width: isActive === "Home" ? "100%" : "0%" }}
        ></span>
      </div>
      <div className={"navLinks"}>
        <ul>
          <li>
            <div
              className={`navItem ${isActive !== 'Flashcards' ? 'unactive' : 'active'}`}
              onClick={() => {
                setIsActive("Flashcards");
              }}
            >
              <div className={"title"}>
                <h3>Flashcards</h3>
              </div>
              <span
                className={"underline"}
                style={{ width: isActive === "Flashcards" ? "100%" : "0%" }}
              ></span>
            </div>
          </li>
          <li>
            <div
              className={`navItem ${isActive !== 'History' ? 'unactive' : 'active'}`}
              onClick={() => {
                setIsActive("History");
              }}
            >
              <div className={"title"}>
                <h3>Cocktail History</h3>
              </div>

              <span
                className={"underline"}
                style={{ width: isActive === "History" ? "100%" : "0%" }}
              ></span>
            </div>
          </li>
          <li>
            <div
              className={`navItem ${isActive !== 'Quiz' ? 'unactive' : 'active'}`}
              onClick={() => {
                setIsActive("Quiz");
              }}
            >
              <div className={"title"}>
                <h3>Quiz</h3>
              </div>

              <span
                className={"underline"}
                style={{ width: isActive === "Quiz" ? "100%" : "0%" }}
              ></span>
            </div>
          </li>
        </ul>
      </div>
      <Hamburger />
    </div>
  );
}

export default Nav;
