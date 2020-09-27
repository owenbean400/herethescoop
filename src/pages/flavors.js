import React from 'react';
import '../sassPages/flavor.sass';

import Navbar from '../components/navbar/navbar.js';
import Menu from '../components/flavor/Menu.js';

import BananaSplit from '../images/flavor_page/banana_split.png';
import Wizard from '../images/flavor_page/wizard.png';
import Hard from '../images/flavor_page/icecream_hard.png';
import Soft from '../images/flavor_page/icecream_soft.png';

const FlavorPage = () => (
    <div>
        <Navbar />
        <main id="flavor-main">
            <Menu 
                menuTitle = "Our Specials" 
                image = {BananaSplit}
                flavorChoice = {[
                    "Banana Split",
                    "Peanut Butter Parfait",
                    "Chocolate Brownie Sundae",
                    "Chocolate Chip Cookie Icecream",
                    "Root Beer Float"
                    ]}/>
            <Menu
                menuTitle = "Wizards"
                image = {Wizard}
                flavorChoice = {[
                    "Peanut Butter Cup",
                    "Brownie",
                    "Cotton Candy",
                    "Kit Kat",
                    "Butterfingers",
                    "M&M"
                ]}/>
            <Menu
                menuTitle = "Hard Serve"
                image = {Hard}
                flavorChoice = {[
                    "Vanilla",
                    "Chocolate",
                    "Cookies N' Cream",
                    "Mint Chocolate Chip",
                    "Chocolate Chip Cookie Dough",
                    "Buttered Peacan",
                    "Strawberry",
                    "Moose Tracks",
                    "Neapolitan",
                    "Cotton Candy",
                ]}/>
            <Menu
                menuTitle = "Soft Serve"
                image = {Soft}
                flavorChoice = {[
                    "Vanilla",
                    "Chocolate",
                    "Strawberry",
                    "Black Cherry",
                    "Coffee",
                    "Lime",
                    "Pumpkin",
                ]}/>
        </main>
    </div>
)
export default FlavorPage