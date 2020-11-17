import React, { Component } from 'react';

import Navbar from "./Navbar";
import Banner from "./Banner";

class header extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
            </div>
        );
    }
}

export default header;