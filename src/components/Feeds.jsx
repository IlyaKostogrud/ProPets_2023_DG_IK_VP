import React from 'react';
import {ADD_NEW, FAVORITES, FOUND, LOST, LOST_FORM, PROFILE, SERVICES} from "../utils/constants";
import LostFeed from "./LostFeed";
import Services from "./Services";
import Favorites from "./Favorites";
import Home from "./Home";
import AddNew from "./AddNew";
import FoundFeed from "./FoundFeed";
import Profile from "./Profile";
import {useSelector} from "react-redux";
import LostForm from "./LostForm";

const Feeds = () => {
    const {display} = useSelector(state => state.mainDisplay);

    switch (display) {
        case LOST:
            return <LostFeed/>
        case LOST_FORM:
            return <LostForm/>
        case FOUND:
            return <FoundFeed/>
        case SERVICES:
            return <Services/>
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