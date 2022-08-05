import "./QuickPop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
interface Props {
  close: (params: any) => void;
  info: any;
}
function QuickPop({ close, info }: Props) {
  let Name = info.Name;
  if (Name === "Martini Gin/Vodka 6:1") {
    Name = "Martini";
  }
  const source = require(`../../images/${Name}.png`);
  return (
    <div id={"popBackground"}>
      <div className={"popUpInfo"}>
        <div className={"popUpHeading"}>
          <div className={"popUpTitle"}>
            <h1>{info.Name}</h1>
          </div>
          <div className={"popUpClose"} onClick={close}>
            <FontAwesomeIcon icon={faX} className={"drinkIcon"} />
          </div>
        </div>
        <div className={"popContent"}>
          <div className={"popUpImage"}>
            <img src={source} alt="" />
          </div>
          <div className={"popUpRecipe"}>
            <div className={"popUpIng"}>
              <div className={"ingHeader"}>
                <h2>Ingredients</h2>
              </div>
              <div className={"ingList"}>
                <ul>
                  {info.Ingredients.map((ingredient: any, index: any) => {
                    return <li key={index}>{ingredient}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className={"popUpIng"}>
              <div className={"ingHeader"}>
                <h2>Method</h2>
              </div>
              <div className={"ingList"}>
                <ul>
                  {info.Recipe.map((ingredient: any, index: any) => {
                    return <li key={index}>{ingredient}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className={"ingHeader"}>
            <h2>History</h2>
          </div>
          <div className={"popUpHistory"}>
            <p>{info.History}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickPop;
