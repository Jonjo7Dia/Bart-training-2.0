import "./FlashcardBack.css";
interface Props {
  drinkInfo: {
    Name: string;
    Ingredients: string[];
    Recipe: string[];
    History: string;
  };
}

function FlashcardBack({ drinkInfo }: Props) {
  return (
    <div className={"flashcardBack"}>
      <div className={"drinkTitle"}>
        <h1>{drinkInfo.Name}</h1>
      </div>
      <div className={"drinkRecipe"}>
        <div className={"drinkIngredients"}>
          <div className={"ingredientsTitle"}>
            <h2>Ingredients</h2>
          </div>
          <div className="recipeList">
            <ul className={"ingredientsList"}>
              {drinkInfo.Ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={"drinkSteps"}>
          <div className={"ingredientsTitle"}>
            <h2>Recipe</h2>
          </div>
          <div className={"recipeList"}>
            <ul className={"ingredientsList"}>
              <li> Method: {drinkInfo.Recipe[0]}</li>
              <li> Glass Type: {drinkInfo.Recipe[1]}</li>
              <li>Ice: {drinkInfo.Recipe[2]}</li>
              <li>Garnish: {drinkInfo.Recipe[3]}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashcardBack;
