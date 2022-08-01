import './DrinkInfo.css'
import DrinkHistory from './DrinkHistory';
interface Props {
    left: boolean,
    drink: {
        Name: string;
        Ingredients: string[];
        Recipe: string[];
        History: string;
      };
  }
  
function DrinkInfo({left, drink} : Props){
    console.log(left);
    return <div className={'drinkInfo'}>
        <DrinkHistory left={left} drink={drink}/>
    </div>
}
export default DrinkInfo;