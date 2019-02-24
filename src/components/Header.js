import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import logo from "../resources/img/logo-black.png"
import pagesEnum from "../enums/pagesEnum";

export class Header extends Component {
    render(){

        // Assumes we have an even number of nav items.
        const navItemsCount = Object.keys(pagesEnum).length;
        return (
            <div className="grrrls-flex grrrls-flex--justify-content-around grrrls-flex--align-center header">
                {
                    Object.keys(pagesEnum).map((key, index) => {
                        const page = pagesEnum[key];

                        // If we are halfways through the pages to link we place the logo
                        if (index === navItemsCount / 2) {
                            return(
                                <Fragment>
                                    <img src={logo} alt="Logo" className="logo" />
                                    <Link key={`$nav-to-${key}`} className="nav-item" to={page.link}>{page.label}</Link>
                                </Fragment>
                            )
                        }
                        return  <Link key={`$nav-to-${key}`} className="nav-item" to={page.link}>{page.label}</Link>
                    })
                }
            </div>
        )
    }
}

export default Header;