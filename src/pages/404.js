import React from "react"

import "../sassPages/404.sass"

import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"

const NotFoundPage = () => (
  <div>
    <Navbar />
    <main id="error-main">
      <h1>Sorry this url doesn't appear to be a page</h1>
    </main>
    <Footer />
  </div>
)

export default NotFoundPage
