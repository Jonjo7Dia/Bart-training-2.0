import { useRef } from "react";
import "./DraggableQuiz.css";
function DraggableQuiz() {

  return (
    <div className={"dragQuiz"}>
      <div className={"dragQuestions"}>
        <div className={"dragCard"}></div>
      </div>
      <div className={"dragOptions"}>
        <div className={"dragOption option1"}></div>
        <div className={"dragOption option2"}></div>
      </div>
    </div>
  );
}

export default DraggableQuiz;
