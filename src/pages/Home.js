import React, { Component, Fragment } from 'react';
import Header from "../components/Header";

import banner from "../resources/img/photos/tagline_2.jpg"

export class Home extends Component {
    render(){
        return (
            <Fragment>
                <Header />
                <div className="grrrls-flex grrrls-flex--justify-content-center">
                    <img src={banner} alt="banner" className="home--banner" />
                </div>
            </Fragment>
        )
    }
}

export default Home;