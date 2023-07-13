// @ts-nocheck
import React, { useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import BlogPost from "../../pages/blog-post/BlogPost"
import './BlogPostCard.css'
import moment from "moment"
import { BLOG_POST_CATEGORIES } from "../../util/enums"
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
      title,
      updatedDate,
      publishDate,
      settings: {
        estimatedReadingTime,
        categories
      } = {}
    } = {}
  } = blog

  const formattedUpdatedDate = moment(updatedDate).format('MM/DD/YY')
  const formattedPublishDate = moment(publishDate).format('MM/DD/YY')
  return (
    <>
      <div className="blog-post-container mb-3">
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
            <p className="mb-2">{updatedDate ? formattedUpdatedDate : formattedPublishDate}</p>
            <div className="text-muted preview-text">
              <p className="preview-text">{preview}</p>
            </div>
            <p className="mb-0 preview-text">{estimatedReadingTime} min read</p>
            <p className="mb-0 text-success preview-text">{categories.map(category => BLOG_POST_CATEGORIES[category])}</p>
          </div>
        </div>
      </div>
    </>
  )
}