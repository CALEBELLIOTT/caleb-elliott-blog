import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Sidebar } from "../components/side-bar/Sidebar"
import { api } from "../services/AxiosService"

export default function AboutPage() {

  const [post, setPost] = useState({})

  useEffect(() => {
    getAbout()
  }, [])

  async function getAbout() {
    let aboutPost = axios.create({
      baseURL: "http://moneywithcaleb.com/wp-json/wp/v2/posts/1?_embed"
    })
    const res = await aboutPost.get('')
    setPost(res.data)
  }

  useEffect(() => {
    renderBlogTitle()
    renderBlogContent()
    console.log(post);
  }, [post])

  function renderBlogTitle() {
    if (post.title) {
      document.getElementById("blog-title").innerHTML = post.title?.rendered
      let date = new Date(post.date).toDateString()
      document.getElementById('blog-date').innerText = date
    }
  }
  function renderBlogContent() {
    if (post.title) {
      document.getElementById('blog-content').innerHTML = post.content.rendered
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="mt-4">
              <h4 className="fw-bold" id="blog-title"></h4>
              <p id="blog-date" className="text-success"></p>
              <img src="" id="blog-img" className="img-fluid"></img>
              <div className="mt-2" id="blog-content">
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </>
  )
}