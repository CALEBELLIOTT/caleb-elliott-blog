import React from "react";
import './Sidebar.css'

export class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src='https://i.imgur.com/Kx2Mh8r.jpg' className="headshot mt-4"></img>
          <h2 className="text-center mt-2 mb-0">Caleb Elliott</h2>
          <div className="d-flex justify-content-around my-2">
            <a href="https://www.linkedin.com/in/caleb-elliott1/" target='_blank'>
              <i className="mdi mdi-linkedin social-link linkedin"></i>
            </a>
            <a href="https://github.com/CALEBELLIOTT" target='_blank'>
              <i className="mdi mdi-github social-link github"></i>
            </a>
            <a href="https://www.instagram.com/caleb.ellio/" target='_blank'>
              <i className="mdi mdi-instagram social-link instagram"></i>
            </a>
          </div>
          <p className="text-center text-success mb-3">Software Engineer</p>
          <p className="intro-text">I am an experienced software developer who loves all things technology. This is my space to share my ideas about tech as well and maybe even a few random things that interest me! Enjoy your time here!</p>
        </div>
      </div>
    )
  }
}