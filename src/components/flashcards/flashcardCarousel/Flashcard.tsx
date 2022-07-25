
import "./Flashcard.css";

interface Props {
  drink: {
    Name: string;
    Ingredients: string[];
    Recipe: string[];
    History: string;
  },
  cardNumber: number,
  frontShower: boolean,
  flip: () => any;
  clicked: ()=> any;

}
function Flashcard({ drink, cardNumber, frontShower, flip, clicked}: Props) {


  let Name = drink.Name;
  if (Name === "Martini Gin/Vodka 6:1") {
    Name = "Martini";
  }
  const source = require(`../../../images/${Name}.png`);
  function flipTheCard(){
      flip();
      const card = document.getElementById(`fcCard${cardNumber}`);
      card?.children[0].classList.remove('front', 'frontToBack', 'backToFront');
      if(frontShower){
        card?.children[0].classList.add('frontToBack');

      }
      else {
        card?.children[0].classList.add('backToFront');

      }
  }

  return (
    <div className={"flashcard"} onClick={()=>{
        flipTheCard();
        clicked();

    }}>
      <div className={'fcFront'}>
        <img src={source} alt={Name} />
      </div>
      <div className={"fcBack"}></div>
    </div>
  );
}

export default Flashcard;
