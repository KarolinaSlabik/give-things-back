import React from 'react';
import { Element as ElementScroll } from 'react-scroll';
import DecorativeElement from "../utils/DecorativeElement";

const HomeAboutUs = () => {
    return <>
        <ElementScroll id="aboutUs" name="aboutUs" className="aboutUsSection">
            <div className="aboutUsTextContainer">
                <div className="aboutUsTextBox">
                    <div className="aboutUsTitle">
                        O nas
                    </div>
                    <DecorativeElement />
                    <div className="aboutUsText">
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </div>
                    <div className="aboutUsSignature"></div>
                </div>
            </div>
            <div className="aboutUsImage"></div>
        </ElementScroll>
    </>
};

export default HomeAboutUs
