
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "../components/home"
export const AppRouter = () => {




  return (
    <Routes>
             
                <Route path="/" element={ <Home/> }/>

              
    </Routes>
  )
}

// useEffect(() => {
//   checkAuthToken();
// }, [])


// if( status === 'checking' ){
//   return (
//     <h3> Cargando... </h3>
//   )
// }

// {
//   ( status === 'not-authenticated')
//   ? (
//       <>
//         <Route path="/auth/*" element={ <LoginPage/> }/>
//         <Route path="/*" element={ <Navigate to ="/auth/login"/> }/>
//       </> 
//   )
//   : (
//       <>
//         <Route path="/" element={ <CalendarPage/> }/>
//         <Route path="/*" element={ <Navigate to ="/"/> }/>
//       </>
//   )
  
// }