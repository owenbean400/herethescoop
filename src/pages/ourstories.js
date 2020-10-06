import React from "react"

import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"

import Building from "../images/building.png"

import "../sassPages/about.sass"

const AboutPage = () => (
  <div>
    <Navbar />
    <main id="about-main">
      <h1>About Us</h1>
      <div id="about-container">
        <p>
          As en celui vieux abris etais bride soirs et. Train eux mur bas car
          adore arbre voici. Un prudence negation flottent cervelle ah reprises
          du du. Quarante humaines et je tacherai. Sa me porte outre crete robes
          senti un du. Ah recupera reparler mourants je he epandent il depeches
          pourquoi. Poussaient paraissent ah un ce inattendus on. Attardent tu
          miserable illumines et mystiques superieur. Boulevards eux son
          executeurs vif simplement eclatantes commandant caracolent. Ma rythme
          disant courbe se reunir polies un parler.
        </p>
        <img src={Building} alt="Here The Scoop Building" />
      </div>
    </main>
    <Footer />
  </div>
)

export default AboutPage
