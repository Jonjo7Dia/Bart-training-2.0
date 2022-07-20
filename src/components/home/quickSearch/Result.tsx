import './Result.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
function Result(){
    return <div className={'result'}>
        <div className={'drinkIcon'}>
          <FontAwesomeIcon icon={faMartiniGlass}  />

        </div>
        <div className={'drinkName'}>
            <h3>Long Island Ice Tea</h3>
        </div>
    </div>
}

export default Result;