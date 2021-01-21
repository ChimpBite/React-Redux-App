import axios from 'axios';

import { ArticleActionTypes } from './article.types';

// axios call to api
export const fetchArticles = () => {
  const promise = axios.get(
    'https://test.spaceflightnewsapi.net/api/v2/articles'
  );
  return dispatch => {
    dispatch({ type: ArticleActionTypes.FETCHING_ARTICLES });
    promise
      .then(response => {
        dispatch({
          type: ArticleActionTypes.ARTICLE_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ArticleActionTypes.ARTICLE_FETCH_ERROR });
      });
  };
};
