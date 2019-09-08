import { api as apiConfig } from '../config.json';
import axios from 'axios';
const apiList = {
    getPostList,
    getUsersList,
    getPostComments,
    postComment
};

function handleGetRequest(path) {
    return axios
        .get(`${apiConfig.basePath}/${path}`)
        .then(({ data }) => data);
}

function getPostList(postIds=[]) {
    const queryString = postIds.map(postId => `id=${postId}`).join('&');
    const queryRequest = `posts?${queryString}`;
    return handleGetRequest(queryRequest);
    // return axios
    //     .get(queryRequest)
    //     .then(filterDataAttr);
}

function getUsersList(userIds = []) {
    const queryString = userIds.map(userId => `id=${userId}`).join('&');
    const queryRequest = `users?${queryString}`;
    return handleGetRequest(queryRequest);
    // return axios
    //     .get(queryRequest)
    //     .then(filterDataAttr);
}

function getPostComments(postId) {
    const queryRequest = `comments?postId=${postId}`;
    return handleGetRequest(queryRequest);
    // return axios
    //     .get(queryRequest)
    //     .then(filterDataAttr);
}

function postComment(postId, body, authorName, authorEmail) {
    const queryRequest = `${apiConfig.basePath}/comments`;
    return axios.post(queryRequest, {
        postId,
        body,
        name: authorName,
        email: authorEmail
    }).then(({ data }) => data);
}

export default apiList;