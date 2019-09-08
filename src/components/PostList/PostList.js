import React from 'react';
import { Link } from 'react-router-dom';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import UserDetails from '../UserDetails/UserDetails';

import './PostList.css';

function PostList({
    posts,
    users,
    fetching,
    fetched,
    error
}) {
    return <div className="post-list">
        <h3 className="post-list__title">Post List</h3>
        <LoadSpinner wait={fetching}>
            <ul className="unstiled-list">
                {posts.map(post => {
                    return <li key={post.id} className="post-list__list-item">
                        <div className="post-list__list-item__post-author">
                            <UserDetails data={users.find(user => user.id === post.userId)} />
                        </div>
                        <div className="post-list__list-item__post-title">
                            <Link to={`/post/author-${post.userId}/post-${post.id}`}>
                                {post.title}
                            </Link>
                        </div>
                    </li>;
                })}
            </ul>
        </LoadSpinner>
    </div>;
}

export default PostList;