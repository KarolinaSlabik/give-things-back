import React from 'react';
import {Link as LinkRouter} from "react-router-dom";
import DecorativeElement from "../utils/DecorativeElement";
import LogRegiAndNav from "../utils/LogRegiAndNav";
const LogOutAndRegistrationMessage = (props) => {
    return <>
        <LogRegiAndNav/>
        <div className="logOutAndRegiMessageContainer">
            <div className="logOutAndRegiTitle">
                {props.children}
            </div>
            <DecorativeElement />
            <LinkRouter to="/" className="logOutAndRegiButton">Strona główna</LinkRouter>
        </div>
    </>
};
export default LogOutAndRegistrationMessage
