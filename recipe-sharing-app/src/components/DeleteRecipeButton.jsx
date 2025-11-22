import { useRecipeStore } from './recipeStore'

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const store = useRecipeStore() // Get the whole store temporarily
  
  // Debug: log what's in the store
  console.log('Store contents:', store)
  console.log('deleteRecipe function:', store.deleteRecipe)
  
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  console.log('deleteRecipe from selector:', deleteRecipe)

  const handleDelete = () => {
    console.log('Deleting recipe:', recipeId)
    console.log('deleteRecipe function exists:', typeof deleteRecipe === 'function')
    
    if (typeof deleteRecipe === 'function') {
      deleteRecipe(recipeId)
      if (onDelete) onDelete()
    } else {
      console.error('deleteRecipe is not a function!')
    }
  }

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton