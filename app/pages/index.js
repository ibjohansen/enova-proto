'use strict';

import React from 'react';
import Reflux from 'reflux';
import Store from '../stores/mainStore.js';
import Actions from '../actions/mainActions.js';
import Loader from './components/loader';
import GoogleSignIn from './components/googleSignIn.js';

let Page = React.createClass({

    displayName: 'app/pages/index.js',

    mixins: [
        Reflux.listenTo(Store, 'onStoreUpdated')
    ],

    getInitialState(){
        return {
            userName: ''
        };
    },

    componentWillMount(){
        this.getNewUserName();
    },

    onStoreUpdated(payload){
        this.setState({userName: payload.data})
    },

    getNewUserName(){
        Actions.GetUserName();
    },

    renderContent(){
        if ('' === this.state.userName) {
            return (
                <Loader/>
            )
        } else {
            return (
                <span>
                <h2>{this.state.userName}</h2>
                        <h3>Example GET from <a href="http://apigram.herokuapp.com/artifex/new" target="_blank">apigram.herokuapp.com/artifex/new</a>
                        </h3>
                        <h5>The service generates a username based on a list of adjectives and nouns</h5>

                        <h3>
                            <button className="btn paper paper-raise" type="button" name="button"
                                    onClick={this.getNewUserName}>Get a new name!
                            </button>
                        </h3>
               </span>
            )
        }
    },

    render() {
        return (

            <div>

                <nav id="nav-main" className="nav-main">
                    <a href="index.html" className="logo hidden-xs">
                        <img src="img/logo.png" alt="Logo Enova" />
                    </a>
                    <ul className="nav flex">
                        <li>
                            <a href="index.html" title="Forbruk" className="btn active">
                                <span className="nav-icon ion-stats-bars"></span>
                                Forbruk
                            </a>
                        </li>
                        <li>
                            <a href="tiltak.html" title="Tiltak" className="btn">
                                <span className="nav-icon ion-arrow-graph-down-right"></span>
                                Tiltak
                            </a>
                        </li>
                        <li>
                            <a href="utmerkelser.html" title="Utmerkelser" className="btn">
                                <span className="nav-icon ion-ribbon-b"></span>
                                Utmerkelser
                            </a>
                        </li>
                        <li>
                            <a href="innboks.html" className="btn" title="Innboks">
                                <span className="nav-icon ion-ios-chatbubble"></span>
                                Innboks
                            </a>
                        </li>
                        <li>
                            <a href="profil.html" title="Profil" className="btn">
                                <span className="nav-icon ion-gear-a"></span>
                                Profil
                            </a>
                        </li>
                    </ul>
                </nav>


                <div className="row">
                    <span className="col-md-3"></span>
                    <span className="col-md-6">
                        <br/><br/>
                        <img src="images/acando_logo_blue.png" alt="acando.no" width="350"/>
                        <br/><br/>
                        {this.renderContent()}

                        <GoogleSignIn></GoogleSignIn>

                    </span>
                    <span className="col-md-3"></span>
                </div>

            </div>



        )
    }
});

export default Page;