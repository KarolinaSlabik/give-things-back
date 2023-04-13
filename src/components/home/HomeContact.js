import React from 'react';
import { Element as ElementScroll } from 'react-scroll';
import {Link as LinkRouter} from "react-router-dom";
const HomeContact = () => {
    return <>
        <ElementScroll name="homeContact" className="ContactSection">
            <div className="ContactTransparentApla">
                <div className="ContactContainer">
                    <div className="ContactTitle">Skontaktuj się z nami</div>
                    <div className="ContactDecorations"></div>
                    <form className="ContactForm">
                        <div className="inputBigBox">
                            <div className="inputBox">
                                <label htmlFor="name" className="nameAndEmailLabel">Wpisz swoje imię</label><br></br>
                                <input type="text" id="name" placeholder="Krzysztof" className="nameAndEmailInput"/>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="email" className="nameAndEmailLabel">Wpisz swój email</label><br></br>
                                <input type="text" id="email" placeholder="abc@xyz.pl" className="nameAndEmailInput"/>
                            </div>
                        </div>
                        <div className="textareaBigBox">
                            <label htmlFor="textArea" className="textareaLabel">Wpisz swoją wiadomość</label> <br></br>
                            <textarea id="textArea" name="textArea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." >
                            </textarea>
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
