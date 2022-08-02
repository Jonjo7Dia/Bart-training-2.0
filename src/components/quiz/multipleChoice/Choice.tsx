import "./Choice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
interface Props {
  option: string;
  clicked: boolean;
  index: number;
  onClick: (number:number) => void;

}
function Choice({ option, clicked, index, onClick }: Props) {
    let string = '';
    for(let x = 0; x < option.length; x++){
        string = string + option[x] + ', '
    }
  return (
    <div className={`choice ${clicked ? 'chosen': ''}`} onClick={()=>{
        onClick(index);
    }}>
      <div className={"choiceIcon"}>
        <FontAwesomeIcon icon={faMartiniGlass} className={"drinkIcon"} />
      </div>
      <div className={"choiceText"}>
          {string}
      </div>
    </div>
  );
}

export default Choice;
