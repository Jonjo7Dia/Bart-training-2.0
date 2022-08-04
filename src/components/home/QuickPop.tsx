import "./QuickPop.css";

interface Props {
    close: (params: any) => void;
}
function QuickPop({close} : Props) {
  const source = require("../../images/Aperol Spritz.png");
  return (
    <div id={"popBackground"}>
      <div className={"popUpInfo"}>
        <div className={"popUpHeading"}>
          <div className={"popUpTitle"}>
            <h1>Jonathan Hjelmstrom</h1>
          </div>
          <div className={"popUpClose"} onClick={close}></div>
        </div>
        <div className={"popUpImage"}>
          <img src={source} alt="" />
        </div>
        <div className={"popUpRecipe"}>
          <div className={"popUpIng"}>
            <div className={"ingHeader"}>
                <h2>Ingredients</h2>
            </div>
          </div>
          <div className={"popUpIng"}>
            <div className={"ingHeader"}>
            <h2>Method</h2>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickPop;
