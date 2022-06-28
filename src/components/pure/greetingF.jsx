import { useState } from "react";
import PropTypes from 'prop-types'


function Greetingf(props) {
    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age + 1);
    }

    return (
        <div>
            <h1>Hola!! {props.name} desde el componente funcional.</h1>
            <h2>Tu edad es {age} años.</h2>
            <button onClick={birthday}>Cumplir Años</button>
        </div>
    )
}

Greetingf.propTypes = {
    name: PropTypes.string
}

export default Greetingf;