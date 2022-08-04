import "./Result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  drink: {
    Name: string;
    Ingredients: string[];
    Recipe: string[];
    History: string;
  },
  result : boolean;
  close: () => void;
  setDrink: (params: any) => void;
}
function Result({ drink,result, close, setDrink }: Props) {
  return (
    <div className={"result"} onClick={()=>{
      if(result){
        close();
        setDrink(drink);
      }
    }}>
      <div className={"drinkIcon"}>
        <FontAwesomeIcon icon={faMartiniGlass} />
      </div>
      <div className={"drinkName"} >
        {result && <h3>{drink.Name}</h3>}
        {!result && <h3>No Results Found</h3> }
      </div>
    </div>
  );
}

export default Result;
