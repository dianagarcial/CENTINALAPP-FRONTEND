
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../components/home"
export const AppRouter = () => {


  return (
    <Routes>
             
                <Route path="/" element={ <Home/> }/>

              
    </Routes>
  )
}

