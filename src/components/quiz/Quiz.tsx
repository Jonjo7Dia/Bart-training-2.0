import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { PageState } from "../../store/pagesReducer";
import DraggableQuiz from './DraggableQuiz';
import $ from 'jquery';
import ScoreCard from './ScoreCard';
import MCQ from "./MCQ";
import "./Quiz.css";

function shuffleArray(array: any[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function selectCorrect(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getMethods(answer:string, array:string[]){
    let arrayToReturn = [answer];
    let tempArray = shuffleArray(array);
    let x = 0;
    while(arrayToReturn.length < 4){
        if(!arrayToReturn.includes(tempArray[x])){
            arrayToReturn.push(tempArray[x]);
        }
        x++;
    }
    return shuffleArray(arrayToReturn);
}
function getScore(user: Object, answers: Object, questions: number){
    let score = 0;
    let tempUser = Object.values(user);
    let tempAnswers = Object.values(answers);
    for(let x = 0; x < questions; x++){
        if(tempUser[x] === tempAnswers[x]){
            score++;
        }
    }
    return score;
}

interface Props{
    drinks: any[];
}

function Quiz({drinks} : Props) {
  const [tryAgain, setTryAgain] = useState(false);
  const totalQuestions = 6;
  const methods = [
    "Build",
    "Shake and Top Up",
    "Shake and Fine Strain",
    "Stir and Strain",
    "Muddle and Build",
    "Double Shake and Charge",
    "Shake and Strain",
  ];

  const tempDrinks = [...drinks];
  const shuffleDrinks = useMemo(()=>(
      shuffleArray(tempDrinks)
  ), []);

  const [userAnswers, setUserAnswers] = useState({
    1: -1,
    2: -1,
    3: -1,
    4: -1,
    5: -1,
    6: -1,
  });

  const correctAnswers = useMemo(
    () => ({
      1: selectCorrect(0, 3),
      2: selectCorrect(4, 7),
      3: selectCorrect(8, 11),
      4: shuffleDrinks[12].Recipe[0],
      5: shuffleDrinks[13].Recipe[0],
      6: shuffleDrinks[14].Recipe[0],
    }),
    [tryAgain, setTryAgain]
  );


  const question1 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[correctAnswers[1]].Name}
        correctAnswer={shuffleDrinks[correctAnswers[1]].Ingredients}
        index={0}
        options={[
          shuffleDrinks[0].Ingredients,
          shuffleDrinks[1].Ingredients,
          shuffleDrinks[2].Ingredients,
          shuffleDrinks[3].Ingredients,
        ]}
        updateAnswer={addUserAnswer}
        left={false}
      />
    ),
    []
  );
  const question2 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[correctAnswers[2]].Name}
        index={1}
        correctAnswer={shuffleDrinks[correctAnswers[2]].Ingredients}

        options={[
          shuffleDrinks[4].Ingredients,
          shuffleDrinks[5].Ingredients,
          shuffleDrinks[6].Ingredients,
          shuffleDrinks[7].Ingredients,
        ]}
        updateAnswer={addUserAnswer}
        left={false}
      />
    ),
    []
  );
  const question3 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[correctAnswers[3]].Name}
        correctAnswer={shuffleDrinks[correctAnswers[3]].Ingredients}

        index={2}
        options={[
          shuffleDrinks[8].Ingredients,
          shuffleDrinks[9].Ingredients,
          shuffleDrinks[10].Ingredients,
          shuffleDrinks[11].Ingredients,
        ]}
        updateAnswer={addUserAnswer}
        left={false}
      />
    ),
    []
  );
  const question4 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[12].Name}
        correctAnswer={correctAnswers[4]}

        index={3}
        options={getMethods(shuffleDrinks[12].Recipe[0], methods)}
        updateAnswer={addUserAnswer}
        left={true}
      />
    ),
    []
  );
  const question5 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[13].Name}
        correctAnswer={correctAnswers[5]}

        index={4}
        options={getMethods(shuffleDrinks[13].Recipe[0], methods)}
        updateAnswer={addUserAnswer}
        left={true}
      />
    ),
    []
  );
  const question6 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[14].Name}
        correctAnswer={correctAnswers[6]}

        index={5}
        options={getMethods(shuffleDrinks[14].Recipe[0], methods)}
        updateAnswer={addUserAnswer}
        left={true}
      />
    ),
    []
  );

  function addUserAnswer(questionNumber: number, answer: any) {
    setUserAnswers((prevState) => {
      return {
        ...prevState,
        [questionNumber]: answer,
      };
    });
  }


  return (
    <div className={"quiz"}>
      <div className={"multipleChoice"}>
        <div className={"mcInstruction"}>
          <h1>Multiple Choice- Ingredients</h1>
          <h3>Choose the ingredients that match the cocktail</h3>
        </div>
        {question1}
        {question2}
        {question3}
      </div>
      <div className={"multipleChoice"}>
        <div className={"mcInstruction"}>
          <h1>Multiple Choice- Ingredients</h1>
          <h3>Choose the method that matches the cocktail</h3>
        </div>
        {question4}
        {question5}
        {question6}
      <div className={'submitButton'}>
          {!tryAgain && <button className={'submit'} onClick={()=>{
              setTryAgain(true);
              document.getElementById('overlay')?.classList.remove('dontShow');
              document.getElementById('overlay')?.classList.add('overShow');
              $('.correct').addClass('correctColor');
          }}>Submit</button>}
          {tryAgain && <button className={'submit'}>Try Again</button>}
      </div>

      </div>
      <ScoreCard score={getScore(userAnswers, correctAnswers, totalQuestions)} totalQuestions={totalQuestions}/>
      {/* <DraggableQuiz/> */}
    </div>
  );
}

export default Quiz;
