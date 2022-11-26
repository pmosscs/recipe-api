import React from "react";

function RecipeCard () {
    return (
        <div className="recipe-card">
            <div className="img-div">
                <img src="https://www.simplyrecipes.com/thmb/F2Yo7A74ZG6X9Yw6kycKaARDQL8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__02__Creme-Brulee-LEAD-VERTICAL-c99fa6c67f20441c9430df056b6e9d6a.jpg" alt="recipe photo" />
            </div>
            <div>
                <h2>Creme Brule</h2>
                <button className="card-button">See More</button>
            </div>
        </div>
    )
}

export default RecipeCard