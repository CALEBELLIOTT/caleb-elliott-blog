import React from "react"
import './PortfolioPage.css'

export default function Portfolio() {
  let projectData = { onTracker: { imgUrls: ['https://i.imgur.com/WqrQ6XT.png', 'https://i.imgur.com/QCTzvZe.png', 'https://i.imgur.com/MtzZE5P.png'], liveSiteUrl: 'https://ontracker-capstone.herokuapp.com/', gitHubUrl: 'https://github.com/CALEBELLIOTT/on-tracker' }, keepr: { imgUrls: ['https://i.imgur.com/KhLgXN7.png', 'https://i.imgur.com/Ora9Yrp.png'], liveSiteUrl: 'https://keeprheroku.herokuapp.com/#/', gitHubUrl: 'https://github.com/CALEBELLIOTT/Keepr' }, allSpice: { imgUrls: ['https://i.imgur.com/dazKQgd.png', 'https://i.imgur.com/BqXICG4.png'], liveSiteUrl: 'https://all-spice-node.herokuapp.com/#/', gitHubUrl: 'https://github.com/CALEBELLIOTT/AllSpiceNode' }, tower: { imgUrls: ['https://i.imgur.com/YzvXamX.png', 'https://i.imgur.com/BiX62np.png'], liveSiteUrl: 'https://tower-codeworks.herokuapp.com/?#/', gitHubUrl: 'https://github.com/CALEBELLIOTT/tower' } }

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
              <h4 className="text-center">Full-Stack Software Developer</h4>
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
            <p className="text-center text-md-start">Software used to keep track of contractor's job locations, employees, tasks, and notes - all while keeping the client in the loop.</p>
            <ul className="d-flex flex-wrap justify-content-center">
              <li className="me-4 mt-2">Vue.js</li>
              <li className="me-4 mt-2">Vue Router</li>
              <li className="me-4 mt-2">Auth0</li>
              <li className="me-4 mt-2">Node.js</li>
              <li className="me-4 mt-2">Express</li>
              <li className="me-4 mt-2">MongoDB</li>
              <li className="me-4 mt-2">BootStrap</li>
              <li className="me-4 mt-2">Google AutoFill Api</li>
              <li className="me-4 mt-2">MapBox</li>
            </ul>
            <div className="d-flex justify-content-around mt-5 align-items-center">
              <button className="btn btn-outline-success" onClick={() => { routeTo(projectData.onTracker.liveSiteUrl) }}>Live Site</button>
              <h1 className="m-0"><a href={projectData.onTracker.gitHubUrl}><i className="mdi mdi-github"></i></a></h1>
            </div>
          </div>
        </div>
        <div className="row large-margin">
          <div className="col-md-6 order-2 order-md-2">
            <div className="">
              <div className="img-container d-flex flex-column position-relative">
                <img src={projectData.keepr.imgUrls[1]} className='img-fluid shadow first-img'></img>
                <img src={projectData.keepr.imgUrls[0]} className='img-fluid shadow align-self-end trans-up mt-2'></img>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-1 mb-3">
            <div className="d-flex align-items-center justify-content-md-start justify-content-center">
              <h2 className="fw-bold me-2">Keepr</h2>
              <img className="app-logo" src="https://i.imgur.com/JDaZXEi.png"></img>
            </div>
            <p className="text-center text-md-start">Social media platform that allows users to share posts and create collections.</p>
            <ul className="d-flex flex-wrap justify-content-center">
              <li className="me-4 mt-2">Vue.js</li>
              <li className="me-4 mt-2">Vue Router</li>
              <li className="me-4 mt-2">Auth0</li>
              <li className="me-4 mt-2">.net C#</li>
              <li className="me-4 mt-2">MySQL</li>
              <li className="me-4 mt-2">BootStrap</li>
            </ul>
            <div className="d-flex justify-content-around mt-5 align-items-center">
              <button className="btn btn-outline-success" onClick={() => { routeTo(projectData.keepr.liveSiteUrl) }}>Live Site</button>
              <h1 className="m-0"><a href={projectData.keepr.gitHubUrl}><i className="mdi mdi-github"></i></a></h1>
            </div>
          </div>
        </div>
        <div className="row large-margin">
          <div className="col-md-6 order-2 order-md-1">
            <div className="">
              <div className="img-container d-flex flex-column position-relative">
                <img src={projectData.allSpice.imgUrls[1]} className='img-fluid shadow first-img'></img>
                <img src={projectData.allSpice.imgUrls[0]} className='img-fluid shadow align-self-end trans-up mt-2'></img>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-3">
            <div className="d-flex align-items-center justify-content-md-start justify-content-center">
              <h2 className="fw-bold me-2">All-Spice</h2>
              <img className="app-logo" src="https://i.imgur.com/U69BQNa.png"></img>
            </div>
            <p className="text-center text-md-start">Recipe sharing app where users can upload, rate, and save recipes.</p>
            <ul className="d-flex flex-wrap justify-content-center">
              <li className="me-4 mt-2">Vue.js</li>
              <li className="me-4 mt-2">Vue Router</li>
              <li className="me-4 mt-2">Auth0</li>
              <li className="me-4 mt-2">Node.js</li>
              <li className="me-4 mt-2">MongoDb</li>
              <li className="me-4 mt-2">BootStrap</li>
            </ul>
            <p className="text-muted text-center">*I also have another backend built out in .net C# and MySQL that supports most endpoints this version does.</p>
            <div className="d-flex justify-content-around mt-5 align-items-center">
              <button className="btn btn-outline-success" onClick={() => { routeTo(projectData.allSpice.liveSiteUrl) }}>Live Site</button>
              <h1 className="m-0"><a href={projectData.allSpice.gitHubUrl}><i className="mdi mdi-github"></i></a></h1>
            </div>
          </div>
        </div>
        <div className="row large-margin">
          <div className="col-md-6 order-2 order-md-2">
            <div className="">
              <div className="img-container d-flex flex-column position-relative">
                <img src={projectData.tower.imgUrls[1]} className='img-fluid shadow first-img'></img>
                <img src={projectData.tower.imgUrls[0]} className='img-fluid shadow align-self-end trans-up mt-2'></img>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-1 mb-3">
            <div className="d-flex align-items-center justify-content-md-start justify-content-center">
              <h2 className="fw-bold me-2">Tower</h2>
              <img className="app-logo" src="https://i.imgur.com/q8KggZ8.png"></img>
            </div>
            <p className="text-center text-md-start">Event ticketing app where users can explore events, obtain tickets, and leave comments on event pages.</p>
            <ul className="d-flex flex-wrap justify-content-center">
              <li className="me-4 mt-2">Vue.js</li>
              <li className="me-4 mt-2">Vue Router</li>
              <li className="me-4 mt-2">Auth0</li>
              <li className="me-4 mt-2">Node.js</li>
              <li className="me-4 mt-2">Express</li>
              <li className="me-4 mt-2">MongoDb</li>
              <li className="me-4 mt-2">BootStrap</li>
            </ul>
            <div className="d-flex justify-content-around mt-5 align-items-center">
              <button className="btn btn-outline-success" onClick={() => { routeTo(projectData.tower.liveSiteUrl) }}>Live Site</button>
              <h1 className="m-0"><a href={projectData.tower.gitHubUrl}><i className="mdi mdi-github"></i></a></h1>
            </div>
          </div>
        </div>
        <div className="row large-margin">
          <div className="col-12">
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-center">This Website!</h2>
              <p className="text-center text-success">This website was built from scratch by me</p>
              <div>
                <ul className="d-flex flex-wrap justify-content-center">
                  <li className="me-4">React.js</li>
                  <li className="me-4">React Router</li>
                  <li className="me-4">Bootstap</li>
                  <li className="me-4">Wordpress API</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}