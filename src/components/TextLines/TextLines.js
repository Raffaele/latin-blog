import React from 'react';

function TextLines({ text }) {
    const lines = text.split('\n');
    return <div className="text-lines">
        {lines.map((line, lineIndex) => <div key={lineIndex} className="text-lines__line">
            {line}
        </div>)}
    </div>;
}

export default TextLines;
