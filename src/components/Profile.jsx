import React, {useState} from 'react';
import MyProfile from "./MyProfile";
import Activities from "./Activities";
import {activities_page, profile_page} from "../utils/constants";
import {Link} from "react-router-dom";

const Profile = () => {
    const [activities, setActivities] = useState(false);

    return (
        <div className={'profile'}>
            <Link to={profile_page}>
                <button disabled={!activities} onClick={() => setActivities(!activities)}>Profile</button>
            </Link>
            <Link to={activities_page}>
                <button disabled={activities} onClick={() => setActivities(!activities)}>Activities</button>
            </Link>
            {activities ? <Activities/> : <MyProfile/>}
        </div>
    );
};

export default Profile;