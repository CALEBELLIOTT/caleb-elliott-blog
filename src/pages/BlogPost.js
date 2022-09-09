import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Sidebar } from "../components/side-bar/Sidebar"
import { api } from "../services/AxiosService"

export default function BlogPost() {
  const params = useParams()

  const [blogPost, setBlogPost] = useState({})

  useEffect(() => {
    console.log(params.id);
    async function getPost() {
      let res = await api.get('http://moneywithcaleb.com/wp-json/wp/v2/posts/' + params.id + '?_embed')
      setBlogPost(res.data)
    }
    getPost()
  }, [])

  useEffect(() => {
    renderBlogTitle()
    renderBlogImage()
    console.log(blogPost);
  }, [blogPost])

  function renderBlogTitle() {
    document.getElementById("blog-title").innerHTML = blogPost.title?.rendered
  }

  function renderBlogImage() {
    document.getElementById('blog-img').src = blogPost._embedded["wp:featuredmedia"][0]?.link
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="mt-4">
              <h4 id="blog-title"></h4>
              <img src="" id="blog-img"></img>
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