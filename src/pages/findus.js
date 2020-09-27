import React, { Component } from 'react';

import Navbar from '../components/navbar/navbar.js';
import MyMap from '../components/map/map.js';

import '../sassPages/findus.sass';



class LocationPage extends Component{
    render(){

        return(
            <div>
                <Navbar />
                <main id="location-main">
                    <h2>Map Of Where We Are Located</h2>
                    <div>
                        <MyMap/>
                    </div>
                </main>
            </div>
        )
    }
};

export default LocationPage