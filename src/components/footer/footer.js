import React, { Component } from "react"
import { Link } from "gatsby"

import "./footer.sass"

const FOOTERLINKS = ["Flavors", "Our Stories", "Find Us", "Careers"]
const LINK_CHANGE = /\w/g

export default class Footer extends Component {
  render() {
    //footer links array into code
    const FOOTERLINK = FOOTERLINKS.map(FOOTERLINKS => (
      <Link
        to={"/" + FOOTERLINKS.toLowerCase().match(LINK_CHANGE).join("") + "/"}
        key="FOOTERLINKS"
      >
        <li>{FOOTERLINKS}</li>
      </Link>
    ))

    //this year in variable
    var d = new Date()
    const YEAR = d.getFullYear()

    return (
      <div>
        <footer id="footer">
          <div id="footer-container">
            <ol>{FOOTERLINK}</ol>
            <div>
              <p>Contact</p>
              <address>755 Gardiner Rd, Dresden, ME</address>
            </div>
          </div>
          <p id="copyright">{`Copyright ${YEAR} Here The Scoop.`}</p>
        </footer>
      </div>
    )
  }
}
