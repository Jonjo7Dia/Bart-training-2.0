import "./Nav.css";
import Hamburger from "./Hamburger";
import { useDispatch, useSelector } from "react-redux";
import { PageState } from "../../store/pagesReducer";
function Nav() {
  const dispatch = useDispatch();
  const isActive = useSelector<PageState>((state) => state.page);
  const setPage = (page: string) => {
    dispatch({ type: "CHANGE_PAGE", payload: page });
  };
  return (
    <div className={"nav"}>
      <div
        className={`navHeading ${isActive !== "Home" ? "unactive" : "active"}`}
        onClick={() => {
          setPage("Home");
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
              className={`navItem ${
                isActive !== "Flashcards" ? "unactive" : "active"
              }`}
              onClick={() => {
                setPage("Flashcards");
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
              className={`navItem ${
                isActive !== "History" ? "unactive" : "active"
              }`}
              onClick={() => {
                setPage("History");
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
              className={`navItem ${
                isActive !== "Quiz" ? "unactive" : "active"
              }`}
              onClick={() => {
                setPage("Quiz");
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
