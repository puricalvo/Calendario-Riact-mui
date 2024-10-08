import { Link as RouterLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Link } from '@mui/material';





export const TareaMes = () => {

    const { user } = useAuthStore();


  return (
    <div className="navbar navbar-dark bg-danger  mb-4 px-4">
        <span className="navbar-brand" >
            <i>
                <CalendarMonthIcon/>
            </i>
            { user.name }
        </span>

        <button className="btn btn-outline-danger bg-white">
        <Link component={ RouterLink } color='inherit' to="/">
            <i>< LogoutIcon/></i>
            <span>Salir</span>
        </Link>
        </button>
    </div>
  )
}
