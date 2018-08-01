import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import logo from './logo.svg';
import './App.css';
import CafeList from './components/CafeList';
import SortBar from './components/SortBar';
import MapWrapper from './components/MapWrapper';
import AddCafeButton from './components/AddCafeButton';
import AddCafeModal_Container from './components/AddCafeModal_Container';

import iconData from './data/attributeIcons.json';

class App extends Component {

    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBRw1I9CcdfqHRcZSCyLXMRAmGihSH9mco",
            authDomain: "coffee-49b01.firebaseapp.com",
            databaseURL: "https://coffee-49b01.firebaseio.com",
            projectId: "coffee-49b01",
            storageBucket: "coffee-49b01.appspot.com",
            messagingSenderId: "779895610961"
        };
        firebase.initializeApp(config);

    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <div className="App">
                    <div class='s_allContent'>
                        <div class='s_topSpace'>
                            <div class='s_splitscreen'>
                                <div class='s_main'>
                                    <div class='s_header'>
                                        <div class='s_header_divide'>
                                            <div><svg class='cafe_icon_black' xmlns="http://www.w3.org/2000/svg" width='48' height='48' viewBox="0 0 24 24">
                                                <path d={iconData.coffee[0].svg} />
                                            </svg></div>
                                            <div class='s_header_title'><p class='t_header'> the sf caffeinatory</p></div>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <AddCafeModal_Container />
                                    </div>
                                    <SortBar />
                                </div>
                                <div class='s_user'>
                                    <AddCafeButton />
                                </div>
                            </div>
                            <div class='s_splitscreen'>
                                <div class='s_main'>
                                    <CafeList />
                                </div>
                                <div class='s_map'>
                                    <MapWrapper />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
