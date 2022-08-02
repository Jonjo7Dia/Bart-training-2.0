import "./Flashcard.css";
import FlashcardBack from './FlashcardBack';


interface Props {
  drink: {
    Name: string;
    Ingredients: string[];
    Recipe: string[];
    History: string;
  };
  showFront: boolean;
  flip: () => any;

}

function Flashcard({ drink, showFront, flip }: Props) {

  let Name = drink.Name;
  if (Name === "Martini Gin/Vodka 6:1") {
    Name = "Martini";
  }
  const source = require(`../../../images/${Name}.png`);
  return (
    <div
      className={`flashcard ${showFront ? "frontToBack" : "backToFront"}`}
      onClick={flip}
      onKeyUp={(e) => {
        console.log("hello");
      }}
    >
      <div className={"fcFront"}>
        <img src={source} alt={Name} />
      </div>
      <div className={"fcBack"}>
        <FlashcardBack drinkInfo={drink}/>
      </div>
    </div>
  );
}

export default Flashcard;
