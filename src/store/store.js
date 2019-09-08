import { createStore, combineReducers } from 'redux';
import postsManager from './posts/postsStoreManager';
import usersManager from './users/usersStoreManager';
import commentsManager from './comments/commentsStoreManager';
import commentSenderManager from './commentSender/commentSenderStoreManager';
import loggedUserManager from './loggedUser/loggedUserStoreManager';

const combinedReducer = combineReducers({
    posts: postsManager.reducer,
    users: usersManager.reducer,
    comments: commentsManager.reducer,
    commentText: commentSenderManager.reducer,
    loggedUser: loggedUserManager
});

const { devToolsExtension } = window;
const store = createStore(combinedReducer, devToolsExtension && devToolsExtension());

export default {
    store,
    POSTS_EVENTS: postsManager.EVENTS,
    USERS_EVENTS: usersManager.EVENTS,
    COMMENTS_EVENTS: commentsManager.EVENTS,
    COMMENT_SENDER_EVENTS: commentSenderManager.EVENTS
};
