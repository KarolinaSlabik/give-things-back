import React, {useState} from 'react';
import {Link as LinkRouter} from "react-router-dom";
import DecorativeElement from "../utils/DecorativeElement";
import LogRegiAndNav from "../utils/LogRegiAndNav";
import InputAndLabel from "../utils/InputAndLabel";

const SignUp = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [repeatPasswordValue, setRepeatPasswordValue] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [repeatPasswordError, setRepeatPasswordError] = useState(false);
    const changelogInEvent = (event) => {
        setEmailValue(event.target.value);
    }
    const changePasswordEvent = (event) => {
        setPasswordValue(event.target.value);
    }
    const changeRepeatPasswordEvent = (event) => {
        setRepeatPasswordValue(event.target.value);
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

        if(repeatPasswordValue !== passwordValue){
            setRepeatPasswordError(true);
        } else {
            setRepeatPasswordError(false);
        }

        if( emailValueValidation !== null && passwordValue.length >= 6 && repeatPasswordValue === passwordValue) {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            let findUser = false;
            users.forEach(element => {
                if(element.email === emailValue) {
                    findUser = true;
                    return false;
                }
            });
            if(findUser === true) {
                setEmailError(true);
            } else {
                let user = {email : emailValue, password : passwordValue};
                let allUsersAndNewUser = JSON.stringify([...users, user]);
                localStorage.setItem("users", allUsersAndNewUser);
                window.location.href = '/zarejestrowano';
            }
        }
    };

    return <>
        <LogRegiAndNav/>
        <div className="signUpContainer">
            <div className="signUpTitle">
                Załóż konto
            </div>
            <DecorativeElement />
            <form className="signUpForm" onSubmit={onSubmitForm}>
                <div className="signUpGreyBox">
                    <div className="signUpInputBox">
                        <InputAndLabel type="text" changeValue={changelogInEvent}  value={emailValue} errorText="Podany email jest nieprawidłowy!" error={emailError} labelValue="Email"/>
                        <InputAndLabel type="password" changeValue={changePasswordEvent}  value={passwordValue} errorText="Podane hasło jest za krótkie!" error={passwordError} labelValue="Hasło"/>
                        <InputAndLabel type="password" changeValue={changeRepeatPasswordEvent}  value={repeatPasswordValue} errorText="Podane hasło nie pasuje!" error={repeatPasswordError} labelValue="Powtórz hasło"/>
                    </div>
                </div>
                <div className="signUpButtonAndInputSubmitBox">
                    <LinkRouter to="/logowanie" className="signUpButton">Zaloguj się</LinkRouter>
                    <input type="submit" value="Załóż konto" className="signUpButton inputSubmit" />
                </div>
            </form>
        </div>
    </>
};

export default SignUp