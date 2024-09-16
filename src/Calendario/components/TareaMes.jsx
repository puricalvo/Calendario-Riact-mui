import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';





export const TareaMes = () => {
  return (
    <div className="navbar navbar-dark bg-danger  mb-4 px-4">
        <span className="navbar-brand" >
            <i>
                <CalendarMonthIcon/>
            </i>
            Puri
        </span>

        <button className="btn btn-outline-danger bg-white">
            <i>
                < LogoutIcon/>
            </i>
            <span>Salir</span>
        </button>
    </div>
  )
}
