import "./Home.css";
import QuickSearch from "./quickSearch/QuickSearch";
import Carousel from './carousel/Carousel'; 

function Home() {

  return (
    <div className={"home"}>
      <QuickSearch />
      <Carousel/>
    </div>
  );
}

export default Home;
