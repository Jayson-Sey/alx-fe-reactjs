import { Link } from 'react-router-dom'
import { useRecipeStore } from '../components/recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes)

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}/edit`}>Edit</Link>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  )
}

export default RecipeList