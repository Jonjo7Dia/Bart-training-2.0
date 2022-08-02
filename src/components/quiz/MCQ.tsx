import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {
  title: string;
  options: string[];
  index: number;
  updateAnswer: (questionNumber: number, user: number) => void;
}
function getImageSource(name: string) {
  if (name === "Martini Gin/Vodka 6:1") {
    return require(`../../images/Martini.png`);
  }
  return require(`../../images/${name}.png`);
}
function arrayToString(array: any) {
  let string = "";
  for (let x = 0; x < array.length - 1; x++) {
    string = string + array[x] + ", ";
  }
  return string + array[array.length - 1];
}
function MCQ({ title, options, index, updateAnswer }: Props) {
  const source = getImageSource(title);
  const [chosen, setChosen] = useState(5);
  return (
    <div className={"mcq"}>
      <div className={"mcqInfo"}>
        <div className="mcqName">
          <h1>{`${index + 1}. ${title}`}</h1>
        </div>
        <div className={"choices"}>
          <div
            className={`choice ${chosen === 0 ? "chosen" : ""}`}
            onClick={() => {
              setChosen(0);
              updateAnswer(index + 1, (0+ index * 4));
            }}
          >
            <div className={"choiceIcon"}>
              <FontAwesomeIcon icon={faMartiniGlass} className={"drinkIcon"} />
            </div>
            <div className={"choiceText"}>{arrayToString(options[0])}</div>
          </div>
          <div
            className={`choice ${chosen === 1 ? "chosen" : ""}`}
            onClick={() => {
              setChosen(1);
              updateAnswer(index + 1, (1+ index * 4));

            }}
          >
            <div className={"choiceIcon"}>
              <FontAwesomeIcon icon={faMartiniGlass} className={"drinkIcon"} />
            </div>
            <div className={"choiceText"}>{arrayToString(options[1])}</div>
          </div>
          <div
            className={`choice ${chosen === 2 ? "chosen" : ""}`}
            onClick={() => {
              setChosen(2);
              updateAnswer(index + 1,  (2+ index * 4));

            }}
          >
            <div className={"choiceIcon"}>
              <FontAwesomeIcon icon={faMartiniGlass} className={"drinkIcon"} />
            </div>
            <div className={"choiceText"}>{arrayToString(options[2])}</div>
          </div>
          <div
            className={`choice ${chosen === 3 ? "chosen" : ""}`}
            onClick={() => {
              setChosen(3);
              updateAnswer(index + 1,  (3+ index * 4));

            }}
          >
            <div className={"choiceIcon"}>
              <FontAwesomeIcon icon={faMartiniGlass} className={"drinkIcon"} />
            </div>
            <div className={"choiceText"}>{arrayToString(options[3])}</div>
          </div>
        </div>
      </div>
      <div className={"mcqImage"}>
        <img src={source} alt="" />
      </div>
    </div>
  );
}

export default MCQ;
