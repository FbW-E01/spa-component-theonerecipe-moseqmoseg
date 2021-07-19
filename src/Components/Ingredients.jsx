import "./Ingredients.css"

function Ingredients() {
  const Ing = [
    "3/4 cup milk",
    " 2 tablespoons white vinegar",
    " 1 cup flour",
    " 2 tablespoons sugar",
    " 1 teaspoon baking powder",
    " 1/2 teaspoon baking soda",
    " 1/2 teaspoon salt",
    " 1 egg,",
    " 2 tablespoons melted butter",
    " 1+ cup fresh blueberries",
    " more butter for the pan",
  ];

  
const listItems = Ing.map((ingredients) =>
  <li className="ingredient">{ingredients}</li>
);

  return (
  <div className="ingredientBox"> 
     <p>We all love pancakes, they are an almost perfect treat so how can we make them better?
     By adding blueberries!. Here is everything you will need to make some delicious Blueberry Pancakes</p>
     <ul className="listOfIngredients">{listItems}</ul>
  
 </div>
         )
 
};

export default Ingredients;