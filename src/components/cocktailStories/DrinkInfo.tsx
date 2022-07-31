import './DrinkInfo.css'
import DrinkHistory from './DrinkHistory';
interface Props {
    left: boolean,

  }
  
function DrinkInfo({left} : Props){
    return <div className={'drinkInfo'}>
        <DrinkHistory />
    </div>
}
export default DrinkInfo;