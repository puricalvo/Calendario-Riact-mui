import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";


// import { HomePage } from "../Calendario/pages/HomePage";
import { CalendarPage } from "../Calendario/pages/CalendarPage";


export const AppRouter = () => {

  const authStatus = 'authenticated'; // not-authenticated // authenticated
  
  

  return (
    <Routes>

        {
          (authStatus === 'not-authenticated')
          ? <Route path="/auth/*" element={ <AuthRoutes /> } /> 
          : <Route path="/*" element={ <CalendarPage /> } />
        }

        <Route path="/*" element={ <Navigate to='/auth/login' />} />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* Calendario */}
        {/* // <Route path="/*" element={ <HomeRoutes /> } /> */}
        
    </Routes>
  )
}
