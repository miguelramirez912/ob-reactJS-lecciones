// AllCycles

export const AllCycles = () => {

    useEffect(() => {
        console.log('Componente Creado');

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log('Actualización del componente');
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "El tiempo se ha detenido"
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            <h1>WillUnmountHook</h1>
        </div>
    )
}