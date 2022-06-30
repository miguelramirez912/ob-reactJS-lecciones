const { useState } = require("react")


const Ejemplo1 = () => {
    const valorInicial = 0;
    const personaInicial = {
        nombre: 'Miguel',
        email: 'mRamirez@correo.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    return(
        <div>
            <h1>Ejemplo useState</h1>
        </div>
    )
}

export default Ejemplo1;