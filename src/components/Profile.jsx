import React, {useState} from 'react';
import MyProfile from "./MyProfile";
import Activities from "./Activities";

const Profile = () => {
    const [activities, setActivities] = useState(false);

    return (
        <div className={'profile'}>
            <button disabled={!activities} onClick={() => setActivities(!activities)}>Profile</button>
            <button disabled={activities} onClick={() => setActivities(!activities)}>Activities</button>
            {activities ? <Activities/> : <MyProfile/>}
        </div>
    );
};

export default Profile;