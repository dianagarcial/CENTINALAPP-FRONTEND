
import { Input } from "../input"

import Button from '@mui/material/Button'
import "../../styles/styles.css"
import "../../styles/login.css"
import "../../styles/boton.css"
export const Login= ()=>{

    return(
        <div className="Login">
        <div className="conte-login">
        <h1>Bienvenido de nuevo</h1>
        <h2>Ingresa a tu cuenta</h2>
        <form>
        <h3>Correo electronico</h3>
        <Input placeholder="example@mail.com" type="email"/>
        <h3>Contraseña</h3>
        <Input placeholder="Tu contraseña" type="password"/>
        <Button variant="contained" color="primary">Ingresa</Button>
        </form>
        </div>
        </div>
        
 
    )
}