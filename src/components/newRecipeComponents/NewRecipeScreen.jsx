import { Formik } from "formik";
import React, { useState } from "react";
import axios from "axios";

const NewRecipeScreen = () => {
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    quantity: "",
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    postRequest(values);
  };

  const [ingredients, setIngredients] = useState([]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const ingredientDisplay = ingredients.map((ing, ind) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  const postRequest = (values) =>
    axios.post("https://recipes.devmountain.com/recipes", values);

  return (
    <div className="nr-wrapper">
      <div className="new-recipe-page">
        <h1>Tell us about your Recipe!</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="top-page">
                <input
                  className="name-bar"
                  type="text"
                  placeholder="Name"
                  name="recipeName"
                  value={values.recipeName}
                  onChange={handleChange}
                />
                <input
                  className="img-bar"
                  type="text"
                  placeholder="Image URL"
                  name="imageURL"
                  value={values.imageURL}
                  onChange={handleChange}
                />
              </div>
              <div className="radio-buttons">
                <label>
                  <input
                    type="radio"
                    value="Cook"
                    name="type"
                    onChange={handleChange}
                  />
                  Cook
                </label>
                <label>
                  <input
                    type="radio"
                    value="Bake"
                    name="type"
                    onChange={handleChange}
                  />
                  Bake
                </label>
                <label>
                  <input
                    type="radio"
                    value="Drink"
                    name="type"
                    onChange={handleChange}
                  />
                  Drink
                </label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Prep Time"
                  name="prepTime"
                  value={values.prepTime}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Cook Time"
                  name="cookTime"
                  value={values.cookTime}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Serves"
                  name="serves"
                  value={values.serves}
                  onChange={handleChange}
                />
              </div>
              <div className="ingredients-boxes">
                <div className="ing-divs">
                  <input
                    type="text"
                    placeholder="Ingredient"
                    name="ingredient"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                </div>
                <div className="list-items">
                  <ul>{ingredientDisplay}</ul>
                </div>
              </div>
              <div className="bottom-of-form">
                <button
                  className="add-an"
                  type="button"
                  onClick={addIngredient}
                >
                  Add Another
                </button>
                <textarea
                  rows="5"
                  placeholder="What are the instructions?"
                  name="instructions"
                  value={values.instructions}
                  onChange={handleChange}
                  style={{ resize: "none" }}
                />
                <button className="save-button" type="submit">
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewRecipeScreen;
