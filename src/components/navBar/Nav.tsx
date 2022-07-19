import { useState } from "react";
import "./Nav.css";
function Nav() {
  const [isActive, setIsActive] = useState('Home');
  
  return (
    <div className={"nav"}>
      <div className={"navHeading"} onClick={()=>{
        setIsActive('Home');
      }}>
        <div className={"title"}>
          <h1>Bar Training</h1>
        </div>
        <span className={"underline"}></span>
      </div>
      <div className={"navLinks"}>
        <ul>
          <li>
            <div className={"navItem"}>
              <div className={"title"}>
                <h3>Flashcards</h3>
              </div>
              <span className={"underline"}></span>
            </div>
          </li>
          <li>
            <div className={"navItem"}>
              <div className={"title"}>
                <h3>Cocktail History</h3>
              </div>

              <span className={"underline"}></span>
            </div>
          </li>
          <li>
            <div className={"navItem"}>
              <div className={"title"}>
                <h3>Quiz</h3>
              </div>

              <span className={"underline"}></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
