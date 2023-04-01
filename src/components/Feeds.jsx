import React from 'react';
import {useSelector} from "react-redux";
import {
    ADD_NEW,
    FAVORITES,
    FOSTERING,
    FOUND,
    FOUND_FORM,
    HOTELS,
    LOST, lost_feed_page,
    LOST_FORM, lost_form_page,
    PROFILE,
    VET_HELP,
    WALKING
} from "../utils/constants";
import LostFeed from "./LostFeed";
import Favorites from "./Favorites";
import HomeServices from "./HomeServices";
import AddNew from "./AddNew";
import FoundFeed from "./FoundFeed";
import Profile from "./Profile";
import LostFillingForm from "./LostFillingForm";
import FoundFillingForm from "./FoundFillingForm";
import {Route, Routes} from "react-router-dom";

const Feeds = () => {
    return(
        <Routes>
            <Route path = {lost_feed_page} element={<LostFeed/>}/>
            <Route path = {lost_form_page} element={<LostFillingForm/>}/>
        </Routes>
    )
    /*const {display} = useSelector(state => state.mainDisplay);

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
            return <HomeServices title={'Hotels'} list_type={'hotels'}/>
        case WALKING:
            return <HomeServices title={'Walking'} list_type={'walking'}/>
        case FOSTERING:
            return <HomeServices title={'Fostering'} list_type={'fostering'}/>
        case VET_HELP:
            return <HomeServices title={'VetHelp'} list_type={'vet_help'}/>
        case FAVORITES:
            return <Favorites/>
        case ADD_NEW:
            return <AddNew/>
        case PROFILE:
            return <Profile/>
        default:
            return <HomeServices title={'HomeServices Page'} list_type={'home'}/>
    }*/
};

export default Feeds;