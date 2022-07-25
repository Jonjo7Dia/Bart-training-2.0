import "./CarouselOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";


interface Props {
  next: () => any;
  back: () => any;
  current: number;
}
function CarouselOptions({ next, back, current}: Props) {
  return (
    <div className={"carouselOptions"}>
      <div className={"carouselButtons"}>
        <div className={"controls"} onClick={()=>{
          back();
        }}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </div>
        <div>{`${current + 1}/19`}</div>
        <div className={"controls"} onClick={()=>{
          next();
        }}>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </div>
      </div>
      <div className={"switchHolder"}>
        <div className={"switch"}>
          <FontAwesomeIcon icon={faRepeat} />
          Switch Terms and Definitions
        </div>
      </div>
    </div>
  );
}

export default CarouselOptions;
