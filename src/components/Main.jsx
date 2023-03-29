import React, {useEffect} from 'react';
import Navigation from "./Navigation";
import Feeds from "./Feeds";
import Adverts from "./Adverts";
import Header from "./Header";
import {useDispatch} from "react-redux";
import {fetchUser} from "../store/userInfoSlice";

const Main = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch])

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Header/>
                </div>
            </div>
            <div className={'row main-body'}>
                <div className={'col-2 green'}>
                    <Navigation/>
                </div>
                <div className={'col-8'}>
                    <Feeds/>
                </div>
                <div className={'col-2 green'}>
                    <Adverts/>
                </div>
            </div>
        </div>
    );
};

export default Main;