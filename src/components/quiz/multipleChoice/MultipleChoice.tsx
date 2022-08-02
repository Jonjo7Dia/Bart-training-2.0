import "./MultipleChoice.css";
import Choice from "./Choice";
import { useState } from "react";
interface Props {
  options: any[];
  correctAnswer: number;
  title: string;
  correct: boolean;
}

function MultipleChoice({ options, correctAnswer, title, correct }: Props) {
  const [isClicked, setIsClicked] = useState(5);
  function changeClicked(num: number) {
    setIsClicked(num);
  }
  console.log(correctAnswer);
  return (
    <div className={"multipleChoice"}>
      <div className={"mcHeader"}>
        <h1>{title}</h1>
      </div>
      <div className={"mcOptions"}>
        <ul className={"mcQs"}>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <Choice
                  option={option}
                  clicked={index === isClicked}
                  index={index}
                  onClick={changeClicked}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default MultipleChoice;
