
import { Input } from "../input"
import { useNavigate } from 'react-router-dom';


import Button from '@mui/material/Button'
import "../../styles/styles.css"
import "../../styles/login.css"
import "../../styles/boton.css"
import { useSelector } from "react-redux";
import { useAuthStore, useForm } from "../../hooks";

const loginForm = {
    email: '',
    password: '',
}

export const Login= ()=>{
    
    const { errorMessage } = useSelector( state => state.auth);
    const { email, password, onInputChange } = useForm(loginForm);
    const { startLogin } = useAuthStore();    

    const loginSubmit = (e) => {
      e.preventDefault();
      startLogin({ email, password});
      //console.log({email, password});
    }

    return(
        <div className="Login">
        <div className="conte-login">
        <h1>Bienvenido de nuevo</h1>
        <h2>Ingresa a tu cuenta</h2>
        <form onSubmit={loginSubmit}>
        <h3>Correo electronico</h3>
        <Input name="email" value={ email } onChange={ onInputChange } placeholder="example@mail.com" type="email"/>
        <h3>Contraseña</h3>
        <Input name="password" value={ password } onChange={ onInputChange } placeholder="Tu contraseña" type="password"/>
        <Button variant="contained" color="primary" type="submit">Ingresa</Button>
        </form>
        </div>
        </div>
    )
}