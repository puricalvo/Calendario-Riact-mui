import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { HomeRoutes } from "../Calendario/routes/HomeRoutes";


export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* Calendario */}
        <Route path="/*" element={ <HomeRoutes /> } />
        
    </Routes>
  )
}
