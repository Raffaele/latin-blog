import React from 'react';
import TextLines from '../TextLines/TextLines';

import './CommentDetails.css';

function CommentDetails({ comment }) {
    const { email, name, body } = comment;
    return <div className="comment-details">
        <div className="comment-details__author">
            <a className="comment-details__author__link" href={`mailto:${email}`}>{name}</a>
        </div>
        <div className="comment-details__body">
            <TextLines text={body} />
        </div>
        
    </div>;
}

export default CommentDetails;
