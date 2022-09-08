import React, { useEffect } from 'react'
import './BlogPostCard.css'
export default function BlogPostCard({ blog }) {

  useEffect(() => {
    renderTitle()
    renderExcerpt()
  }, [])

  function renderTitle() {
    document.getElementById('title-' + blog.id).innerHTML = blog.title.rendered
  }

  function renderExcerpt() {
    document.getElementById('excerpt-' + blog.id).innerHTML = blog.excerpt.rendered
  }

  return (
    <>
      <img className="blog-img img-fluid" src={blog._embedded["wp:featuredmedia"][0].source_url}></img>
      <div>
        <h5 className="text-success title-text m-0 mt-2" id={'title-' + blog.id}></h5>
        <div className="text-muted" id={'excerpt-' + blog.id}></div>
      </div>
    </>
  )
}