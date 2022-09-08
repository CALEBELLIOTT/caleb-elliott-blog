import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";



export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: props.posts }
  }

  componentDidMount() {
    console.log(this.state)
  }
  render() {
    let categories = [{ name: 'Blog', route: '/blog' }, { name: 'Portfolio', route: '/portfolio' }, { name: 'About', route: '/about' }]
    return (
      <div className="">
        {/* <div className="banner-img d-flex align-items-center justify-content-end">
          <img src="https://i0.wp.com/moneywithcaleb.com/wp-content/uploads/2021/11/logo-2.png?w=493&ssl=1" className="logo-img"></img>
        </div> */}
        <div className="container-fluid">
          <div className="row nav-background">
            <div className="col-12">
              <div className="d-flex p-2 align-items-end justify-content-between">
                <h1 className="mb-0">Caleb Elliott</h1>
                <div className="d-flex">
                  {categories.map((c) => {
                    return (
                      <div>
                        <Link to={c.route} className="category-text pe-5 text-dark" key={c.name}>{c.name}</Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}