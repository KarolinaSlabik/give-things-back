import React, {useRef, useState} from 'react';
import { Element as ElementScroll } from 'react-scroll';
import {Link as LinkRouter} from "react-router-dom";
const HomeContact = () => {

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const successMessage = useRef(null);


    const changeNameValue = (event) => {
        setNameValue(event.target.value);
    };
    const changeEmailValue = (event) => {
        setEmailValue(event.target.value);
    };
    const changeMessageValue = (event) => {
        setMessageValue(event.target.value);
    };
    const onSubmitForm = (event) => {
        event.preventDefault();
        successMessage.current.style.display = "none";
        
        if(nameValue.indexOf(" ") !== -1){
            setNameError(true);
        } else {
            setNameError(false);
        }
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

        if(messageValue.length <= 120){
            setMessageError(true);
        } else {
            setMessageError(false);
        }

        if(nameValue.indexOf(" ") === -1 && emailValueValidation !== null && messageValue.length > 120) {
            console.log("hura");
            const data = {
                name: nameValue,
                email: emailValue,
                message: messageValue
            }

            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', options)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    if(json.status === "success") {
                        successMessage.current.style.display = "block";
                    } else {
                        successMessage.current.style.display = "none";
                    }
                });
        }
    };

    let nameInputElement;

    if(nameError === true) {
        nameInputElement = <>
            <input type="text" id="name" onChange={ changeNameValue } placeholder="Krzysztof" className="nameAndEmailInput errorLine"/>
            <div className="errorText"> Podane imię jest nieprawidłowe!</div>
        </>
    } else {
        nameInputElement = <input type="text" id="name" onChange={ changeNameValue } placeholder="Krzysztof" className="nameAndEmailInput"/>
    }
    let emailInputElement;

    if(emailError === true) {
        emailInputElement = <>
            <input type="text" id="email" onChange={ changeEmailValue } placeholder="abc@xyz.pl" className="nameAndEmailInput errorLine"/>
            <div className="errorText"> Podany email jest nieprawidłowy!</div>
        </>
    } else {
        emailInputElement = <input type="text" id="email" onChange={ changeEmailValue } placeholder="abc@xyz.pl" className="nameAndEmailInput"/>
    }

    let messageInputElement;

    if(messageError === true) {
        messageInputElement = <>
            <textarea id="textArea" onChange={ changeMessageValue } name="textArea" className="errorLine" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." >
            </textarea>
            <div className="errorText"> Wiadomość musi mieć conajmniej 120 znaków!</div>
        </>
    } else {
        messageInputElement = <textarea id="textArea" onChange={ changeMessageValue } name="textArea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ></textarea>
    }

    return <>
        <ElementScroll name="homeContact" className="ContactSection">
            <div className="ContactTransparentApla">
                <div className="ContactContainer">
                    <div className="ContactTitle">Skontaktuj się z nami</div>
                    <div className="ContactDecorations"></div>
                    <div className="successText" ref={ successMessage } style={{display: "none"}}>
                        Wiadomość została wysłana!<br></br> Wkrótce się skontaktujemy.
                    </div>
                    <form className="ContactForm" onSubmit={onSubmitForm}>
                        <div className="inputBigBox">
                            <div className="inputBox">
                                <label htmlFor="name" className="nameAndEmailLabel">Wpisz swoje imię</label><br></br>
                                { nameInputElement }
                            </div>
                            <div className="inputBox">
                                <label htmlFor="email" className="nameAndEmailLabel">Wpisz swój email</label><br></br>
                                { emailInputElement }
                            </div>
                        </div>
                        <div className="textareaBigBox">
                            <label htmlFor="textArea" className="textareaLabel">Wpisz swoją wiadomość</label> <br></br>
                            { messageInputElement }
                            <input type="submit" value="Wyślij" className="inputSubmit" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="footerContainer">
                    <div className="copyrightText"> Copyright by Coders Lab </div>
                    <div className="socialMediaIconBox">
                        <div className="socialMediaIcon FacebookIcon"></div>
                        <div className="socialMediaIcon InstagramIcon"></div>
                    </div>
                </div>
            </div>
        </ElementScroll>
    </>
};

export default HomeContact
