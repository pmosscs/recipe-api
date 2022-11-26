import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AdBanner from './AdBanner'

const HomeScreen = () => {
  
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      console.log(res.data) //result?
      setRecipes(res.data) //result?
    })
  }, [])

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen