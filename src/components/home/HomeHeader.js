import React from 'react';
import { Link as LinkRouter } from  "react-router-dom";
import { Link as LinkScroll } from 'react-scroll';
const HomeHeader = () => {
    return <>
        <header>
            <div className="headerImage"></div>
            <div className="headerContent">
                <div className="loginRegistrationAndNavigation">
                    <div className="loginAndRegistration">
                        <LinkRouter to="logowanie" className="logAndRegiLink">Zaloguj</LinkRouter>
                        <LinkRouter to="rejestracja" className="logAndRegiLink">Załóż konto</LinkRouter>
                    </div>
                    <div className="navigation">
                        <LinkScroll to="/">Start</LinkScroll>
                        <LinkScroll to="whatIsItAbout">O co chodzi?</LinkScroll>
                        <LinkScroll to="/">O nas</LinkScroll>
                        <LinkScroll to="/">Fundacja i organizacje</LinkScroll>
                        <LinkScroll to="/">Kontakt</LinkScroll>
                    </div>
                </div>
                <div className="headerTitleAndButtonsBox">
                    <h1>
                        Zacznij pomagać! <br></br>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h1>
                    <div className="headerDecorationImage"></div>
                    <div className="headerButtonBox">
                        <LinkRouter to="logowanie" className="headerButton">ODDAJ RZECZY</LinkRouter>
                        <LinkRouter to="logowanie" className="headerButton">ZORGANIZUJ ZBIÓRKĘ</LinkRouter>
                    </div>
                </div>
            </div>
        </header>
    </>
};

export default HomeHeader