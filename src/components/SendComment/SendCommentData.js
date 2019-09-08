import React from 'react';
import SendComment from './SendComment';
import api from '../../api/api';
import storeManager from '../../store/store';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        text: state.commentText,
        fetch: state.comments.updatedFetching
    };
}

function mapDispatchToProps(dispatch) {
    const { store } = storeManager;
    return {
        updateText: text => {
            dispatch({
                type: storeManager.COMMENT_SENDER_EVENTS.CHANGE_TEXT,
                payload: text
            });
        },
        commitText: (postId) => {
            dispatch({
                type: storeManager.COMMENTS_EVENTS.UPDATE_LIST
            });
            const bodyComment = store.getState().commentText;
            const { name, email } = store.getState().loggedUser;
            api.postComment(postId, bodyComment, name, email)
                .then(() => api.getPostComments(postId))
                .then(comments => {
                    dispatch({
                        type: storeManager.COMMENTS_EVENTS.RECEIVE_AJAX_REQUEST,
                        payload: comments
                    });
                    dispatch({
                        type: storeManager.COMMENT_SENDER_EVENTS.CHANGE_TEXT,
                        payload: ''
                    });
                });
        }
    };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const ConnectedSendComment = connector(SendComment);

function SendCommentData({postId}) {
    return <ConnectedSendComment postId={postId} />;
}

export default SendCommentData;
