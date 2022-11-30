import React, { useEffect, useState } from 'react'
import DetailImage from './DetailImage';
import { useParams } from "react-router-dom"
import axios from 'axios';


const DetailScreen = () => {  
  
    const { id } = useParams();

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
      axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        console.log(res.data)
        setRecipe(res.data)
      })
    }, [])

    const recipeImage = recipe.image_url;
    const recipeTitle = recipe.recipe_name;
    const prepTime = recipe.prep_time;
    const cookTime = recipe.cook_time;
    const serves = recipe.serves;
    const instructions = recipe.instructions;
  


  return (
    <div className='detail-screen'>
      <DetailImage recipeImage={recipeImage} recipeTitle={recipeTitle} />
      <div className='detail-body'>
        <div className='left-info'>
          <div className='top-box'>
          <h2>Recipe</h2>
          <p>Prep time: {prepTime}</p>
          <p>Cook Time: {cookTime}</p>
          <p>Serves: {serves}</p>
          </div>
          <div className='bottom-box'>
          <h2>Ingredients</h2>
          {recipe.ingredients && recipe.ingredients.map((ing, index) => {
              return <h4>{ing.quantity} {ing.ingredient}</h4>
            })}
          </div>
        </div>
        <div className='right-info'>
          <h2>Instructions</h2>
          <p>{instructions && JSON.parse(instructions)}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;


// dont understand the && in the ingredients and instructions