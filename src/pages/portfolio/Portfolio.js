import React from "react"
import './PortfolioPage.css'

export default function Portfolio() {
  let projectData = { onTracker: { imgUrls: ['https://i.imgur.com/WqrQ6XT.png', 'https://i.imgur.com/QCTzvZe.png', 'https://i.imgur.com/MtzZE5P.png'], liveSiteUrl: 'https://ontracker-capstone.herokuapp.com/', gitHubUrl: 'https://github.com/CALEBELLIOTT/on-tracker' } }

  function routeTo(route) {
    console.log(route);
  }
  return (
    <>
      <div className="container-fluid portfolio-container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column align-items-center mt-5">
              <h1 className="text-success fw-bold">Caleb Elliott</h1>
              <h4 className="text-center">Passionate Full-Stack Software Developer</h4>
              <p className="text-muted"><span className="text-success fw-bold">--</span>Check Out Some Of My Work<span className="text-success fw-bold">--</span></p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 order-2 order-md-1">
            <div className="">
              <div className="img-container d-flex flex-column position-relative">
                <img src={projectData.onTracker.imgUrls[1]} className='img-fluid shadow first-img'></img>
                <img src={projectData.onTracker.imgUrls[0]} className='img-fluid shadow align-self-end trans-up mt-2'></img>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-3">
            <div className="d-flex align-items-center justify-content-md-start justify-content-center">
              <h2 className="fw-bold me-2">On-Tracker</h2>
              <img className="app-logo" src="https://i.imgur.com/BUcXHON.png"></img>
            </div>
            <p>Software used to keep track of contractor's job locations, employees, tasks, and notes - all while keeping the client in the loop.</p>
            <ul className="d-flex flex-wrap justify-content-md-start justify-content-center">
              <li className="me-4 mt-2">Vue.js</li>
              <li className="me-4 mt-2">Node.js</li>
              <li className="me-4 mt-2">MongoDB</li>
              <li className="me-4 mt-2">BootStrap</li>
              <li className="me-4 mt-2">MapBox</li>
            </ul>
            <div className="d-flex justify-content-around mt-5 align-items-center">
              <button className="btn btn-outline-success" onClick={() => { routeTo(projectData.onTracker.liveSiteUrl) }}>Live Site</button>
              <h1 className="m-0"><a href={projectData.onTracker.gitHubUrl}><i className="mdi mdi-github"></i></a></h1>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-6">
            <div className="img-container">
              <img src={projectData.onTracker.imgUrls[1]} className='img-fluid shadow'></img>
            </div>
          </div>
        </div> */}

      </div>
    </>
  )
}