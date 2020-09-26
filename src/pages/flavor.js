import React from 'react';

import Navbar from '../components/navbar/navbar.js';
import Menu from '../components/flavor/Menu.js';

const FlavorPage = () => (
    <div>
        <Navbar />
        <main>
            <Menu title="flavor test" flavors={["fla", "hey", "test"]}/>
        </main>
    </div>
)

export default FlavorPage