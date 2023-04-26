import React, {useRef, useState} from 'react';
import { Element as ElementScroll } from 'react-scroll';
import DecorativeElement from "../utils/DecorativeElement";
import InputAndLabel from "../utils/InputAndLabel";
import HomeFooter from "./HomeFooter";
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
        <ElementScroll id="homeContact" name="homeContact" className="contactSection">
            <div className="contactTransparentApla">
                <div className="contactContainer">
                    <div className="contactTitle">Skontaktuj się z nami</div>
                    <DecorativeElement />
                    <div className="successText" ref={ successMessage } style={{display: "none"}}>
                        Wiadomość została wysłana!<br></br> Wkrótce się skontaktujemy.
                    </div>
                    <form className="contactForm" onSubmit={onSubmitForm}>
                        <div className="inputBigBox">
                            <InputAndLabel type="text" changeValue={changeNameValue} value={nameValue} placeholderValue="Krzysztof" errorText="Podane imię jest nieprawidłowe!" labelValue="Wpisz swoje imię" error={nameError} />
                            <InputAndLabel type="text" changeValue={changeEmailValue} value={emailValue} placeholderValue="abc@xyz.pl" errorText="Podany email jest nieprawidłowy!" labelValue="Wpisz swój email" error={emailError}/>
                        </div>
                        <div className="textareaBigBox">
                            <label htmlFor="textArea" className="textareaLabel">Wpisz swoją wiadomość</label> <br></br>
                            { messageInputElement }
                            <input type="submit" value="Wyślij" className="inputSubmit" />
                        </div>
                    </form>
                </div>
            </div>
            <HomeFooter/>
        </ElementScroll>
    </>
};

export default HomeContact
