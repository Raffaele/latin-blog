import React from 'react';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import './SendComment.css';

function SendComment({
    postId,
    text,
    fetch,
    updateText,
    commitText
}) {
    function sendMessage(evt) {
        evt.preventDefault();
        commitText(postId);
    }
    function textChange({ target }) {
        updateText(target.value);
    }
    function cleanBody() {
        updateText('');
    }
    return <LoadSpinner wait={fetch}>
        <form className="send-comment" onSubmit={sendMessage}>
            <h3 className="send-comment__title">SEND YOUR COMMENT</h3>
            <textarea className="send-comment__input" value={text} onChange={textChange}></textarea>
            <div className="send-comment__command-panel">
                <button data-selector="send-comment__submit" disabled={!text}>SEND</button>
                <button type="reset" onClick={cleanBody}>CANCEL</button>
            </div>
        </form>
    </LoadSpinner>;
}

export default SendComment;
