import React from 'react';
import { Element as ElementScroll } from 'react-scroll';
import {Link as LinkRouter} from "react-router-dom";
import DecorativeElement from "../utils/DecorativeElement";

const Home4EasySteps = () => {
    return <>
        <ElementScroll name="whatIsItAbout" className="fourEasyStepsSection">
            <div className="fourEasyStepsTitle">
                Wystarczą 4 proste kroki
            </div>
            <DecorativeElement />
            <div className="fourEasyStepsDecoration"></div>
            <div className="fourEasyStepsContainer">
                <div className="fourEasyStepsBigBox">
                    <div className="fourEasyStepsBox">
                        <div className="fourEasyStepsImage t-shirtImage"></div>
                        <div className="stepsTitle">Wybierz rzeczy</div>
                        <div className="stepsUnderline"></div>
                        <div className="stepsText">ubrania, zabawki, sprzęt i inne</div>
                    </div>
                    <div className="fourEasyStepsBox">
                        <div className="fourEasyStepsImage bagImage"></div>
                        <div className="stepsTitle">Spakuj je</div>
                        <div className="stepsUnderline"></div>
                        <div className="stepsText">skorzystaj z worków na śmieci</div>
                    </div>
                    <div className="fourEasyStepsBox">
                        <div className="fourEasyStepsImage magnifierImage"></div>
                        <div className="diffEasySteps stepsTitle">Zdecyduj komu chcesz pomóc</div>
                        <div className="stepsUnderline"></div>
                        <div className="stepsText">wybierz miejsce</div>
                    </div>
                    <div className="fourEasyStepsBox theBiggestBox">
                        <div className="fourEasyStepsImage reloadImage"></div>
                        <div className="stepsTitle">Zamów kuriera</div>
                        <div className="stepsUnderline"></div>
                        <div className="stepsText">kurier przyjedzie w dogodnym terminie</div>
                    </div>
                </div>
            </div>
            <LinkRouter to="logowanie" className="fourEasyStepsButton">ODDAJ<br></br> RZECZY</LinkRouter>
        </ElementScroll>
    </>
};

export default Home4EasySteps
