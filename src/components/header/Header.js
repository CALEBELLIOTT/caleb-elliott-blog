import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";



export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: props.posts }
  }

  componentDidMount() {

  }

  // TODO render bootstrap nav-bar instead. Not mobile responsive
  render() {
    let categories = [{ name: 'Blog', route: '/blog' }, { name: 'Portfolio', route: '/portfolio' }, { name: 'About', route: '/about' }]
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={'/'}>
            <img src="https://i.imgur.com/kS9Dktl.png" className="logo me-4" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                categories.map(c => {
                  return (
                    <>
                      <li className="nav-item">
                        <Link to={c.route} className="category-text pe-5 text-dark" key={c.name}>{c.name}</Link>
                      </li>
                    </>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}