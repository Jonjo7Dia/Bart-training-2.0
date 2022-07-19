import "./Body.css";
import Background from "./Background";
function Body(props: any) {
  return (
    <div className={"Body"}>
      <Background />

      {props.children}
    </div>
  );
}

export default Body;
