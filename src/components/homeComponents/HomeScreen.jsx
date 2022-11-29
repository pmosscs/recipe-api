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

  return (
    <div className="home-screen">
      <AdBanner />
      <Form />
      <div className='card-section'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />

      </div>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen