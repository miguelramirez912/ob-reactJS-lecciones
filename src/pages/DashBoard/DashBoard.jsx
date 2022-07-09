import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Copyright from '../../components/pure/copyright';

const DashBoard = () => {

    const navigate = useNavigate();

    const logOut = () => {
        navigate('/login')
    }

    return ( 
        <div>
            <Button variant="contained" onClick={logOut}>LogOut</Button>
            <Copyright/>
        </div>
    )
}

export default DashBoard;