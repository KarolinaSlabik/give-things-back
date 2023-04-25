import React, { useState }  from 'react';
import { Element as ElementScroll } from 'react-scroll';
import WhoWeHelpOrganization from "./WhoWeHelpOrganization";
import listOfFoundations from "../utils/listOfFoundations";
import listOfOrganizations from "../utils/listOfOrganizations";
import listOfLocalCollections from "../utils/listOfLocalCollections";
import DecorativeElement from "../utils/DecorativeElement";

const HomeWhoWeHelp = () => {
    const [clickedButton, setClickedButton] = useState(0);

    const descriptionFoundations = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
    const descriptionOrganizations = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
    const descriptionLocalCollections = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."

    const l1 = listOfFoundations;
    const l2 = listOfOrganizations;
    const l3 = listOfLocalCollections;

    let whoWeHelpOrganization;

    if (clickedButton === 0) {
        whoWeHelpOrganization = < WhoWeHelpOrganization description={ descriptionFoundations } listOfItems={ l1 }/>;
    } else if (clickedButton === 1) {
        whoWeHelpOrganization = < WhoWeHelpOrganization description={ descriptionOrganizations } listOfItems={ l2 }/>;
    } else if (clickedButton === 2) {
        whoWeHelpOrganization = < WhoWeHelpOrganization description={ descriptionLocalCollections } listOfItems={ l3 }/>;
    }

    let foundationsClickedButton =  () => {
        setClickedButton(0);
    };
    let organizationsClickedButton =  () => {
        setClickedButton(1);
    };
    let localsCollectionsClickedButton =  () => {
        setClickedButton(2);
    };

    return <>
        <ElementScroll name="whoWeHelp" className="whoWeHelpSection">
            <div className="whoWeHelpTitle">
                Komu pomagamy?
            </div>
            <DecorativeElement />
            <div className="whoWeHelpButtonBox">
                <div className="whoWeHelpButton" onClick={foundationsClickedButton}>
                    Fundacjom
                </div>
                <div className="whoWeHelpButton" onClick={organizationsClickedButton}>
                    Organizacjom <br></br> pozarządowym
                </div>
                <div className="whoWeHelpButton" onClick={localsCollectionsClickedButton}>
                    Lokalnym <br></br> zbiórkom
                </div>
            </div>

            { whoWeHelpOrganization }

        </ElementScroll>
    </>
};

export default HomeWhoWeHelp
