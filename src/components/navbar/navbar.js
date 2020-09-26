import React, { Component } from 'react';
import './navbar.sass';

const NAVLINKS = ["Flavors", "Our Stories", "Find Us"];

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {showPhoneLinks: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            showPhoneLinks: !prevState.showPhoneLinks
        }));
    }
    handleScroll(e) {
        if(window.innerWidth > 768){
            this.setState(() => ({
                showPhoneLinks: false,
            }));
        }
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
          //this.handleWindowSizeChange()
          window.addEventListener('resize', this.handleScroll)
        }
      }
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', this.handleScroll)
        }
      }

    render(){
        const LIST_ITEMS = NAVLINKS.map((NAVLINKS) => 
        <li key={NAVLINKS}>{NAVLINKS}</li>
        );

        const HIDE = {
            top: "-400px",
        }

        const SHOW = {
            top: "0",
        }

        return(
            <div>
                <nav>
                    <div>
                    </div>
                    <ol>{LIST_ITEMS}</ol>
                    <div id="hamburger" onClick={this.handleClick}>
                        <div className="hamburger-slice"></div>
                        <div className="hamburger-slice"></div>
                        <div className="hamburger-slice"></div>
                    </div>
                </nav>
                <div id="navbar-phone-links" style={this.state.showPhoneLinks ? SHOW : HIDE}>
                    <ol>
                        {LIST_ITEMS}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Navbar