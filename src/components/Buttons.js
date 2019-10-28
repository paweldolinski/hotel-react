import React from 'react';


const Buttons = ({ children, action }) => {
    return (
        <button className="btn" onClick={action}>{children}</button>
    );
}

export default Buttons; 