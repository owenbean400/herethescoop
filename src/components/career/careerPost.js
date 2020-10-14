import React, { Component } from "react"

import "./careerPost.sass"

export default class careerPost extends Component {
  render() {
    return (
      <div className="career-post-container">
        <h2 className="career-post-jobTitle">{this.props.jobTitle}</h2>
        <p className="career-post-jobDesc">{this.props.jobDesc}</p>
        <p className="career-post-jobResume">{this.props.jobResume}</p>
      </div>
    )
  }
}
