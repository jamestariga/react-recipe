export const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    params: {
      query: {
        tags: 'vegetarian,dessert',
        number: '10'
      },
    },
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': 'b5ed35b3f4mshc5693e64c0a0002p14fd5bjsn1b977ba16559'
    }
  }