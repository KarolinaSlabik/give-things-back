import React from 'react';
import {Link as LinkRouter} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

const LogIn = () => {
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
        <div className="logInContainer">
            <div className="logInTitle">
                Zaloguj się
            </div>
            <div className="elementDecorationLogIn"></div>
            <form className="logInForm">
                <div className="logInGreyBox">
                    <div className="logInInputBox">
                        <label htmlFor="email" className="logInLabel">Email</label>
                        <input type="text" id="email" className="logInInput" style={{marginBottom: "31px"}}/>
                        <label htmlFor="password" className="logInLabel">Hasło</label>
                        <input type="text" id="password" className="logInInput"/>
                    </div>
                </div>
                <div className="logInButtonAndInputSubmitBox">
                    <LinkRouter to="rejestracja" className="logInButton">Załóż konto</LinkRouter>
                    <input type="submit" value="Zaloguj się" className="logInButton InputSubmit" />
                </div>
            </form>
        </div>
    </>
};

export default LogIn