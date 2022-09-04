import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { Select } from "../select"
export const AddUsuario= ()=>{

    return(
        <div className="Login">
        <div className="conte-login">
        <Header/>
        <h1>Añadir usuario</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <h3>Tipo</h3>
        <Select placeholder="Selecciona una opción" option="Numero 1"/>
        
        <h3>Nombre</h3>
        <Input placeholder="Nueva publicación" type="text"/>
        <h3>Apellido</h3>
        <Input placeholder="Nueva publicación" type="text"/>
        <h3>Correo electronico</h3>
        <Input placeholder="Nueva publicación" type="email"/>
        
        <Button variant="contained" color="primary">Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        
        </div>
        <Navbar/>
        </div>
        
 
    )
}