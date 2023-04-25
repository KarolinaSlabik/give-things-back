import React from 'react';
import {Link as LinkScroll} from "react-scroll";
import LogAndRegiButtons from "./LogAndRegiButtons";
const LogRegiAndNav = () => {
    return <>
        <div className="loginRegistrationAndNavigation">
            <LogAndRegiButtons/>
            <div className="navigation">
                <LinkScroll to="/">Start</LinkScroll>
                <LinkScroll to="whatIsItAbout">O co chodzi?</LinkScroll>
                <LinkScroll to="aboutUs">O nas</LinkScroll>
                <LinkScroll to="whoWeHelp">Fundacja i organizacje</LinkScroll>
                <LinkScroll to="homeContact">Kontakt</LinkScroll>
            </div>
        </div>
    </>
};
export default LogRegiAndNav