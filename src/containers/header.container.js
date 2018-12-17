import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">My portal</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/gamenine" className="nav-link">Game nine</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/shops" className="nav-link">Shops</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default HeaderComponent;