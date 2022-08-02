import "./IngredientQuiz.css";
import MultipleChoice from "./multipleChoice/MultipleChoice";
import { useSelector } from "react-redux";
import { PageState } from "../../store/pagesReducer";
import { useState } from "react";


const shuffleArray = (array:any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

function assignAnswer(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min)

}

function IngredientQuiz() {
  const [isCorrect, setIsCorrect] = useState(false);
  const source = require("../../images/Manhattan.png");
  const drinksArray = useSelector<PageState, PageState["drinks"]>(
    (state) => state.drinks
  );
    let array = shuffleArray(drinksArray);
    let answer = assignAnswer(0, 3);
  return (
    <div className={"ingredientMCQ"}>
      <MultipleChoice
        options={[
          array[0].Ingredients,
          array[1].Ingredients,
          array[2].Ingredients,
          array[3].Ingredients,
        ]}
        title={`1. ${array[answer].Name}`}
        correctAnswer={answer}
        correct={isCorrect}
      />
      <div className={"mcqImage"}>
        <img src={source} alt="" />
      </div>
    </div>
  );
}

export default IngredientQuiz;
