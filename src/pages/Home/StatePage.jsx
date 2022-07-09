import { useLocation } from "react-router-dom";

const StatePage = () =>{
    
    const location = useLocation();
    console.log(location); //Estado recibido
    // console.log(location.state.online); //Estado recibido
    // console.log(location.search); //Parametros query recibidos
    
    return (
        <div>
            <h1>State: {location.state.online ? 'El usuario esta en linea' : 'El usuarion esta fuera de linea'}</h1>
        </div>
    )
}

export default StatePage;