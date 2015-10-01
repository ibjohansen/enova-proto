'use strict';

import React from 'react';

export default React.createClass({

    displayName: 'app/pages/components/menu.js',

    render() {
        return (
            <nav className="nav-main">
                <ul className="nav flex">
                    <li>
                        <img src="images/enova_logo_150.png" className="xs-hidden" alt="Enova logo"/>
                    </li>
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
        )
    }
});