import React, { Component } from "react"
import { Link } from "gatsby";

import Button from '../components/button.js';
import Navbar from '../components/navbar/navbar.js';

import '../sassPages/index.sass';

import Sign from '../images/sign.png';
import Building from '../images/building.png';
import Arrow from '../images/arrow.svg';

import Cone from '../images/cone.png';
import ChocolateIcecream from '../images/icecream/icecream_chocolate.png';
import StrawberryIcecream from '../images/icecream/icecream_strawberry.png';
import VanillaIcecream from '../images/icecream/icecream_vanilla.png';
import CottonIcecream from '../images/icecream/icecream_cotton.png';
import CookieIcecream from '../images/icecream/icecream_cookie.png';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {IceCreamFlavorNumber : 0};
    this.leftClickedIcecream = this.leftClickedIcecream.bind(this);
    this.rightClickedIcecream = this.rightClickedIcecream.bind(this);
  }

  leftClickedIcecream() {
    if(this.state.IceCreamFlavorNumber !== 0){
      this.setState(() => ({
        IceCreamFlavorNumber: this.state.IceCreamFlavorNumber - 1,
      }));
    }
    else{
      this.setState(() => ({
        IceCreamFlavorNumber: 4,
      }));
    }
  }

  rightClickedIcecream() {
    if(this.state.IceCreamFlavorNumber !== 4){
      this.setState(() => ({
        IceCreamFlavorNumber: this.state.IceCreamFlavorNumber + 1,
      }));
    }
    else{
      this.setState(() => ({
        IceCreamFlavorNumber: 0,
      }));
    }
  }

  render(){
    const ICECREAM_FLAVOR = {
      0: {
        iceCreamFlavor: "Chocolate Ice-Cream",
        iceCreamImg: ChocolateIcecream,
      },
      1: {
        iceCreamFlavor: "Strawberry Ice-Cream",
        iceCreamImg: StrawberryIcecream,
      },
      2: {
        iceCreamFlavor: "Vanilla Ice-Cream",
        iceCreamImg: VanillaIcecream,
      },
      3: {
        iceCreamFlavor: "Cotton Candy Ice-Cream",
        iceCreamImg: CottonIcecream,
      },
      4: {
        iceCreamFlavor: "Cookie & Creme Ice-Cream",
        iceCreamImg: CookieIcecream,
      },
    }

    return (
      <div>
        <Navbar/>
        <main id="main-main">
          <section id="flavor-picker-container">
            <h2>Choose a Flavor</h2>
            <div id="flavor-picker-view">
              <img src={Arrow}  className="image-button" onClick={this.leftClickedIcecream}/>
              <div id="icecream-image">
                <img src={Cone} id="icecream-image-cone" alt="ice-cream cone"/>
                <img src={ICECREAM_FLAVOR[this.state.IceCreamFlavorNumber].iceCreamImg} id="icecream-image-icecream" alt="icecream cone" />
              </div>
              <img src={Arrow} className="image-button" onClick={this.rightClickedIcecream}/>
            </div>
            <h4>{ICECREAM_FLAVOR[this.state.IceCreamFlavorNumber].iceCreamFlavor}</h4>
            <Link to="/flavors/"><Button buttonName="More Flavors" /></Link>
          </section>
          <section id="our-story-container">
            <div>
              <h3>Our Story</h3>
              <p>La verdure on et pelouse minutes la dernier. Oh ca dechire rustres heureux ensuite en. Voulut baquet sortie que nul. Souvenirs pouvaient ont vie qui expliquer fit annoncait. Crurent tristes des partout meriter ere rustres. Nid par adultes maigres famille entrevu pelouse. Que son car ete neanmoins puissions echauffer. Maison ah tuiles terres rendre le venait ou. Altere une non signes sortie trente prison. </p>
              <Button buttonName="More About Us"/>
            </div>
            <img src={Building} alt="Here The Scoop building" id="building-img"/>
          </section>
          <section id="fun-container">
            <h3>Join the Fun</h3>
            <div id="fun-active">
              <img src="https://source.unsplash.com/random?0" alt="test" width="200px" height="200px"/>
              <img src="https://source.unsplash.com/random?1" alt="test" width="200px" height="200px"/>
              <img src="https://source.unsplash.com/random?2" alt="test" width="200px" height="200px"/>
            </div>
            <p>Come on the first day to get your picture taken on the wall</p>
          </section>
          <section id="location-container">
            <img src={Sign} alt="Here The Scoop Sign outside of the building"  id="sign-img"/>
            <div id="location-info">
              <h3>Come Enjoy a Scoop</h3>
              <address>755 Gardiner Rd, Dresden Me 04342</address>
              <img src="https://www.topoquest.com/place-detail-map.php?id=582446" alt="test" width="400px" height="200px"/>
              <Link to="/findus/"><Button buttonName="Location"/></Link>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default IndexPage
