import axios from 'axios';

const BASE_URL = 'https://nc-news-api-pah.herokuapp.com/api';

export const getArticles = () => {
  return axios
    .get(`${BASE_URL}/articles`)
    .then(res => res.data)
    .catch(err => err);
};

export const getArticlesByTopic = topic => {
  return axios
    .get(`${BASE_URL}/topics/${topic}/articles`)
    .then(res => res.data)
    .catch(err => err);
};

export const getArticleById = articleId => {
  return axios
    .get(`${BASE_URL}/articles/${articleId}`)
    .then(res => res.data)
    .catch(err => err);
};

export const getTopics = () => {
  return axios
    .get(`${BASE_URL}/topics`)
    .then(res => res.data)
    .catch(err => err);
};

export const addCommentByArticleId = (articleId, comment) => {
  return axios
    .post(`${BASE_URL}/articles/${articleId}/comments`, comment)
    .then(res => res.data)
    .catch(err => err);
};

export const getCommentsByArticleId = articleId => {
  return axios
    .get(`${BASE_URL}/articles/${articleId}/comments`)
    .then(res => res.data)
    .catch(err => err);
};

export const updateVotesByArticleId = (articleId, vote) => {
  return axios
    .patch(`${BASE_URL}/articles/${articleId}`, {
      inc_votes: vote,
    })
    .then(res => res.data)
    .catch(err => err);
};

export const updateVotesByCommentId = (articleId, vote, commentId) => {
  return axios
    .patch(`${BASE_URL}/articles/${articleId}/comments/${commentId}`, {
      inc_votes: vote,
    })
    .then(res => res.data)
    .catch(err => err);
};
