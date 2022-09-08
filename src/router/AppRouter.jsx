
import { Route, Routes, Navigate } from "react-router-dom"
import { AddUsuario } from "../components/views/addUsuarioAdm"
import { AddUsuarioFicha } from "../components/views/addUsuarioScout"
import { AddRama } from "../components/views/addRama"
import { Home } from "../components/views/home"
import { Login } from "../components/views/login"
import { useAuthStore } from "../hooks"
import { useEffect } from "react"

export const AppRouter = () => {

    const { status, user, checkAuthToken } = useAuthStore()

    useEffect(() => {
      checkAuthToken();
    }, [])
    

    if( status === 'checking'){

      return (
        <h1>Cargando...</h1>
      )}


  return (
    <Routes>
        {

          ( status === 'not-authenticated' )
          ? (
            <>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/*" element={ <Navigate to ="/login"/> }/>
                
            </>
          )
          :(
            ( user.rol === 0 )
            ?(
                <>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/addAdministrador" element={ <AddUsuario/> }/>
                  <Route path="/addRama" element={ <AddRama/> }/>
                  <Route path="/addScout" element={ <AddUsuarioFicha/>}/>
                  <Route path="/*" element={ <Navigate to ="/"/> }/>
                </>
              )
            :(
              <>
                <h1>Otras rutas</h1>
              </>
            )
          )
        }
      </Routes>
  )
}


