import "./Body.css";
import Background from "./Background";
import Home from '../Home/Home';
function Body(props: any) {
  return (
    <div className={"Body"}>
      <Background />

      {props.children}
      <Home />
    </div>
  );
}

export default Body;
