import React from 'react'
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
            <div className="d-flex justify-content-center mt-md-0 mt-5 animate-in">
              <h3 className="text-muted text-center"><span className="fw-bold text-success me-2 d-none d-md-inline-block">--</span>Full-Stack Software Developer<span className="fw-bold text-success ms-2 d-none d-md-inline-block">--</span></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}