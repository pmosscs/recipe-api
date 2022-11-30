import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard ({recipe}) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log('ugh')
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    return (
        <div className="recipe-card">
            <div className="img-div">
                <img src={recipe.image_url} alt={recipe.recipe_name} />
            </div>
            <div className="card-info">
                <h2>{recipe.recipe_name}</h2>
                <div className="btn-div">
                    <button onClick={handleClick} className="card-button">See More</button>
                    
                </div>
            </div>
        </div>
    )
}

export default RecipeCard

// .recipe_id at the link. but makes the page white.