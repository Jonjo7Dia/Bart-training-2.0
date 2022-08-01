import './History.css';
import DrinkInfo from './DrinkInfo'
import { useSelector } from "react-redux";
import { PageState } from "../../store/pagesReducer";
function History(){
    const drinks = useSelector<PageState, PageState["drinks"]>(
        (state) => state.drinks
      );
      
    return <div className={'history'}>
        {drinks.map((drink, index )=> {
            if(!drink.Name.includes('Russian')){
                return <DrinkInfo left={index%2 === 1 || index === 0 } drink={drink} key={index}/>
            }
        })}


    </div>
}

export default History;