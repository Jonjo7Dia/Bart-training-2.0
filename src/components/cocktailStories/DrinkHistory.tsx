import "./DrinkHistory.css";
interface Props {
  left: boolean;
  drink: {
    Name: string;
    Ingredients: string[];
    Recipe: string[];
    History: string;
  };
}
function DrinkHistory({ left, drink }: Props) {
    let source; 
    if(drink.Name === 'Martini Gin/Vodka 6:1'){
        source = require('../../images/Martini.png');
    } else {
        source = require(`../../images/${drink.Name}.png`)
    }
//   const source = require("../../images/Manhattan.png");

  return (
    <div className={`drinkHistory ${left ? "left" : ""}`}>
      <div className={"historyStory"}>
        <div className="historyTitle">
          <h1>{drink.Name}</h1>
        </div>
        <div className="historyText">
          <p> {drink.History}</p>
        </div>
      </div>
      <div className={"historyImage"}>
        <img src={source} alt="" />
      </div>
    </div>
  );
}

export default DrinkHistory;
