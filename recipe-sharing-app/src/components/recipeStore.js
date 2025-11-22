import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes)
  const searchTerm = useRecipeStore(state => state.searchTerm)
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
  
  // Use filtered recipes if there's a search term, otherwise use all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}/edit`}>Edit</Link>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
      {searchTerm && displayRecipes.length === 0 && (
        <p>No recipes found matching "{searchTerm}"</p>
      )}
    </div>
  )
}

export default RecipeList