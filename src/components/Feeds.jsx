import React from 'react';
import {
    activities_page,
    add_new_page,
    base_url,
    //base_url,
    favourites_page,
    fostering_page,
    found_feed_page,
    found_form_page,
    FOUND_HEADER1,
    home_page,
    hotels_page,
    lost_feed_page,
    lost_form_page,
    LOST_HEADER1,
    preview_page,
    profile_page,
    vet_help_page,
    walking_page
} from "../utils/constants";
import Favorites from "./Favorites";
import HomeServices from "./HomeServices";
import AddNew from "./AddNew";
import Profile from "./Profile";
import LostFoundFillingForm from "./LostFoundFillingForm";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage";
//import WelcomePage from "./WelcomePage";
import LostFoundFeed from "./LostFoundFeed";
//import Preview from "./Preview";
import Activities from "./Activities";

const Feeds = () => {
    //const [preview, setPreview] = useState(false);
    return (
        <Routes>//localhost:3000, //localhost:3000/#
            {/*<Route path={base_url} element={<WelcomePage/>}/>*/}
            <Route path={lost_feed_page} element={<LostFoundFeed title={'Lost'} list_type={'lost'}/>}/>
            <Route path={lost_form_page}
                   element={<LostFoundFillingForm p_type={'lost'} header_text={LOST_HEADER1}/>}/>
            <Route path={found_feed_page} element={<LostFoundFeed title={'Found'} list_type={'found'}/>}/>
            <Route path={found_form_page}
                   element={<LostFoundFillingForm p_type={'found'} header_text={FOUND_HEADER1}/>}/>
            <Route path={hotels_page} element={<HomeServices title={'Hotels'} list_type={'hotels'}/>}/>
            <Route path={walking_page} element={<HomeServices title={'Walking'} list_type={'walking'}/>}/>
            <Route path={fostering_page} element={<HomeServices title={'Fostering'} list_type={'fostering'}/>}/>
            <Route path={vet_help_page} element={<HomeServices title={'Vet_help'} list_type={'vet_help'}/>}/>
            <Route path={favourites_page} element={<Favorites/>}/>
            <Route path={add_new_page} element={<AddNew/>}/>
            <Route path={profile_page} element={<Profile/>}/>
            <Route path={home_page} element={<HomeServices title={'HomeServices Page'} list_type={'home'}/>}/>
            <Route path={activities_page} element={<Activities title={'Activities'}/>}/>
            {/*<Route path={preview_page} element={<Preview changePreview={setPreview(false)} fields={null}/>}/>*/}
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
    /*const {display} = useSelector(state => state.mainDisplay);

    switch (display) {
        case LOST:
            return <LostFeed/>
        case LOST_FORM:
            return <LostFoundFillingForm/>
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