import "./Home.css";
import QuickSearch from "./quickSearch/QuickSearch";
import Carousel from './carousel/Carousel'; 
import { useState } from "react";
import QuickPop from './QuickPop';
function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpInfo, setPopUpInfo] = useState('helo');
  const [isSearching, setIsSearching] = useState(false);

  function popHandler(){
    setShowPopUp(prevState => {
      return !prevState
    });
    setIsSearching(false);
  }
  function setDrink(params:any){
    setPopUpInfo(params);
  }
  function setSearching(params: boolean){
    setIsSearching(params);
  }
  return (
    <div className={"home"}>

      <QuickSearch close={popHandler} setDrink={setDrink} isSearching={isSearching} setIsSearching={setSearching}/>
      <Carousel/>
      {showPopUp && <QuickPop close={popHandler} info={popUpInfo}/>}
    </div>
  );
}

export default Home;
