import React from 'react';
import Navigation from "./Navigation";
import Feeds from "./Feeds";
import Adverts from "./Adverts";
import Header from "./Header";

const Main = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Header/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-1 green'}>
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