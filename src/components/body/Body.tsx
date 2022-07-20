import "./Body.css";
import Background from "./Background";
import Home from '../home/Home';
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
