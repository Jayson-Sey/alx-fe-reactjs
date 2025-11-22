import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const navigate = useNavigate()
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

  const handleDelete = () => {
    deleteRecipe(recipeId)
    if (onDelete) onDelete()
    navigate('/')
  }

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton