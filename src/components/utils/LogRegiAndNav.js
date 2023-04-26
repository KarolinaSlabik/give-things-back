import React from 'react';
import { HashLink } from 'react-router-hash-link';
import LogAndRegiButtons from "./LogAndRegiButtons";
const LogRegiAndNav = () => {
    return <>
        <div className="loginRegistrationAndNavigation">
            <LogAndRegiButtons/>
            <div className="navigation">
                <HashLink smooth to="/">Start</HashLink>
                <HashLink smooth to="/#whatIsItAbout">O co chodzi?</HashLink>
                <HashLink smooth to="/#aboutUs">O nas</HashLink>
                <HashLink smooth to="/#whoWeHelp">Fundacja i organizacje</HashLink>
                <HashLink smooth to="/#homeContact">Kontakt</HashLink>
            </div>
        </div>
    </>
};
export default LogRegiAndNav