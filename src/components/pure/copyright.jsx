// Componentes de MaterialUI
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const Copyright = () => {
    return(
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyrigth (C)'}
            <Link color='inherit' href='https://imaginaformacion.com'>
                Imagina Formación
            </Link>
            {' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

export default Copyright