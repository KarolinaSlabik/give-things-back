import React from 'react';
import {Link as LinkRouter} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

const SignUp = () => {
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
        <div className="signUpContainer">
            <div className="signUpTitle">
                Załóż konto
            </div>
            <div className="elementDecorationSignUp"></div>
            <form className="signUpForm">
                <div className="signUpGreyBox">
                    <div className="signUpInputBox">
                        <label htmlFor="email" className="signUpLabel">Email</label>
                        <input type="text" id="email" className="signUpInput" style={{marginBottom: "31px"}}/>
                        <label htmlFor="password" className="signUpLabel">Hasło</label>
                        <input type="text" id="password" className="signUpInput" style={{marginBottom: "31px"}}/>
                        <label htmlFor="passwordRepeat" className="signUpLabel">Powtórz hasło</label>
                        <input type="text" id="passwordRepeat" className="signUpInput"/>
                    </div>
                </div>
                <div className="signUpButtonAndInputSubmitBox">
                    <input type="submit" value="Zaloguj się" className="signUpButton InputSubmit" />
                    <LinkRouter to="rejestracja" className="signUpButton">Załóż konto</LinkRouter>
                </div>
            </form>
        </div>
    </>
};

export default SignUp