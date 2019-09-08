import React from 'react';
import PostList from './PostList';
import api from '../../api/api';
import storeManager from '../../store/store';

import { connect } from 'react-redux';

function mapPropsToState({posts, users}) {
    return {
        posts: posts.list,
        users: users.list,
        error: posts.error || users.error,
        fetching: posts.fetching || users.fetching,
        fetched: posts.fetched && users.fetched
    }
}

const PostListWrapper = connect(mapPropsToState)(PostList);

function PostListData() {
    const { store, POSTS_EVENTS, USERS_EVENTS } = storeManager;
    
    function updateData(events, dataGetter) {
        store.dispatch({
            type: events.SEND_AJAX_REQUEST
        });
        dataGetter.then(posts => {
            store.dispatch({
                type: events.RECEIVE_AJAX_REQUEST,
                payload: posts
            });
        }, error => {
            store.dispatch({
                type: events.AJAX_ERROR,
                payload: error
            });
        });
    }

    updateData(POSTS_EVENTS, api.getPostList());
    updateData(USERS_EVENTS, api.getUsersList());

    return <PostListWrapper />;
}

export default PostListData;
