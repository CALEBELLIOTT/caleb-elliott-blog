// @ts-nocheck
import React, { useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import BlogPost from "../../pages/blog-post/BlogPost"
import './BlogPostCard.css'
export default function BlogPostCard({ blog }) {

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
      } = {},
      preview,
      title
    } = {}
  } = blog

  return (
    <>
      <div className="blog-post-container">
        <Routes>
          <Route path="blog/:id" element={<BlogPost></BlogPost>}></Route>
        </Routes>
        <Link to={'./' + id}>
          <img className="blog-img img-fluid" src={imageUrl}></img>
        </Link>
        <div className="bg-light p-2">
          <div>
            <Link to={'./' + id}>
              <h5 className="text-success title-text m-0 mt-2">{title}</h5>
            </Link>
            <div className="text-muted preview-text">{preview}</div>
          </div>
        </div>
      </div>
    </>
  )
}