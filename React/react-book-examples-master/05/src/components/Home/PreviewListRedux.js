const initialState = {
  loading: true,
  error: false,
  articleList: [],
};

const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

// export function loadArticles() {
//   return {
//     types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
//     url: '/api/articles.json',
//   };
// }
function requestArticles(){
  return {
    type:LOAD_ARTICLES
  }
}
function receivePosts(json){
  return {
    type:LOAD_ARTICLES_SUCCESS,
    payload:json
  }

}
// 异步的操作
export function loadArticles(){
  return dispatch=>{
    dispatch(requestArticles());
    return fetch('./api/articles.json')
    .then(response =>response.json())
    .then(json=>dispatch(receivePosts(json)))
  }

}



export default function previewList(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ARTICLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.payload,
      };
    }

    case LOAD_ARTICLES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
}
