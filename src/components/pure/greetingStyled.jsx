import React, { useState } from "react";

const loggedStyle = {
    color: 'white'
}

const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    return (
        <div style= {logged ? loggedStyle : unLoggedStyle}>
            { logged ? <p>Hola, {props.name}</p> : <p>Please Login</p>}
            <button onClick={() => setLogged(!logged)}>{logged ? 'Log Out' : 'Log In'}</button>
        </div>
    )
}

export default GreetingStyled;