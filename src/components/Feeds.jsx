import React from 'react';
import {useSelector} from "react-redux";
import {
    ADD_NEW, add_new_page,
    FAVORITES, favourites_page,
    FOSTERING, fostering_page,
    FOUND, found_feed_page,
    FOUND_FORM, found_form_page, home_page,
    HOTELS, hotels_page,
    LOST, lost_feed_page,
    LOST_FORM, lost_form_page,
    PROFILE, profile_page,
    VET_HELP, vet_help_page,
    WALKING, walking_page
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
/*import ErrorPage from "../../../../../WebstormProjects/star-wars-react-masa-router5_3/src/components/ErrorPage";
import {homePage} from "../../../../../WebstormProjects/star-wars-react-masa-router5_3/src/utils/constants";
import Home from "../../../../../WebstormProjects/star-wars-react-masa-router5_3/src/components/Home";*/

const Feeds = () => {
    return(
        <Routes>
            {/*['/', homePage, '/:heroId', `${homePage}/:heroId`].map(path =>
                <Route path={path} key={path} element={<Home changeHero={props.changeHero}/>}/>)*/}
            <Route path={lost_feed_page} element={<LostFeed/>}/>
            <Route path={lost_form_page} element={<LostFillingForm/>}/>
            <Route path={found_feed_page} element={<FoundFeed/>}/>
            <Route path={found_form_page} element={<FoundFillingForm/>}/>
            <Route path={hotels_page} element={<HomeServices title={'Hotels'} list_type={'hotels'}/>}/>
            <Route path={walking_page} element={<HomeServices title={'Walking'} list_type={'walking'}/>}/>
            <Route path={fostering_page} element={<HomeServices title={'Fostering'} list_type={'fostering'}/>}/>
            <Route path={vet_help_page} element={<HomeServices title={'Vet_help'} list_type={'vet_help'}/>}/>
            <Route path={favourites_page} element={<Favorites/>}/>
            <Route path={add_new_page} element={<AddNew/>}/>
            <Route path={profile_page} element={<Profile/>}/>
            <Route path={home_page} element={<HomeServices title={'HomeServices Page'} list_type={'home'}/>}/>

            {/*<Route path={'*'} element={<ErrorPage/>}/>*/}
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