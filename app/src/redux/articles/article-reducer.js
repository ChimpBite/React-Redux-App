import { ArticleActionTypes } from './article.types';

const initialState = {
  articles: [],
  fetchingArticles: false,
  error: '',
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ArticleActionTypes.FETCHING_ARTICLES:
      return { ...state, fetchingArticles: true }; //set true if fetching
    case ArticleActionTypes.ARTICLE_FETCH_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, action.payload], // build out article array
        fetchArticles: false,
        // no longer fetch, set to false
      };
    case ArticleActionTypes.ARTICLE_FETCH_ERROR:
      return {
        ...state,
        fetchingArticles: false, // no longer fetching, set to false
        error: 'Error fetching articles', // error
      };
    default:
      return state;
  }
};

export default articleReducer;
