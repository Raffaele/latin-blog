import React from 'react';
import './LoadSpinner.css';

function Spinner({itemBackgroundColor}) {
    const componentClassName = 'lds-spinner';
    const subDivIndexes = Array.from({length:12}).map((a,b) => b);
    const divStyle = {
        backgroundColor:itemBackgroundColor || 'white'
    };
    return <div className={componentClassName}>
        <div className={`${componentClassName}__panel`}>
            {subDivIndexes.map(index=>{
                const className = `${componentClassName}__child-${index} ${componentClassName}__child`;
                return <div key={index} className={className} style={divStyle}></div>;
            })}
        </div>
    </div>;
}

export default Spinner;
