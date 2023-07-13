import React from 'react'
import { Link } from "react-router-dom"
import './HomePage.css'

export default function HomePage() {
  return (
    <>
      <div className="container-fluid">
        <div className='row'>
          <div className="col-12">
            <div className="d-flex justify-content-center mt-5 align-items-center flex-wrap animate-in">
              <div className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
                <img src="https://i.imgur.com/kS9Dktl.png" className="c-img"></img>
                <h1 className="fw-bold text-center name-text m-0 me-md-5 text-center">ALEB</h1>
              </div>
              <h1 className="fw-bold text-center name-text ms-md-3 m-0 text-center">ELLIOTT</h1>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column align-items-center mt-md-0 mt-5 animate-in">
              <h3 className="text-muted text-center"><span className="fw-bold text-success me-2 d-none d-md-inline-block">--</span>Full-Stack Software Engineer<span className="fw-bold text-success ms-2 d-none d-md-inline-block">--</span></h3>
              <p className="text-success fade-in-delay">From data architecture to design</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-center fade-in-delay">
              <h3 className="">Explore My Work</h3>
              <Link to={'/portfolio'}>
                <h1><i className="icon mdi mdi-xml text-success"></i></h1>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-center fade-in-delay">
              <h3 className="">Contact Me</h3>
              <a href="mailto:caleb123elliott@gmail.com">
                <h1><i className="icon mdi mdi-email-outline text-success"></i></h1>
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="mt-5 fade-in-delay">
              <div className="divider-line bg-success m-auto"></div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <h3 className="text-center fade-in-delay">My Links</h3>
            <p className="text-muted text-center fade-in-delay">I am a passionate software engineer specializing in full-stack development.<br />How can I assist in your software needs?</p>
            <div className="d-flex justify-content-center fade-in-delay">
              <a href="https://github.com/CALEBELLIOTT" className="mx-4">
                <h1>
                  <i className="icon mdi mdi-github text-dark"></i>
                </h1>
              </a>
              <a href="https://www.linkedin.com/in/caleb-elliott1/" className="mx-4">
                <h1>
                  <i className="icon mdi mdi-linkedin linkedin-icon"></i>
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}