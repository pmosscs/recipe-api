import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AdBanner from './AdBanner'
import RecipeCard from './RecipeCard'
import Form from './Form'

const HomeScreen = () => {
  
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      console.log(res.data) 
      setRecipes(res.data) 
    })
  }, [])

  const [searchInput, setSearchInput] = useState("");

  const searchInputReturn = (typed) => {
    setSearchInput(typed);
    console.log(searchInput)
  }

  const recipeDisplay = recipes.filter((recipe, index) => {
    let title = recipe.recipe_name.toLowerCase()
    let searchParams = searchInput.toLowerCase()
    return title.includes(searchParams)
  })
  .map((recipe, index) => {
    return <RecipeCard recipe={recipe} />
  })

  return (
    <div className="home-screen">
      <AdBanner />
      <Form searchInputReturn={searchInputReturn} />
      <div className='card-section'>
      {recipeDisplay}

      </div>
    </div>
  )
}

export default HomeScreen

// why does recipe display show all recipes if there is nothing typed?