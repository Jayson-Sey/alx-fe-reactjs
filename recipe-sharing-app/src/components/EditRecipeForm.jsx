import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useRecipeStore } from './recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipeId = parseInt(id)
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  )
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  
  const [title, setTitle] = useState(recipe?.title || '')
  const [description, setDescription] = useState(recipe?.description || '')

  const handleSubmit = (event) => {
    event.preventDefault()
    updateRecipe(recipeId, { title, description })
    navigate(`/recipe/${recipeId}`)
  }

  const handleCancel = () => {
    navigate(`/recipe/${recipeId}`)
  }

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Update Recipe</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default EditRecipeForm