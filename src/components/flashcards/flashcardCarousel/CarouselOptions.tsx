import "./CarouselOptions.css";

interface Props {
    next: (params: any) => any;
    back: (params: any) => any;

}
function CarouselOptions({next, back}: Props) {
  return (
    <div className={"carouselOptions"}>
      <button onClick={back}>back</button>
      <button onClick={next}>next</button>
    </div>
  );
}

export default CarouselOptions;
