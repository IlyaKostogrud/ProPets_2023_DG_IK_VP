import React, {useState} from 'react';
import Header from "./Header";
import LoginRegistrationStep from "./LoginRegistrationStep/LoginRegistrationStep";
import {useDispatch} from "react-redux";
import {renderLogin} from "../store/renderLoginSlice";
import {HOME} from "../utils/constants";
import WelcomeButtons from "./WelcomeButtons";
import WelcomePageImg1 from "../images/welcome-page-img1.png";
import WelcomePageImg2 from "../images/welcome-page-img2.png";
import HeartImg from "../images/heart.png";
import ProPetsLogoWhite from "../images/ProPetsLogoWhite.svg"

let whatToRenderNext;
const WelcomePage = () => {
    const [condition, setCondition] = useState(false);
    const dispatch = useDispatch();

    const handleClickProceed = (bool, display = HOME) => {
        whatToRenderNext = display;
        dispatch(renderLogin(bool));
        changeCondition();
    };

    const changeCondition = () => {
        setCondition(!condition);
    };

    return (
        <div className={'welcome-page container'}>
            <div className={'row'}>
                <div className={'col'}>
                    <Header h_color={'green'} handleClickProceed={handleClickProceed}/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col welcome-page-wrap-menu'}>
                    <p>Welcome to your <span className={'pawfessional'}>pawfessional</span> community</p>
                    <WelcomeButtons handleClickProceed={handleClickProceed}/>
                </div>
                <div className={'col welcome-page-wrap-img1'}>
                    <img className={'welcome-page-img1'} src={WelcomePageImg1} alt="Puppy"/>
                </div>
            </div>
            <div className={`row welcome-page-greeting-line`}>
                <p>Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.</p>
            </div>
            <div className={`row welcome-page-services-offered-line`}>
                <div className={'col welcome-page-wrap-img2'}>
                    <img className={'welcome-page-img2'} src={WelcomePageImg2} alt="Puppy,cat and bird"/>
                </div>
                <div className={'col'}>
                    <p>Here is collected everything that your pet needs:</p>
                    <ul>
                        <li>professional veterinarian tips;</li>
                        <li>useful information about education and care;</li>
                        <li>fostering home search;</li>
                        <li>information about pet-sitting and walking service;</li>
                        <li>and of course, great communication with new friends in your social network!</li>
                    </ul>
                </div>
            </div>
            <div className={`row welcome-page-coming-soon-line`}>
                <div className={'col-4'}>
                    <p>Coming soon</p>
                </div>
                <div className={'col-5'}>
                    <p>We are planing to open a new service, where your cats and dogs can find their love!</p>
                </div>
                <div className={'col-3 welcome-page-wrap-img3'}>
                    <img className={'welcome-page-img3'} src={HeartImg} alt="Heart"/>
                </div>
            </div>
            <div className={`row welcome-page-contacts-line`}>
                <div className={'col'}>
                    <img className={'ProPETS_logo'} src={ProPetsLogoWhite} alt="ProPetsLogo"/>
                </div>
                <div className={'col'}>
                    <p>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</p>
                </div>
                <div className={'col'}>
                    <ul>
                        <li>Lost</li>
                        <li>Found</li>
                        <li>VetHelp</li>
                    </ul>
                </div>
                <div className={'col'}>
                    <ul>
                        <li>Hotels</li>
                        <li>Walking</li>
                        <li>Fostering</li>
                    </ul>
                </div>
            </div>
            {condition &&
                <LoginRegistrationStep changeCondition={changeCondition} whatToRenderNext={whatToRenderNext}/>}
        </div>
    );
};

export default WelcomePage;