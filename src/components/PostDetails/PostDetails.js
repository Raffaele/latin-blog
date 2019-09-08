import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import { Link } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';
import TextLines from '../TextLines/TextLines';
import SendComment from '../SendComment/SendCommentData';

import './PostDetails.css';

function PostDetails({
    author,
    post,
    comments
}) {
    return <div className="post-details">
        <header className="post-details__header">
            <span className="post-details__header__home-link">
                <Link to="/">HOME</Link>
            </span>
            <h3 className="post-details__header__title">{post.title}</h3>
        </header>
        <section className="post-details__synthesis">
            <span className="post-details__synthesis__post-author">
                <UserDetails data={author} />
            </span>
            <span className="post-details__synthesis__post-body">
                <TextLines text={post.body} />
            </span>
        </section>
        {comments.length && <div>
            <ul className="unstiled-list">
                {comments.map(comment => <li key={comment.id} data-selector="post-details__comment__list-item">
                    <CommentDetails comment={comment} />
                </li>)}
            </ul>
        </div>}
        <SendComment postId={post.id} />
    </div>;
}

export default PostDetails;