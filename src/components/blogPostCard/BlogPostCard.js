// @ts-nocheck
import React, { useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import BlogPost from "../../pages/blog-post/BlogPost"
import './BlogPostCard.css'
export default function BlogPostCard({ blog }) {

  useEffect(() => {
    renderTitle()
    renderExcerpt()
  }, [])
  function renderTitle() {
    const {
      sys: {
        id = ''
      } = {},
      fields: {
        title
      }
    } = blog
    document.getElementById('title-' + id).innerHTML = title
  }
  function renderExcerpt() {
    const {
      sys: {
        id = ''
      } = {},
      fields: {
        title
      }
    } = blog
    document.getElementById('excerpt-' + id).innerHTML = title
  }


  const {
    sys: {
      id = ''
    } = {},
    fields: {
      thumbnail: {
        fields: {
          file: {
            url: imageUrl = ''
          } = {}
        } = {}
      } = {}
    } = {}
  } = blog

  return (
    <>
      <Routes>
        <Route path="blog/:id" element={<BlogPost></BlogPost>}></Route>
      </Routes>
      <Link to={'./' + id}>
        <img className="blog-img img-fluid" src={imageUrl}></img>
      </Link>
      <div>
        <Link to={'./' + id}>
          <h5 className="text-success title-text m-0 mt-2" id={'title-' + id}></h5>
        </Link>
        <div className="text-muted" id={'excerpt-' + id}></div>
      </div>
    </>
  )
}