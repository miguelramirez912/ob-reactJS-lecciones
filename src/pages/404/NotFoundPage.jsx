import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const goToPage = (path) => {
        navigate(`${path}`);
    } 
    return(
        <div>
            <h1>404 - Pagina no Encontrada</h1>
            <button onClick={() => goToPage('/')}>Home</button>
        </div>
    )
}

export default NotFoundPage;