import './ScoreCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface Props{
    score: number, 
    totalQuestions: number,
    reset: (params: any) => void;
}
function ScoreCard({score, totalQuestions, reset}: Props){
    function closeHandler(){
        document.getElementById('overlay')?.classList.add('dontShow');
        document.getElementById('overlay')?.classList.remove('overShow');
    }
    return <div id={'overlay'} className={'dontShow'}>
        <div className={'scoreCard'}>
            <div className={'scoreHeading'}>
                <div className={'scoreTitle'}>

                </div>
                <div className={'closeScore'} onClick={closeHandler}>
              <FontAwesomeIcon icon={faX} className={"drinkIcon"} />

                </div>
            </div>
            <div className={'scorePoints'}>
                <h1>Total Score:</h1>
                <h1>{score} <strong style={{color: '#ff0038'}}>/</strong> {totalQuestions}</h1>
            </div>
            <div className={'scoreButtons'}>
                <button className={'submit'} onClick={reset}>Try Again</button>
                <button className={'submit'} onClick={closeHandler}>Review</button>

            </div>
        </div>
    </div>
}

export default ScoreCard;