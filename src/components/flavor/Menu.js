import React, { Component } from 'react';
import './menu.sass';


class Menu extends Component {
    render(){
    const flavorChoice = this.props.flavorChoice;
    const FLAVOR_CHOICES = flavorChoice.map((flavorChoice) => 
    <li key={flavorChoice}>{flavorChoice}</li>
    );
    const IMG_CSS = {
        backgroundImage: "url(" + this.props.image + ")",
    }

        return(
                <div className="icecream-flavor-menu">
                    <section style={IMG_CSS}>
                        <h2>{this.props.menuTitle}</h2>
                        <ul>
                            {FLAVOR_CHOICES}
                        </ul>
                    </section>
                </div>
        )
    }
}

export default Menu