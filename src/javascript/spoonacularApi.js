const BASE_URL = "https://api.spoonacular.com";
const API_KEY = "561e170c23704ee6bcc12614294109f6"; // Reemplaza con tu API key de Spoonacular

const fetchApi = async (endpoint, params = {}) => {
  const url = new URL(endpoint, BASE_URL);
  url.search = new URLSearchParams({ ...params, apiKey: API_KEY });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

// Modificada para solicitar 3 recetas aleatorias
const getSpoonacularRandomRecipes = async (tags) => {
  //hacemos un tags tolowercase para que no haya problemas con las mayúsculas
  tags = tags.toLowerCase();
  const params = { number: 3, tags }; // Aquí puedes especificar los tags que quieras, por ejemplo: 'chicken'
  const data = await fetchApi("/recipes/random", params);
  console.log(data);
  return data.recipes;
};

export const spoonacularClient = {
  getRandomRecipes: getSpoonacularRandomRecipes,
};
