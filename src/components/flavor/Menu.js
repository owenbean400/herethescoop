import { render } from 'node-sass';
import React, { Component } from 'react';



class Menu extends Component {
    render(){
        return(
                <div>
                    <section>
                        <h2>{this.props.title}</h2>
                        <ul>
                        </ul>
                    </section>
                </div>
        )
    }
}