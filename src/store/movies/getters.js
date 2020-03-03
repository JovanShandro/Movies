export const movies = (state) => (state.movies)
export const get_by_id= (state) => id => {
    return state.movies.find(movie => movie.id == id);
}