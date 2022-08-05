import './CarouselItems.css'
import DrinkCard from './DrinkCard';
import { useSelector } from "react-redux";
import { PageState } from "../../../store/pagesReducer";
interface Props{
    close: () => void;
  setDrink: (params: any) => void;
}
function CarouselItems({close, setDrink} : Props){
    const drinks= useSelector<PageState, PageState["drinks"]>(state=>state.drinks);

    const mustKnow = [drinks[9],drinks[8], drinks[6], drinks[4]];

    return <div className={'carouselItems'}>
        {mustKnow.map((drink, index) => (<DrinkCard key={index} drink={drink} close={close} setDrink={setDrink}/>))}

    </div>
}

export default CarouselItems;