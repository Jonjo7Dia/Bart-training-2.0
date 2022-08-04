import './History.css';
import DrinkInfo from './DrinkInfo'

import RussianHistory from './RussianHistory';

interface Props{
    drinks: any[];
}
function History({drinks}: Props){
  
      
    return <div className={'history'}>
        {drinks.map((drink, index )=> {
            if(!drink.Name.includes('Russian')){
                return <DrinkInfo left={index%2 === 1 || index === 0 } drink={drink} key={index}/>
            }
            return
        })}
        <RussianHistory />


    </div>
}

export default History;