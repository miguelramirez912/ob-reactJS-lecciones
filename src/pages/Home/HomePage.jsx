import { useNavigate, createSearchParams } from "react-router-dom";

const HomePage = () => {
    const history = useNavigate();

    const navigate = (path) => {
        history(`${path}`)
    }

    const navigateProps = (path) => {
        // history({
        //     pathname: path,
        //     search: '?online=true',
        //     state: {
        //         online: true
        //     }
        // })
        history(`${path}`, {        
            state: { id: 1, name: "sabaoon", online: true },
        })

        // history(
        //     {
        //         "pathname": path,
        //         "search": '?online=true',
        //         "hash": "",
        //         "state": true,
        //         "key": "46879"
        //       }
        // )
    
    }
    
    return (
        <div>
            <h1>HomePage</h1>
            <div>
                <button onClick={() => navigate('/profile')}>Ir al perfil</button>
                <p>Ir a la pagina componente que recibe estado y parametros query</p>
                <button onClick={() => navigateProps('/online-state')}>Ir al StatePage</button>
            </div>
        </div>
    )
}

export default HomePage;