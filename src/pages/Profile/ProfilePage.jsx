import { useNavigate } from "react-router-dom";

const ProfilePage = ({user}) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const navigateTo = (path) => {
        navigate(`${path}`)
    }
    return(
        <div>
            <h1>Tu Perfil</h1>
            <button onClick={() => navigateTo('/tasks')}>Tus Tareas</button>
            <button onClick={goBack}>Atras</button>
        </div>
    )
}

export default ProfilePage;