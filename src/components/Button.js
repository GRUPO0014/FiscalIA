import React from 'react';

function Button() {
    const [darkMode, setDarkMode] = React.useState(false);
    let text = !darkMode? "DarkMode": "LightMode";
    const clickHandler = () => {
        setDarkMode(!darkMode);
    }
    return (
        <button className="button" onClick={clickHandler}>
        {text}
        </button>
    );
    }

export default Button;