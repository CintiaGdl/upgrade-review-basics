/* 
Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las 
categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías n
o deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes()
*/
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categoriesMovie = [];
for (const movie of movies) {
    for (const categories of movie.categories) {
        if (categoriesMovie.includes(categories) == false) {
            categoriesMovie.push(categories);
        }
    }
}
console.log(categoriesMovie);