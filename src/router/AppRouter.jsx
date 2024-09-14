import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { HomeRoutes } from "../Calendario/routes/HomeRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";


export const AppRouter = () => {

  const status = useCheckAuth();
  
  if ( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <Routes>

        {
          (status === 'authenticated')
          ? <Route path="/*" element={ <HomeRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } /> 
        }

        <Route path="/*" element={ <Navigate to='/auth/login' />} />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* Calendario */}
        {/* // <Route path="/*" element={ <HomeRoutes /> } /> */}
        
    </Routes>
  )
}
