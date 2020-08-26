import React from 'react';

const UnderConstruction = () => {
    const style = {
        color: '#cccccc',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '5rem',
		};

    return (
        <div style={style}>
            under construction...
						<span className="cursor">|</span>
        </div>
    );
}

export default UnderConstruction;