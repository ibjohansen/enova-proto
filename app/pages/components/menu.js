'use strict';

import React from 'react';
import {Link} from 'react-router'

class MenuItem extends React.Component {
    render() {
        let linkClasses = this.props.active ? 'active btn' : 'btn';

        return (
            <li>
                <Link to={this.props.to} title={this.props.title} className={linkClasses}>
                    <span className={this.props.spanClasses}/>
                    {this.props.title}
                </Link>
            </li>
        )
    }
}

class MenuList extends React.Component {
    render() {
        return (
            <ul className="nav flex">
                <li>
                    <img src="images/enova_logo_150.png" className="xs-hidden" alt="Enova logo"/>
                </li>
                <MenuItem active={this.props.location === this.props.menu[0].to} {...this.props.menu[0]}/>
                <MenuItem active={this.props.location === this.props.menu[1].to} {...this.props.menu[1]}/>
                <MenuItem active={this.props.location === this.props.menu[2].to} {...this.props.menu[2]}/>
                <MenuItem active={this.props.location === this.props.menu[3].to} {...this.props.menu[3]}/>
                <MenuItem active={this.props.location === this.props.menu[4].to} {...this.props.menu[4]}/>
            </ul>
        )
    }
}

class Menu extends React.Component {

    static defaultProps = {

        menu: [
            {
                title: 'Forbruk',
                spanClasses: 'nav-icon ion-stats-bars',
                to: '/usage'
            }, {
                title: 'Tiltak',
                spanClasses: 'nav-icon ion-arrow-graph-down-right',
                to: '/measures'
            }, {
                title: 'Utmerkelser',
                spanClasses: 'nav-icon ion-ribbon-b',
                to: '/winnings'
            }, {
                title: 'Innboks',
                spanClasses: 'nav-icon ion-ios-chatbubble',
                to: '/inbox'
            }, {
                title: 'Profil',
                spanClasses: 'nav-icon ion-gear-a',
                to: '/profile'
            }
        ]
    };

    render() {
        return (
            <nav className="nav-main">
                <MenuList {...this.props}/>
            </nav>
        )
    }
}

export default Menu;