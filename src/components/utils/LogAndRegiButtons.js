import React from 'react';
import {Link as LinkRouter} from "react-router-dom";
const LogAndRegiButtons = () => {
    return <>
        <div className="loginAndRegistration">
            <LinkRouter to="../logowanie" relative="path" className="logAndRegiLink">Zaloguj</LinkRouter>
            <LinkRouter to="../rejestracja" relative="path" className="logAndRegiLink">Załóż konto</LinkRouter>
        </div>
    </>
};
export default LogAndRegiButtons