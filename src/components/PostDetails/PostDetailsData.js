import React from 'react';
import PostDetailsSpinner from './PostDetilsSpinner';
import api from '../../api/api';
import storeManager from '../../store/store';

import { connect } from 'react-redux';

function mapPropsToState({posts, users, comments}) {
    return {
        posts: posts.list,
        users: users.list,
        comments: comments.list,
        error: posts.error || users.error || comments.error,
        fetching: posts.fetching || users.fetching || comments.fetching,
        fetched: posts.fetched && users.fetched && comments.fetched
    }
}

const PostDetailWrapper = connect(mapPropsToState)(PostDetailsSpinner);

function getStoredUser(userId) {
    return getDataUsers(userId, 'users');
}

function getStoredPost(postId) {
    return getDataUsers(postId, 'posts');
}

function getDataUsers(id, dataType) {
    const state = storeManager.store.getState();
    const storedData = state[dataType].list;
    const numericId = parseInt(id);
    return storedData.find(item => item.id === numericId);
}

function loadUser(userId) {
    const storedUser = getStoredUser(userId);
    if (!storedUser)
        loadInfo([userId], storeManager.USERS_EVENTS, api.getUsersList);
}

function loadPost(postId) {
    const storedPost = getStoredPost(postId);
    if (!storedPost)
        loadInfo([postId], storeManager.POSTS_EVENTS, api.getPostList);
}

function loadComments(postId) {
    loadInfo(postId, storeManager.COMMENTS_EVENTS, api.getPostComments);
}

function loadInfo(requestParam, eventyType, apiRequest) {
    storeManager.store.dispatch({
        type: eventyType.SEND_AJAX_REQUEST
    });
    apiRequest(requestParam).then(data => {
        storeManager.store.dispatch({
            type: eventyType.RECEIVE_AJAX_REQUEST,
            payload: data
        });
    });
}

function PostDetailsData({match}) {
    const { authorId, postId } = match.params;
    loadUser(authorId);
    loadPost(postId);
    loadComments(postId);
    return <PostDetailWrapper authorId={parseInt(authorId)} postId={parseInt(postId)} />;
}

export default PostDetailsData;