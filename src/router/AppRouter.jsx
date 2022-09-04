
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
                <Route path="/addUser" element={ <AddUsuario/> }/>
                <Route path="/addUserRama" element={ <AddUsuarioRama/> }/>
                <Route path="/addUserFicha" element={ <AddUsuarioFicha/>}/>
        </Routes>
  )
}

