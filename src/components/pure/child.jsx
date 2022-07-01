import { useRef } from "react";


const Child = ({name, send, update}) => {

    const miReferencia = useRef(null);
    const nameRef = useRef(null);

    function pressButton() {
        const text = miReferencia.current.value;
        alert(`Texto en el input: ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{backgroundColor: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('Pasando por encima del parrafo')}>Child Component</p>
            <button onClick={pressButton}>Boton Uno</button>
            {/* <button onClick={pressButtonParams('Hola!!')}>Boton Dos</button> */}
            <button onClick={() => pressButtonParams('Hola!!')}>Boton Dos</button>
            <input 
                placeholder="Envia Texto al componente padre"
                onFocus={() => console.log('Input Enfocado')}
                onChange={(e) => console.log('El input a cambiado: ', e.target.value)}
                onCopy={() => console.log('Texto copiado')}
                ref={miReferencia}
            />
            <button onClick={() => send(`Mensaje desde Child: ${miReferencia.current.value}`)}>Generar Msj</button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} type="text" placeholder="Nuevo Nombre" />
                    <button type="submit">Actualizar Nombre</button>
                </form>
            </div>
        </div>       
    )
}

export default Child;
