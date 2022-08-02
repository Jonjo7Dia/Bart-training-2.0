import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { PageState } from "../../store/pagesReducer";
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

function Quiz() {
  const totalQuestions = 1;
  const [userAnswers, setUserAnswers] = useState({ 1: -1, 2: -1, 3: -1, });
  const correctAnswers = useMemo( ()=> ({
    1: selectCorrect(0, 3),
    2: selectCorrect(4, 7),
    3: selectCorrect(8, 11),
  }), []);
  const drinks = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
  const shuffleDrinks = shuffleArray(drinks);
  const question1 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[correctAnswers[1]].Name}
        index={0}
        options={[
          shuffleDrinks[0].Ingredients,
          shuffleDrinks[1].Ingredients,
          shuffleDrinks[2].Ingredients,
          shuffleDrinks[3].Ingredients,
        ]}
        updateAnswer={addUserAnswer}
      />
    ),
    []
  );
  const question2 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[correctAnswers[2]].Name}
        index={1}
        options={[
          shuffleDrinks[4].Ingredients,
          shuffleDrinks[5].Ingredients,
          shuffleDrinks[6].Ingredients,
          shuffleDrinks[7].Ingredients,
        ]}
        updateAnswer={addUserAnswer}
      />
    ),
    []
  );
  const question3 = useMemo(
    () => (
      <MCQ
        title={shuffleDrinks[correctAnswers[3]].Name}
        index={2}
        options={[
          shuffleDrinks[8].Ingredients,
          shuffleDrinks[9].Ingredients,
          shuffleDrinks[10].Ingredients,
          shuffleDrinks[11].Ingredients,
        ]}
        updateAnswer={addUserAnswer}
      />
    ),
    []
  );

  function addUserAnswer(questionNumber: number, answer: number) {
    setUserAnswers((prevState) => {
      return {
        ...prevState,
        [questionNumber]: answer,
      };
    });
  }
  console.log(userAnswers);
  console.log(correctAnswers);
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
      </div>
    </div>
  );
}

export default Quiz;
