// useContext

import React, { useState, useContext } from "react"

const miContexto = React.createContext(null)

const Componente1 = () =>{
    const state = useContext(miContexto);
    return(
        <div>
            <h1>El Token es {state.token}</h1>
            <Componente2/>
        </div>
    )
}

const Componente2 = () => {
    const state = useContext(miContexto); 
    return(
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    )
}

export default function MiComponenteConContexto() {
    const estadoCompartidoInicial = {
        token: '1234567',
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoCompartidoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JWT46868DRD',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return(
        <div>
            <miContexto.Provider value={sessionData}>
                <h1>Ejemplo de useState y useContext</h1>
                <Componente1/>
                <button onClick={actualizarSesion}>Nueva sesión</button>

            </miContexto.Provider>
        </div>
    )
}