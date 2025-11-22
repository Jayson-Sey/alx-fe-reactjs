import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  const handleFavoriteToggle = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
      generateRecommendations();
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <button onClick={() => handleFavoriteToggle(recipe.id)}>
            {favorites.includes(recipe.id) ? '★ Remove from Favorites' : '☆ Add to Favorites'}
          </button>
          <Link to={`/recipe/${recipe.id}/edit`}>Edit</Link>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;