import React, { Component } from "react"
import { Link } from "gatsby"
import "./navbar.sass"

const NAVLINKS = ["Flavors", "Our Stories", "Find Us"]
const LINK_CHANGE = /\w/g

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { showPhoneLinks: false }
    this.handleClick = this.handleClick.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }
  //switch between showing navbar and not showing
  handleClick() {
    this.setState(prevState => ({
      showPhoneLinks: !prevState.showPhoneLinks,
    }))
  }
  //hide navbar from phone when it's over phone width
  handleResize() {
    if (window.innerWidth > 768) {
      this.setState(() => ({
        showPhoneLinks: false,
      }))
    }
  }
  //mounting resize and onclick hamburger
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.handleResize)
      document
        .getElementById("hamburger")
        .addEventListener("click", this.handleClick)
    }
  }
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.handleResize)
      document
        .getElementById("hamburger")
        .removeEventListener("click", this.handleClick)
    }
  }

  render() {
    //turn nav link array into link names and removing space and caps for link url
    const LIST_ITEMS = NAVLINKS.map(NAVLINKS => (
      <Link
        key={NAVLINKS}
        to={"/" + NAVLINKS.toLowerCase().match(LINK_CHANGE).join("") + "/"}
      >
        <li>{NAVLINKS}</li>
      </Link>
    ))

    //css for phone navbar display
    const HIDE = {
      top: "-400px",
    }
    const SHOW = {
      top: "0",
    }

    return (
      <div>
        <nav>
          <h1>
            <Link to="/">Here The Scoop</Link>
          </h1>
          <ol>{LIST_ITEMS}</ol>
          <div id="hamburger">
            <div className="hamburger-slice"></div>
            <div className="hamburger-slice"></div>
            <div className="hamburger-slice"></div>
          </div>
        </nav>
        <div
          id="navbar-phone-links"
          style={this.state.showPhoneLinks ? SHOW : HIDE}
        >
          <ol>{LIST_ITEMS}</ol>
        </div>
      </div>
    )
  }
}
