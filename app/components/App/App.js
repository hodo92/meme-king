import React, { Component } from 'react';
import { connect } from 'react-redux';

// containers
import Header from 'containers/Header/Header';
import SideMenu from 'containers/SideMenu/SideMenu';

// components
import MainView from 'components/MainView/MainView';

// services
import LocalStorageService from 'services/LocalStorage';
import AnalyticsService from 'services/Analytics';

// helpers
import helpers from 'helpers/helpers';


export default class App extends Component {

    componentWillMount() {


        // Initialize Firebase
        window.config = {
            apiKey: "AIzaSyA-f4RHZw205unjWdY4jvh_tJ7E1ZVPYKQ",
            authDomain: "memeking-80290.firebaseapp.com",
            databaseURL: "https://memeking-80290.firebaseio.com",
            storageBucket: "gs://memeking-80290.appspot.com", //"memeking-80290.appspot.com",
            messagingSenderId: "243226751545"
        };

        firebase.initializeApp(config);

        // localStorage
        LocalStorageService.init();

        // google analytics
        AnalyticsService.sendEvent(helpers.isMobile() ? 'Mobile Entrance' : 'Desktop entrance');

        //sentry
        Raven.config('https://cdc49c9d2b0c44f38b5b7911c8e58ddc@sentry.io/225081').install();

    };

    render(){
        return (
            <div>
                <Header/>
                <div className="flex">
                    <SideMenu />
                    <MainView />
                </div>
            </div>
        );
    }
}





