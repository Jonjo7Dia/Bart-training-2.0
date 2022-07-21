import './DrinkCard.css'
import tea from  '../../../images/Negroni.png'
function DrinkCard(){
    return <div className={'drinkCard'}>
        <div className={'drinkImage'}><img src={tea} alt="long island"/>
</div>
        <div className={'drinkName'}><h3>Long Island Ice Tea</h3></div>
    </div>
}

export default DrinkCard;