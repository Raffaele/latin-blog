import React from 'react';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import PostDetails from './PostDetails';

function PostDetailsSpinner(props) {
    const {
        authorId,
        postId,
        posts,
        users,
        comments,
        error,
        fetched,
        fetching
    } = props;
    const selectedPost = posts.find(post => post.id === postId);
    const selectedAuthor = users.find(user => user.id === authorId);
    return <div className="post-details-spinner">
        <LoadSpinner wait={fetching}>
            {fetched && <PostDetails post={selectedPost} author={selectedAuthor} comments={comments} />}
        </LoadSpinner>
    </div>;
}

export default PostDetailsSpinner;