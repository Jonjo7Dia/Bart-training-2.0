import "./Home.css";
import QuickSearch from "./quickSearch/QuickSearch";
import Carousel from './carousel/Carousel'; 
import { useState } from "react";
import QuickPop from './QuickPop';
function Home() {
  const [showPopUp, setShowPopUp] = useState(true);
  const [popUpInfo, setPopUpInfo] = useState('helo');
  function popHandler(){
    setShowPopUp(prevState => {
      return !prevState
    })
  }
  function setDrink(params:any){
    popHandler();
    setPopUpInfo(params);
  }
  console.log(popUpInfo);
  return (
    <div className={"home"}>

      <QuickSearch close={popHandler} setDrink={setDrink}/>
      <Carousel/>
      {showPopUp && <QuickPop close={popHandler}/>}
    </div>
  );
}

export default Home;
