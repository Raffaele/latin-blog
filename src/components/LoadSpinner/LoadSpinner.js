import React from 'react';
import Spinner from './Spinner';
import './LoadSpinner.css';

function LoadSpinner({itemBackgroundColor, wait, children}) {
    return wait ?
        <Spinner itemBackgroundColor={itemBackgroundColor} /> :
        children;
}

export default LoadSpinner;