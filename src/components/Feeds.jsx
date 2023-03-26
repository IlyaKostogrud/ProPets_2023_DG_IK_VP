import React from 'react';
import {
    ADD_NEW,
    FAVORITES,
    FOSTERING,
    FOUND,
    HOTELS,
    LOST,
    LOST_FORM,
    PROFILE,
    VET_HELP,
    WALKING,
    PREVIEW
} from "../utils/constants";
import LostFeed from "./LostFeed";
import Favorites from "./Favorites";
import Home from "./Home";
import AddNew from "./AddNew";
import FoundFeed from "./FoundFeed";
import Profile from "./Profile";
import {useSelector} from "react-redux";
import LostForm from "./LostForm";
import Hotels from "./Hotels";
import Walking from "./Walking";
import Fostering from "./Fostering";
import VetHelp from "./VetHelp";
import Preview from "./Preview";

const Feeds = () => {
    const {display} = useSelector(state => state.mainDisplay);

    switch (display) {
        case LOST:
            return <LostFeed/>
        case LOST_FORM:
            return <LostForm/>
        case FOUND:
            return <FoundFeed/>
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
        case PREVIEW:
            return <Preview/>
        default:
            return <Home/>
    }
};

export default Feeds;