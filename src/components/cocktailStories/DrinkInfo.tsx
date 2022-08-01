import './DrinkInfo.css'
import DrinkHistory from './DrinkHistory';
import DrinkHistoryMobile from './DrinkHistoryMobile';
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
    return (
    <div className={'historyHolder'}>
        <div className={'drinkInfo'}>
        <DrinkHistory left={left} drink={drink}/>
        </div>
        <div className={'drinkInfoMobile'}>
            <DrinkHistoryMobile drink={drink} left={left}/>
        </div>

    </div>
    )
}
export default DrinkInfo;