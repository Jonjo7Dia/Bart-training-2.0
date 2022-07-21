import './Carousel.css'
import CarouselItems from './CarouselItems';
function Carousel(){
    return <div className={'carousel'}>
        <div className={'carouselHeader'}><h2>Must Knows</h2></div>
        <CarouselItems/>
    </div>
}

export default Carousel;