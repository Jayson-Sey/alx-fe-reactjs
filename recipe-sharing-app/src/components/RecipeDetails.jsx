import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from '../stores/recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = parseInt(id)
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  )

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div>
      <Link to="/">← Back to Recipes</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/recipe/${recipe.id}/edit`}>Edit Recipe</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  )
}

export default RecipeDetails