'use strict';

import React from 'react';
import Menu from './components/menu';
import Usage from './usage';

class Index extends React.Component {

    render() {

        const {children} = this.props;
        const {location} = this.props;

        return (
            <div className="content-container">
                <Menu location={location.pathname}/>
                {children ? children.content : <Usage/>}
            </div>
        )
    }
}

export default Index