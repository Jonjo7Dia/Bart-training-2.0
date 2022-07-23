import "./Flashcard.css";

interface Props {
  drink: {
    Name: string;
    Ingredients: string[];
    Recipe: string[];
    History: string;
  };
}
function Flashcard({ drink }: Props) {
  let Name = drink.Name;
  if (Name === "Martini Gin/Vodka 6:1") {
    Name = "Martini";
  }
  const source = require(`../../../images/${Name}.png`);

  return (
    <div className={"flashcard"}>
      <img src={source} alt={Name} />
    </div>
  );
}

export default Flashcard;
