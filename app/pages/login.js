'use strict';

import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div className="page-login">
                <div className="page-login-content">
                    <div className="">
                        <h1>Logg inn</h1>

                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Brukernavn</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       placeholder="Email"/>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1">Passord</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>

                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/> Husk meg
                                </label>
                            </div>

                            <button type="submit" className="btn btn-default">Logg inn</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login