// @ts-nocheck
import React, { useEffect, useState } from 'react'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import LoadingIcon from "../../components/loadingIcon/LoadingIcon"
import { Sidebar } from "../../components/side-bar/Sidebar"
import { api } from "../../services/AxiosService"
import { contentfulService } from "../../services/ContentfulService"

export default function Blog() {

  const [blogPosts, setBlogPosts] = useState([])

  const getBlogPosts = async () => {
    let posts = await fetchBlogPosts()
    // posts = posts.filter(p => p.id != 1)
    setBlogPosts((posts || {}).items)
    console.log(posts);
  }

  useEffect(() => {
    getBlogPosts()
  }, [])

  async function fetchBlogPosts() {
    // const res = await api.get('')
    const res = await contentfulService.getEntries()
    console.log(res, 'res CE:TEST');
    return (res)
  }

  function Loading() {
    if (!blogPosts[0]) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <LoadingIcon />
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="mt-4">
              <div className="row">
                {blogPosts.map((blog) => {
                  const {
                    fields: {
                      settings: {
                        hideFromBlogPage = false
                      } = {}
                    } = {}
                  } = blog || {}
                  return !hideFromBlogPage ? (
                    <div className="col-md-6 col-lg-4">
                      <BlogPostCard blog={blog} key={blog.id}></BlogPostCard>
                    </div>
                  ) : null
                })}</div>
              <Loading></Loading>
              <div>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}





