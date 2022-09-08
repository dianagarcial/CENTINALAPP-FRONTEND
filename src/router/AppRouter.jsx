
import { Route, Routes, Navigate } from "react-router-dom"
import { AddUsuario } from "../components/views/addUsuarioAdm"
import { AddUsuarioFicha } from "../components/views/addUsuarioScout"
import { AddRama } from "../components/views/addRama"
import { Home } from "../components/views/home"
import { Login } from "../components/views/login"
export const AppRouter = () => {


  return (
    <Routes>
             
                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/addAdministrador" element={ <AddUsuario/> }/>
                <Route path="/addRama" element={ <AddRama/> }/>
                <Route path="/addScout" element={ <AddUsuarioFicha/>}/>
        </Routes>
  )
}

