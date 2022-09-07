import { Input } from "../input"
import { Navbar } from "../navbar"
import Button from '@mui/material/Button'
import "../../styles/boton.css"
import "../../styles/styles.css"
import "../../styles/login.css"
import { Header } from "../header"
import { Select } from "../select"
import { TextArea } from "../textArea"
export const AddUsuarioFicha= ()=>{

    return(
        <div className="contenido">
        <div className="conte-general">
        <Header/>
        <h1>Añadir scout</h1>
        <h2>En este formulario puedes crear un nuevo usuario</h2>
        <h3>Asignar rama</h3>
        <Select placeholder="Selecciona una opción" option="Numero 1"/>
        
        <h3>Ficha medica</h3>
        <Input placeholder="Imagen" type="file" />
        <h3>Fecha de nacimiento</h3>
        <Input placeholder="Imagen" type="date" />
        <h3>Numero celuar</h3>
        <Input placeholder="Imagen" type="number" />
        <Button variant="contained" color="primary">Crear</Button>
        <Button variant="outlined" color="primary">Cancelar</Button>
        
        </div>
        <Navbar/>
        </div>
        
 
    )
}