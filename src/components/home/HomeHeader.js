import React from 'react';
import { Link as LinkRouter } from  "react-router-dom";
import DecorativeElement from "../utils/DecorativeElement";
import LogRegiAndNav from "../utils/LogRegiAndNav";
const HomeHeader = () => {
    return <>
        <header>
            <div className="headerImage"></div>
            <div className="headerContent">
                <LogRegiAndNav/>
                <div className="headerTitleAndButtonsBox">
                    <div className="headerTitle">
                        Zacznij pomagać! <br></br>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </div>
                    <DecorativeElement />
                    <div className="headerButtonBox">
                        <LinkRouter to="logowanie" className="headerButton">ODDAJ<br></br> RZECZY</LinkRouter>
                        <LinkRouter to="logowanie" className="headerButton">ZORGANIZUJ ZBIÓRKĘ</LinkRouter>
                    </div>
                </div>
            </div>
        </header>
    </>
};

export default HomeHeader