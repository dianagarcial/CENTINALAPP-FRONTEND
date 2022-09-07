
import { Route, Routes, Navigate } from "react-router-dom"
import { AddUsuario } from "../components/views/addUsuario"
import { AddUsuarioFicha } from "../components/views/addUsuarioFicha"
import { AddUsuarioRama } from "../components/views/addUsuarioRama"
import { Home } from "../components/views/home"
import { Login } from "../components/views/login"
export const AppRouter = () => {


  return (
    <Routes>
             
                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/addAdministrador" element={ <AddUsuario/> }/>
                <Route path="/addRama" element={ <AddUsuarioRama/> }/>
                <Route path="/addScout" element={ <AddUsuarioFicha/>}/>
        </Routes>
  )
}

