import {useLocation, useNavigate} from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    console.log('Estammos en la ruta: ', location.pathname);

    // const history = useHistory();
    const history = useNavigate();

    const navigate = (path) => {
        history(`${path}`)
    }

    const goBack = () => {
        history(-1)
    }

    const goForward = () => {
        history(1)
    }
    
    

    return (
        <div>
            <h1>About | FAQs </h1>
            <div>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={goBack}>Atras</button>
                <button onClick={goForward}>Adelante</button>
            </div>
        </div>
    )
}

export default AboutPage;