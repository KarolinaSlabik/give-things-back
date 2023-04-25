import React, { useState } from 'react';
import {Link as LinkRouter} from "react-router-dom";
import DecorativeElement from "../utils/DecorativeElement";
import LogRegiAndNav from "../utils/LogRegiAndNav";
import InputAndLabel from "../utils/InputAndLabel";
const LogIn = () => {
    const [emailValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const changelogInEvent = (event) => {
        setLoginValue(event.target.value);
    }
    const changePasswordEvent = (event) => {
        setPasswordValue(event.target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();

        let emailValueValidation = String(emailValue)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        if(emailValueValidation === null){
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if(passwordValue.length < 6){
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        if( emailValueValidation !== null && passwordValue.length >= 6) {
            //zapisanie do pamięci
        }
    };

    return <>
        <LogRegiAndNav/>
        <div className="logInContainer">
            <div className="logInTitle">
                Zaloguj się
            </div>
            <DecorativeElement/>
            <form className="logInForm" onSubmit={onSubmitForm}>
                <div className="logInGreyBox">
                    <div className="logInInputBox">
                        <InputAndLabel type="text" changeValue={changelogInEvent}  value={emailValue} errorText="Podany email jest nieprawidłowy!" error={emailError} labelValue="Email"/>
                        <InputAndLabel type="password" changeValue={changePasswordEvent} value={passwordValue} errorText="Podane hasło jest za krótkie!" error={passwordError} labelValue="Hasło"/>
                    </div>
                </div>
                <div className="logInButtonAndInputSubmitBox">
                    <LinkRouter to="/rejestracja" className="logInButton">Załóż konto</LinkRouter>
                    <input type="submit" value="Zaloguj się"  className="logInButton inputSubmit"/>
                </div>
            </form>
        </div>
    </>
};
export default LogIn