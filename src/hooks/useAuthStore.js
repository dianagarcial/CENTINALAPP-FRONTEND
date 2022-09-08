import { useDispatch, useSelector } from "react-redux"

import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";
import { centinelApi } from "../api";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {

        dispatch( onChecking() );

        try {

            const { data } = await centinelApi.post('/superAdmin/log-in-superAdmin',{ email, password });
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ uid: data.uid, nombre: data.name, email: data.email, rol: data.rol }) );

        } catch (error) {

            dispatch( onLogout('Credenciales incorrectas') );

            setTimeout(() =>{
                dispatch( clearErrorMessage() )
            }, 10);

        }

    }

    const checkAuthToken = async() => {

        const token = localStorage.getItem('token')
        
        if( !token ) return dispatch( onLogout() );

        try {
            
            const { data } = await centinelApi.get('/superAdmin/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ id: data.id, nombre: data.name, email: data.email, rol: data.rol }) );

        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }

    }

    const startLogout = () => {

        localStorage.clear();
        dispatch( onLogout() );
        dispatch( onLogoutJugadores() )
        dispatch( onLogoutEquipos() )

    }

    return {

        status,
        user,
        errorMessage,

        checkAuthToken,
        startLogin,
        startLogout,

    }

}