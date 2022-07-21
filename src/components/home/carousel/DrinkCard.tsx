import './DrinkCard.css'

interface Props {
    drink: {
      Name: string;
      Ingredients: string[];
      Recipe: string[];
      History: string;
    }
  }
function DrinkCard({drink} : Props){
    let Name = drink.Name;
    if(Name === 'Martini Gin/Vodka 6:1'){
        Name = 'Martini';
    }
    const source = require(`../../../images/${Name}.png`)
    console.log(Name);
    console.log(source);
    return <div className={'drinkCard'}>
        <div className={'drinkImage'}><img src={source} alt={Name} 
/>
</div>
        <div className={'drinkName'}><h3>{Name}</h3></div>
    </div>
}

export default DrinkCard;