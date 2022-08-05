import './Carousel.css'
import CarouselItems from './CarouselItems';

interface Props{
    close: () => void;
  setDrink: (params: any) => void;
}
function Carousel({close, setDrink} : Props){
    return <div className={'carousel'}>
        <div className={'carouselHeader'}><h2>Must Knows</h2></div>
        <CarouselItems close={close} setDrink={setDrink}/>
    </div>
}

export default Carousel;