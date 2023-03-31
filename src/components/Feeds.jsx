import React from 'react';
import {useSelector} from "react-redux";
import {
    ADD_NEW,
    FAVORITES,
    FOSTERING,
    FOUND,
    FOUND_FORM,
    HOTELS,
    LOST,
    LOST_FORM,
    PROFILE,
    VET_HELP,
    WALKING
} from "../utils/constants";
import LostFeed from "./LostFeed";
import Favorites from "./Favorites";
import Home from "./Home";
import AddNew from "./AddNew";
import FoundFeed from "./FoundFeed";
import Profile from "./Profile";
import LostFillingForm from "./LostFillingForm";
import Hotels from "./Hotels";
import Walking from "./Walking";
import Fostering from "./Fostering";
import VetHelp from "./VetHelp";
import FoundFillingForm from "./FoundFillingForm";

const Feeds = () => {
    const {display} = useSelector(state => state.mainDisplay);

    switch (display) {
        case LOST:
            return <LostFeed/>
        case LOST_FORM:
            return <LostFillingForm/>
        case FOUND:
            return <FoundFeed/>
        case FOUND_FORM:
            return <FoundFillingForm/>
        case HOTELS:
            return <Hotels/>
        case WALKING:
            return <Walking/>
        case FOSTERING:
            return <Fostering/>
        case VET_HELP:
            return <VetHelp/>
        case FAVORITES:
            return <Favorites/>
        case ADD_NEW:
            return <AddNew/>
        case PROFILE:
            return <Profile/>
        default:
            return <Home/>
    }
};

export default Feeds;