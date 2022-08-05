import { useState } from 'react';
import './DrinkCard.css'
import '../QuickPop'
import QuickPop from '../QuickPop';
interface Props {
    drink: {
      Name: string;
      Ingredients: string[];
      Recipe: string[];
      History: string;
    }
    close: () => void;
    setDrink: (params: any) => void;
  }
function DrinkCard({drink,close, setDrink} : Props){
    let Name = drink.Name;
    if(Name === 'Martini Gin/Vodka 6:1'){
        Name = 'Martini';
    }
    const source = require(`../../../images/${Name}.png`)
    return <div className={'drinkCard'} onClick={()=>{
      close();
      setDrink(drink);
    }}>
        <div className={'drinkImage'}><img src={source} alt={Name} 
/>
</div>
        <div className={'drinkName'}><h3>{Name}</h3></div>
    </div>
}

export default DrinkCard;