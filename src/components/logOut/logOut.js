import React from 'react';
import {Link as LinkRouter} from "react-router-dom";
import DecorativeElement from "../utils/DecorativeElement";
const LogOut = () => {
    return <>
        <div className="loginRegistrationAndNavigation">
            <div className="loginAndRegistration">
                <LinkRouter to="../logowanie" relative="path" className="logAndRegiLink">Zaloguj</LinkRouter>
                <LinkRouter to="../rejestracja" relative="path" className="logAndRegiLink">Załóż konto</LinkRouter>
            </div>
            <div className="navigation">
                <LinkRouter to="/">Start</LinkRouter>
                <LinkRouter to="/whatIsItAbout" relative="path">O co chodzi?</LinkRouter>
                <LinkRouter to="/aboutUs" relative="path">O nas</LinkRouter>
                <LinkRouter to="/whoWeHelp" relative="path">Fundacja i organizacje</LinkRouter>
                <LinkRouter to="/homeContact" relative="path">Kontakt</LinkRouter>
            </div>
        </div>
        <div className="logOutContainer">
            <div className="logOutTitle">
                Wylogowanie nastąpiło pomyślnie!
            </div>
            <DecorativeElement />
            <LinkRouter to="/" className="logOutButton">Strona główna</LinkRouter>
        </div>
    </>
};
export default LogOut
