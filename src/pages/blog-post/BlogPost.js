import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Sidebar } from "../../components/side-bar/Sidebar"
import { api } from "../../services/AxiosService"
import './BlogPost.css'

export default function BlogPost() {
  const params = useParams()
  const [blogPost, setBlogPost] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log(params.id);
    getPost()
  }, [])


  async function getPost() {
    try {
      let res = await api.get('https://moneywithcaleb.com/wp-json/wp/v2/posts/' + params.id + '?_embed')
      console.log(res.data);
      setBlogPost(res.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    renderBlogTitle()
    renderBlogImage()
    renderBlogContent()
    console.log(blogPost);
  }, [blogPost])

  function renderBlogTitle() {
    if (blogPost.title) {
      document.getElementById("blog-title").innerHTML = blogPost.title?.rendered
      let date = new Date(blogPost.date).toDateString()
      document.getElementById('blog-date').innerText = date
    }
  }
  function renderBlogImage() {
    if (blogPost.title) {
      document.getElementById('blog-img').src = blogPost._embedded["wp:featuredmedia"][0]?.link
    }
  }
  function renderBlogContent() {
    if (blogPost.title) {
      document.getElementById('blog-content').innerHTML = blogPost.content.rendered
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
              <div className="mt-5 blog-content" id="blog-content">
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