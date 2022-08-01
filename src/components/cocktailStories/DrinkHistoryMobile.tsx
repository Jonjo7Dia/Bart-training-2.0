import './DrinkHistoryMobile.css';

interface Props {
    left: boolean,
    drink: {
        Name: string;
        Ingredients: string[];
        Recipe: string[];
        History: string;
      };
  }

function DrinkHistoryMobile({drink, left} : Props){
    let source; 
    if(drink.Name === 'Martini Gin/Vodka 6:1'){
        source = require('../../images/Martini.png');
    } else {
        source = require(`../../images/${drink.Name}.png`);
    }
    return <div className={'historyMobile'}>
        <div className={`mobileHistoryHeader ${left ? 'left' : ''}`}>
            <div className={'mobileHistoryTitle'}>
                <h1>{drink.Name}</h1>
            </div>
            <div className={'mobileHistoryImage'}>
                <img src={source}alt=""/>
            </div>
        </div>
        <div className={'mobileHistoryText'}>
            <p>{drink.History}</p>
        </div>
    </div>
}

export default DrinkHistoryMobile;