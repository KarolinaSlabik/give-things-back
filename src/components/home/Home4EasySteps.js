import React from 'react';
import { Element as ElementScroll } from 'react-scroll';
import {Link as LinkRouter} from "react-router-dom";

const Home4EasySteps = () => {
    return <>
        <ElementScroll name="whatIsItAbout" className="FourEasyStepsSection">
            <div className="FourEasyStepsTitle">
                Wystarczą 4 proste kroki
            </div>
            <div className="FourEasyStepsDecoration"></div>
            <div className="FourEasyStepsContainer">
                <div className="FourEasyStepsBigBox">
                    <div className="FourEasyStepsBox">
                        <div className="FourEasyStepsImage t-shirtImage"></div>
                        <div className="stepsTitle">Wybierz rzeczy</div>
                        <div className="stepsUnderline"></div>
                        <div className="stepsText">ubrania, zabawki, sprzęt i inne</div>
                    </div>
                    <div className="FourEasyStepsBox">
                        <div className="FourEasyStepsImage bagImage"></div>
                        <div className="stepsTitle">Spakuj je</div>
                        <div className="stepsUnderline"></div>
                        <div className="stepsText">skorzystaj z worków na śmieci</div>
                    </div>
                    <div className="FourEasyStepsBox">
                        <div className="FourEasyStepsImage magnifierImage"></div>
                        <div className="diff_easySteps stepsTitle">Zdecyduj komu chcesz pomóc</div>
                        <div className="stepsUnderline"></div>
                        <div className="stepsText">wybierz miejsce</div>
                    </div>
                    <div className="FourEasyStepsBox theBiggestBox">
                        <div className="FourEasyStepsImage reloadImage"></div>
                        <div className="stepsTitle">Zamów kuriera</div>
                        <div className="stepsUnderline"></div>
                        <div className="stepsText">kurier przyjedzie w dogodnym terminie</div>
                    </div>
                </div>
            </div>
            <LinkRouter to="logowanie" className="FourEasyStepsButton">ODDAJ<br></br> RZECZY</LinkRouter>
        </ElementScroll>
    </>
};

export default Home4EasySteps
