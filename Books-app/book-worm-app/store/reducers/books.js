import { BOOKS } from '../../data/Genres';

const initialState = {
    books: BOOKS,
    favoriteBooks: []
};

const booksReducer = (state = initialState, action) => {
    return state;
}

export default booksReducer;