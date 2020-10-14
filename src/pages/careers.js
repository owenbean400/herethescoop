import React from "react"

import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"
import CareerPost from "../components/career/careerPost.js"

const CareersPage = () => (
  <div>
    <Navbar />
    <main id="career-page">
      <CareerPost
        jobTitle="Ice Cream Scooper"
        jobDesc="Description"
        jobResume="Please send resume to herethescoopcareers@herethescoop.com"
      />
      <CareerPost
        jobTitle="Ice Cream Customer Service"
        jobDesc="Description"
        jobResume="Please send resume to herethescoopcareers@herethescoop.com"
      />
    </main>
    <Footer />
  </div>
)

export default CareersPage
