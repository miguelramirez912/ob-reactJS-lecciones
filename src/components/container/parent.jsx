import { useState } from "react";
import Child from "../pure/child";


const Parent = () => {

    const [name, setName] = useState('Anonimo')

    function showMessage(text) {
        alert(`Funcion gestionada desde el Padre: ${text}`)
    }

    function updateName(newName) {
        setName(newName)
    }

    return (
        <div style={{backgroundColor: 'tomato', padding: '10px'}}>
            <p>Componente Padre</p>
            <p>Hola, {name}</p>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>       
    )
}

export default Parent;